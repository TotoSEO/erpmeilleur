import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Un seul sitemap.xml qui liste TOUTES les URLs directement (pas d'index).
export const prerender = true;

const SITE = 'https://meilleur-erp.fr';

// Pages statiques hors collection (l'accueil en premier).
const STATIC_PATHS = ['/', '/plan-du-site/', '/a-propos/', '/mentions-legales/'];

// « 12 octobre 2026 » -> « 2026-10-12 » (lastmod lisible par Google). Retourne null si la date est inconnue.
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function toIsoDate(fr?: string): string | null {
  if (!fr) return null;
  const m = fr.trim().toLowerCase().match(/^(\d{1,2})(?:er)?\s+([a-zéû]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS.indexOf(m[2]);
  if (month < 0) return null;
  return `${m[3]}-${String(month + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}

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
