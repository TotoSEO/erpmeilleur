import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Un seul sitemap.xml qui liste TOUTES les URLs directement (pas d'index).
export const prerender = true;

const SITE = 'https://meilleur-erp.fr';

// Pages statiques hors collection (l'accueil en premier).
const STATIC_PATHS = ['/', '/plan-du-site/', '/auteur/', '/mentions-legales/'];

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', (e) => e.id !== 'exemple');
  const paths = [
    ...STATIC_PATHS,
    ...articles.map((e) => `/${e.id}/`),
  ];

  const urls = paths
    .map((p) => `  <url><loc>${SITE}${p}</loc></url>`)
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
