/**
 * Point d'entrée du Worker Cloudflare (remplace celui de l'adaptateur Astro).
 * - délègue toutes les requêtes au gestionnaire Astro (pages statiques + routes serveur) ;
 * - journalise, après coup et sans ralentir la réponse, les passages des robots
 *   des moteurs et des IA (user-agent déclaré) sur les pages du site ;
 * - exporte le Durable Object qui stocke les statistiques.
 */
import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import { handle } from '@astrojs/cloudflare/handler';
import { StatsStore } from './lib/stats/store';
import { detectCrawler, isTrackedHost } from './lib/stats/sources';
import { statsStub } from './lib/stats/client';

export function createExports(manifest: SSRManifest) {
  const app = new App(manifest);

  /**
   * Pages et fichiers : servis d'abord par les assets avec la requête d'origine, pour
   * garder leurs redirections (ex. /page -> /page/) au lieu de les suivre ; sinon Astro.
   */
  const serve = async (request: Request, env: any, ctx: ExecutionContext): Promise<Response> => {
    const { pathname } = new URL(request.url);
    const isRead = request.method === 'GET' || request.method === 'HEAD';
    if (isRead && env.ASSETS && !pathname.startsWith('/api/') && !pathname.startsWith('/admin')) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
    }
    return handle(manifest, app, request, env, ctx);
  };
  const fetch = async (request: Request, env: any, ctx: ExecutionContext) => {
    const response = await serve(request, env, ctx);
    try {
      if (request.method === 'GET' || request.method === 'HEAD') {
        const crawler = detectCrawler(request.headers.get('user-agent') || '');
        if (crawler) {
          const url = new URL(request.url);
          const path = url.pathname;
          if (isTrackedHost(url.hostname) && !path.startsWith('/api/') && !path.startsWith('/admin')) {
            const stub = statsStub(env);
            if (stub) {
              ctx.waitUntil(
                stub
                  .recordBot({ path: path.slice(0, 200), bot: crawler.bot, category: crawler.category, status: response.status })
                  .catch(() => {}),
              );
            }
          }
        }
      }
    } catch {
      // La mesure ne doit jamais empêcher de servir la page.
    }
    return response;
  };
  return { default: { fetch }, StatsStore };
}
