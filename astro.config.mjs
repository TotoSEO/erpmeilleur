import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

// meilleur-erp.fr — site statique, optimisé SEO + performance de chargement.
// Le sitemap est un fichier unique généré dans src/pages/sitemap.xml.ts.
export default defineConfig({
  site: 'https://meilleur-erp.fr',
  integrations: [mdx()],

  // L'ancienne page auteur est remplacée par la page « À propos ».
  redirects: { '/auteur': '/a-propos/' },

  markdown: {
    // Les titres reçoivent automatiquement un id (slug) -> ancrage + sommaire.
    shikiConfig: { theme: 'github-light' },
  },

  adapter: cloudflare()
});