import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toIsoDate } from '../lib/dates';

// Un seul sitemap.xml qui liste TOUTES les URLs directement (pas d'index).
export const prerender = true;

const SITE = 'https://meilleur-erp.fr';

// Pages statiques hors collection (l'accueil en premier).
const STATIC_PATHS = ['/', '/plan-du-site/', '/a-propos/', '/mentions-legales/'];

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', (e) => e.id !== 'exemple');
  const entries: { path: string; lastmod: string | null }[] = [
    ...STATIC_PATHS.map((path) => ({ path, lastmod: null })),
    ...articles.map((e) => ({ path: `/${e.id}/`, lastmod: toIsoDate(e.data.updatedDate || e.data.publishedDate) })),
  ];

  const urls = entries
    .map(({ path, lastmod }) => `  <url><loc>${SITE}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
