import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// meilleur-erp.fr — site statique, optimisé SEO + performance de chargement.
export default defineConfig({
  site: 'https://meilleur-erp.fr',
  integrations: [mdx(), sitemap()],

  markdown: {
    // Les titres reçoivent automatiquement un id (slug) -> ancrage + sommaire.
    shikiConfig: { theme: 'github-light' },
  },

  adapter: cloudflare()
});