/**
 * POST /api/nav — enregistre une page vue envoyée par le navigateur (sans cookie).
 * Corps (texte JSON, 2 Ko max) : { p: chemin, r: référent, us/um/uc: paramètres UTM }.
 */
import type { APIRoute } from 'astro';
import { classifySource, deviceOf, isBotUA, isTrackedHost } from '../../lib/stats/sources';
import { statsStub } from '../../lib/stats/client';

export const prerender = false;

const NO_CONTENT = () => new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
const PATH_RE = /^\/[a-z0-9\-/._%]*$/i;
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: APIRoute = async ({ request, locals, url }) => {
  try {
    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== url.host) return new Response(null, { status: 403 });
    if (!isTrackedHost(url.hostname)) return NO_CONTENT();
    const ua = request.headers.get('user-agent') || '';
    if (isBotUA(ua)) return NO_CONTENT();
    const text = await request.text();
    if (text.length > 2048) return new Response(null, { status: 413 });
    const data = JSON.parse(text || '{}');

    const path = clean(data.p, 200);
    if (!PATH_RE.test(path) || path.startsWith('/admin') || path.startsWith('/api/')) return NO_CONTENT();

    let refHost: string | null = null;
    const ref = clean(data.r, 500);
    if (ref) {
      try { refHost = new URL(ref).hostname.toLowerCase() || null; } catch { refHost = null; }
    }
    const utmSource = clean(data.us, 100) || null;
    const utmMedium = clean(data.um, 100) || null;
    const utmCampaign = clean(data.uc, 100) || null;
    const src = classifySource({ refHost, siteHost: url.hostname, utmSource, utmMedium });

    const runtime = (locals as any).runtime;
    const stub = statsStub(runtime?.env);
    if (!stub) return NO_CONTENT();
    const country = (runtime?.cf?.country as string | undefined) ?? null;
    const job = stub.recordPageview({
      path,
      entry: src.entry,
      family: src.family,
      source: src.source,
      refHost: src.family === 'interne' ? null : refHost,
      utmSource,
      utmMedium,
      utmCampaign,
      country,
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
