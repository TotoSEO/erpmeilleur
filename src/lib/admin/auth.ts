/**
 * Authentification de l'administration (/admin/).
 * - Création du mot de passe à la première visite, protégée par un code d'installation
 *   à usage unique (seul son empreinte SHA-256 figure ici ; le code n'est pas dans le dépôt).
 *   Pour réinitialiser un mot de passe oublié : publier un nouveau code avec version + 1.
 * - Mot de passe haché en PBKDF2-SHA256 (sel aléatoire), sessions courtes stockées hachées.
 */

export const SETUP_CODE = { version: 1, sha256: 'd5f0c10d4ef2aa22f09c9253a4403e7b62bbab809b5712fc95d0d0b2c9a0f1ca' };

export const SESSION_COOKIE = '__Host-mea_admin';
export const SESSION_TTL_MS = 2 * 60 * 60 * 1000;
export const MAX_FAILURES_PER_IP = 5;
export const MAX_FAILURES_GLOBAL = 30;

// 30 000 itérations : reste sous la limite de temps CPU des Workers gratuits (10 ms).
const PBKDF2_ITERATIONS = 30_000;
const enc = new TextEncoder();

const toB64 = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes));
const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const toB64Url = (bytes: Uint8Array) => toB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

export async function sha256hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function pbkdf2(password: string, salt: Uint8Array, iterations: number): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256);
  return new Uint8Array(bits);
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt, PBKDF2_ITERATIONS);
  return `pbkdf2-sha256$${PBKDF2_ITERATIONS}$${toB64(salt)}$${toB64(hash)}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [alg, iter, salt, hash] = stored.split('$');
  if (alg !== 'pbkdf2-sha256' || !iter || !salt || !hash) return false;
  const derived = await pbkdf2(password, fromB64(salt), Number(iter));
  return constantTimeEqual(derived, fromB64(hash));
}

export async function isValidSetupCode(code: string): Promise<boolean> {
  const normalized = code.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (normalized.length < 16) return false;
  return (await sha256hex(normalized)) === SETUP_CODE.sha256;
}

export function passwordProblem(password: string, confirm: string): string | null {
  if (password.length < 12) return 'Le mot de passe doit contenir au moins 12 caractères.';
  if (password.length > 200) return 'Le mot de passe est trop long (200 caractères au maximum).';
  if (password !== confirm) return 'Les deux mots de passe ne correspondent pas.';
  return null;
}

export function newSessionToken(): string {
  return toB64Url(crypto.getRandomValues(new Uint8Array(32)));
}

export async function ipFingerprint(ip: string): Promise<string> {
  return (await sha256hex(`mea-admin|${ip}`)).slice(0, 32);
}
