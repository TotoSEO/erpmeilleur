/**
 * POST /api/cta — enregistre un clic sur un lien externe (CTA Divalto ou lien sortant).
 * Corps (texte JSON, 1 Ko max) : { p: page, k: 'cta' | 'out', pl: emplacement, t: cible, h: hôte de destination }.
 */
import type { APIRoute } from 'astro';
import { deviceOf, isBotUA, isTrackedHost } from '../../lib/stats/sources';
import { statsStub } from '../../lib/stats/client';

export const prerender = false;

const NO_CONTENT = () => new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
const PATH_RE = /^\/[a-z0-9\-/._%]*$/i;
const TOKEN_RE = /^[a-z0-9\-:._]*$/i;
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: APIRoute = async ({ request, locals, url }) => {
  try {
    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== url.host) return new Response(null, { status: 403 });
    if (!isTrackedHost(url.hostname)) return NO_CONTENT();
    const ua = request.headers.get('user-agent') || '';
    if (isBotUA(ua)) return NO_CONTENT();
    const text = await request.text();
    if (text.length > 1024) return new Response(null, { status: 413 });
    const data = JSON.parse(text || '{}');

    const path = clean(data.p, 200);
    const kind = data.k === 'cta' ? 'cta' : 'out';
    const placement = clean(data.pl, 40);
    const target = clean(data.t, 80);
    const destHost = clean(data.h, 120).toLowerCase();
    if (!PATH_RE.test(path) || !TOKEN_RE.test(placement) || !TOKEN_RE.test(target) || !/^[a-z0-9.-]*$/.test(destHost)) return NO_CONTENT();

    const runtime = (locals as any).runtime;
    const stub = statsStub(runtime?.env);
    if (!stub) return NO_CONTENT();
    const job = stub.recordClick({
      path,
      kind,
      placement: placement || null,
      target: target || null,
      destHost: destHost || null,
      country: (runtime?.cf?.country as string | undefined) ?? null,
      device: deviceOf(ua),
      ip: request.headers.get('cf-connecting-ip') || '',
      ua,
    });
    if (runtime?.ctx?.waitUntil) runtime.ctx.waitUntil(job.catch(() => {}));
    else await job;
  } catch {
    // Données invalides : on ignore silencieusement.
  }
  return NO_CONTENT();
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
