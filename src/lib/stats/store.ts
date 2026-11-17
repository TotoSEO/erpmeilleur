/**
 * StatsStore — Durable Object (stockage SQLite) qui conserve la mesure d'audience
 * et les données de l'administration. Une seule instance (nommée) pour tout le site.
 *
 * Aucune adresse IP n'est stockée : un identifiant de visiteur est calculé à partir
 * d'un sel renouvelé chaque jour (l'ancien sel est supprimé), ce qui permet de compter
 * les visiteurs uniques sur une journée sans pouvoir les suivre d'un jour à l'autre.
 * Les événements de plus de 25 mois sont supprimés.
 */
import { DurableObject } from 'cloudflare:workers';
import { parisDay, DAY_MS } from './dates';

const RETENTION_MS = 25 * 30.44 * DAY_MS;
const LOGIN_WINDOW_IP_MS = 15 * 60_000;
const LOGIN_WINDOW_GLOBAL_MS = 60 * 60_000;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS pageviews (
  id INTEGER PRIMARY KEY,
  ts INTEGER NOT NULL,
  day TEXT NOT NULL,
  path TEXT NOT NULL,
  entry INTEGER NOT NULL,
  family TEXT NOT NULL,
  source TEXT NOT NULL,
  ref_host TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  country TEXT,
  device TEXT,
  visitor TEXT
);
CREATE INDEX IF NOT EXISTS pageviews_day ON pageviews(day);
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY,
  ts INTEGER NOT NULL,
  day TEXT NOT NULL,
  path TEXT NOT NULL,
  kind TEXT NOT NULL,
  placement TEXT,
  target TEXT,
  dest_host TEXT,
  country TEXT,
  device TEXT,
  visitor TEXT
);
CREATE INDEX IF NOT EXISTS clicks_day ON clicks(day);
CREATE TABLE IF NOT EXISTS bots (
  id INTEGER PRIMARY KEY,
  ts INTEGER NOT NULL,
  day TEXT NOT NULL,
  path TEXT NOT NULL,
  bot TEXT NOT NULL,
  category TEXT NOT NULL,
  status INTEGER
);
CREATE INDEX IF NOT EXISTS bots_day ON bots(day);
CREATE TABLE IF NOT EXISTS salts (day TEXT PRIMARY KEY, salt TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, expires INTEGER NOT NULL, created INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS login_failures (ip_hash TEXT NOT NULL, ts INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS login_failures_ts ON login_failures(ts);
`;

export interface PageviewInput {
  path: string;
  entry: boolean;
  family: string;
  source: string;
  refHost: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  country: string | null;
  device: string;
  ip: string;
  ua: string;
}

export interface ClickInput {
  path: string;
  kind: 'cta' | 'out';
  placement: string | null;
  target: string | null;
  destHost: string | null;
  country: string | null;
  device: string;
  ip: string;
  ua: string;
}

export interface BotInput {
  path: string;
  bot: string;
  category: string;
  status: number;
}

async function sha256hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function randomHex(bytes: number): string {
  return [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, '0')).join('');
}

type Row = Record<string, string | number | null>;

export class StatsStore extends DurableObject {
  private sql: SqlStorage;

  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env as never);
    this.sql = ctx.storage.sql;
    this.sql.exec(SCHEMA);
  }

  private rows(query: string, ...bindings: (string | number | null)[]): Row[] {
    return this.sql.exec(query, ...bindings).toArray() as Row[];
  }

  private purge(now: number) {
    const limit = now - RETENTION_MS;
    this.sql.exec('DELETE FROM pageviews WHERE ts < ?', limit);
    this.sql.exec('DELETE FROM clicks WHERE ts < ?', limit);
    this.sql.exec('DELETE FROM bots WHERE ts < ?', limit);
    this.sql.exec('DELETE FROM sessions WHERE expires < ?', now);
    this.sql.exec('DELETE FROM login_failures WHERE ts < ?', now - DAY_MS);
  }

  /** Identifiant de visiteur du jour (haché, sel quotidien) ; aucune IP n'est conservée. */
  private async visitorId(day: string, now: number, ip: string, ua: string): Promise<string | null> {
    if (!ip) return null;
    let row = this.rows('SELECT salt FROM salts WHERE day = ?', day)[0];
    if (!row) {
      this.sql.exec('INSERT OR IGNORE INTO salts (day, salt) VALUES (?, ?)', day, randomHex(16));
      this.sql.exec('DELETE FROM salts WHERE day < ?', day);
      this.purge(now);
      row = this.rows('SELECT salt FROM salts WHERE day = ?', day)[0];
    }
    return (await sha256hex(`${row.salt}|${ip}|${ua}`)).slice(0, 16);
  }

  async recordPageview(ev: PageviewInput): Promise<void> {
    const now = Date.now();
    const day = parisDay(now);
    const visitor = await this.visitorId(day, now, ev.ip, ev.ua);
    this.sql.exec(
      `INSERT INTO pageviews (ts, day, path, entry, family, source, ref_host, utm_source, utm_medium, utm_campaign, country, device, visitor)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      now, day, ev.path, ev.entry ? 1 : 0, ev.family, ev.source, ev.refHost, ev.utmSource, ev.utmMedium, ev.utmCampaign, ev.country, ev.device, visitor,
    );
  }

  async recordClick(ev: ClickInput): Promise<void> {
    const now = Date.now();
    const day = parisDay(now);
    const visitor = await this.visitorId(day, now, ev.ip, ev.ua);
    this.sql.exec(
      `INSERT INTO clicks (ts, day, path, kind, placement, target, dest_host, country, device, visitor)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      now, day, ev.path, ev.kind, ev.placement, ev.target, ev.destHost, ev.country, ev.device, visitor,
    );
  }

  async recordBot(ev: BotInput): Promise<void> {
    const now = Date.now();
    this.sql.exec(
      'INSERT INTO bots (ts, day, path, bot, category, status) VALUES (?, ?, ?, ?, ?, ?)',
      now, parisDay(now), ev.path, ev.bot, ev.category, ev.status,
    );
  }

  /** Données agrégées du tableau de bord, sur les `days` derniers jours (jour courant inclus). */
  async getDashboard(days: number) {
    const now = Date.now();
    const since = parisDay(now - (days - 1) * DAY_MS);
    const q = (query: string) => this.rows(query, since);
    const one = (query: string) => q(query)[0] ?? {};
    return {
      since,
      today: parisDay(now),
      firstDay: (this.rows('SELECT MIN(day) AS d FROM pageviews')[0]?.d as string | null) ?? null,
      totals: one(`SELECT COUNT(*) AS views, COALESCE(SUM(entry), 0) AS entries FROM pageviews WHERE day >= ?`),
      uniques: Number(one(`SELECT COALESCE(SUM(n), 0) AS n FROM (SELECT COUNT(DISTINCT visitor) AS n FROM pageviews WHERE day >= ? AND visitor IS NOT NULL GROUP BY day)`).n ?? 0),
      daily: q(`SELECT day, COUNT(*) AS views, SUM(entry) AS entries, COUNT(DISTINCT visitor) AS visitors FROM pageviews WHERE day >= ? GROUP BY day ORDER BY day`),
      families: q(`SELECT family, COUNT(*) AS n FROM pageviews WHERE day >= ? AND entry = 1 GROUP BY family ORDER BY n DESC`),
      sources: q(`SELECT family, source, COUNT(*) AS n FROM pageviews WHERE day >= ? AND entry = 1 GROUP BY family, source ORDER BY n DESC LIMIT 40`),
      pages: q(`SELECT path, COUNT(*) AS views, SUM(entry) AS entries, COUNT(DISTINCT day || visitor) AS visitors FROM pageviews WHERE day >= ? GROUP BY path ORDER BY views DESC LIMIT 100`),
      aiLandings: q(`SELECT source, path, COUNT(*) AS n FROM pageviews WHERE day >= ? AND entry = 1 AND family = 'ia' GROUP BY source, path ORDER BY n DESC LIMIT 30`),
      searchLandings: q(`SELECT source, path, COUNT(*) AS n FROM pageviews WHERE day >= ? AND entry = 1 AND family = 'moteur' GROUP BY source, path ORDER BY n DESC LIMIT 30`),
      countries: q(`SELECT COALESCE(country, '??') AS country, COUNT(*) AS n FROM pageviews WHERE day >= ? GROUP BY country ORDER BY n DESC LIMIT 12`),
      devices: q(`SELECT device, COUNT(*) AS n FROM pageviews WHERE day >= ? GROUP BY device ORDER BY n DESC`),
      cta: {
        total: Number(one(`SELECT COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta'`).n ?? 0),
        byPage: q(`SELECT path, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta' GROUP BY path ORDER BY n DESC`),
        byPlacement: q(`SELECT placement, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta' GROUP BY placement ORDER BY n DESC`),
        byTarget: q(`SELECT target, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta' GROUP BY target ORDER BY n DESC`),
        detail: q(`SELECT path, placement, target, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta' GROUP BY path, placement, target ORDER BY n DESC LIMIT 60`),
        daily: q(`SELECT day, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'cta' GROUP BY day`),
      },
      outbound: q(`SELECT dest_host, COUNT(*) AS n FROM clicks WHERE day >= ? AND kind = 'out' GROUP BY dest_host ORDER BY n DESC LIMIT 15`),
      bots: q(`SELECT category, bot, COUNT(*) AS n, COUNT(DISTINCT path) AS pages FROM bots WHERE day >= ? GROUP BY category, bot ORDER BY n DESC`),
      botLive: q(`SELECT bot, path, COUNT(*) AS n FROM bots WHERE day >= ? AND category = 'ia-direct' GROUP BY bot, path ORDER BY n DESC LIMIT 30`),
    };
  }

  // --- Administration -------------------------------------------------------

  async getAuthState(): Promise<{ hasPassword: boolean; setupVersion: number }> {
    const rows = this.rows(`SELECT key, value FROM settings WHERE key IN ('password_hash', 'setup_version')`);
    const map = new Map(rows.map((r) => [r.key as string, r.value as string]));
    return { hasPassword: map.has('password_hash'), setupVersion: Number(map.get('setup_version') ?? 0) };
  }

  async getPasswordHash(): Promise<string | null> {
    return (this.rows(`SELECT value FROM settings WHERE key = 'password_hash'`)[0]?.value as string | undefined) ?? null;
  }

  /** Enregistre le mot de passe (création ou réinitialisation) et ferme toutes les sessions. */
  async setPassword(hash: string, setupVersion: number): Promise<void> {
    this.sql.exec(`INSERT INTO settings (key, value) VALUES ('password_hash', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value`, hash);
    this.sql.exec(`INSERT INTO settings (key, value) VALUES ('setup_version', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value`, String(setupVersion));
    this.sql.exec('DELETE FROM sessions');
  }

  async createSession(tokenHash: string, expires: number): Promise<void> {
    const now = Date.now();
    this.sql.exec('DELETE FROM sessions WHERE expires < ?', now);
    this.sql.exec('INSERT INTO sessions (token_hash, expires, created) VALUES (?, ?, ?)', tokenHash, expires, now);
  }

  async isSessionValid(tokenHash: string): Promise<boolean> {
    const row = this.rows('SELECT expires FROM sessions WHERE token_hash = ?', tokenHash)[0];
    return !!row && Number(row.expires) > Date.now();
  }

  async deleteSession(tokenHash: string): Promise<void> {
    this.sql.exec('DELETE FROM sessions WHERE token_hash = ?', tokenHash);
  }

  async loginFailures(ipHash: string): Promise<{ ip: number; global: number }> {
    const now = Date.now();
    const ip = Number(this.rows('SELECT COUNT(*) AS n FROM login_failures WHERE ip_hash = ? AND ts > ?', ipHash, now - LOGIN_WINDOW_IP_MS)[0]?.n ?? 0);
    const global = Number(this.rows('SELECT COUNT(*) AS n FROM login_failures WHERE ts > ?', now - LOGIN_WINDOW_GLOBAL_MS)[0]?.n ?? 0);
    return { ip, global };
  }

  async addLoginFailure(ipHash: string): Promise<void> {
    const now = Date.now();
    this.sql.exec('DELETE FROM login_failures WHERE ts < ?', now - DAY_MS);
    this.sql.exec('INSERT INTO login_failures (ip_hash, ts) VALUES (?, ?)', ipHash, now);
  }

  async clearLoginFailures(ipHash: string): Promise<void> {
    this.sql.exec('DELETE FROM login_failures WHERE ip_hash = ?', ipHash);
  }
}
