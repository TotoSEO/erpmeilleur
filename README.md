# meilleur-erp.fr

Site éditorial de **meilleur-erp.fr**, le blog indépendant des logiciels ERP.
On teste, on mesure, on date, on signe.

Construit avec **[Astro](https://astro.build/)** (génération statique) pour un SEO
et des performances de chargement maximaux. Les articles s'écrivent en **MDX** et
composent une bibliothèque de composants maison.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:4321
npm run build    # build statique dans dist/
npm run preview  # prévisualise le build
```

## La page d'exemple

Ouvrez **`/exemple/`** : c'est un article de blog complet qui montre la mise en
page type (héros 2 colonnes, encart « Les points à retenir », sommaire sticky avec
scroll-spy, colonnage, tableaux, callouts, graphique…) suivi, en bas de page, de la
**bibliothèque de composants** rendue en direct.

## Rédiger un article

Les articles vivent dans `src/content/articles/*.mdx`. Chaque fichier a un
frontmatter (métadonnées) et un corps en MDX mêlant texte et composants.

👉 **[COMPOSANTS.md](./COMPOSANTS.md)** liste tous les composants, leurs options et
la façon de les appeler dans le code. C'est le guide de référence pour la rédaction.

## Structure

```
src/
  components/        Composants du design system (.astro)
  content/articles/  Les articles de blog (.mdx)  ← exemple.mdx
  content.config.ts  Schéma du frontmatter des articles
  layouts/           BaseLayout (coquille SEO) + ArticleLayout (gabarit d'article)
  pages/             index.astro (accueil) + exemple.astro (article + bibliothèque)
  styles/            Tokens (couleurs, typo, espacement) + composants + article
public/              favicon, robots.txt, assets statiques
project/             Bundle de design d'origine (référence Claude Design)
```

## Direction artistique

Blanc pur, encre quasi noire, **bleu électrique `#2E2EFF`** + **jaune `#FFD400`**,
rouge `#FF2D2D` pour les alertes. Signature anguleuse : triangles, formes coupées,
coins nets, ombres dures décalées. Typo : Bricolage Grotesque (titres), Hanken
Grotesk (corps), JetBrains Mono (chiffres).

## SEO & performance

- Génération **statique** (HTML pur, JS minimal : seuls le menu mobile et le
  scroll-spy du sommaire embarquent un petit script).
- Balises `<title>`, meta description, Open Graph et **données structurées
  JSON-LD** (`Article`) par page.
- **Sitemap** (`/sitemap-index.xml`) et `robots.txt` générés au build.
- Polices Google Fonts avec `preconnect`. Pour un self-host strict (zéro requête
  tierce), basculez `src/styles/tokens/fonts.css` en `@font-face` local.
- Images : passez de vraies images à `heroImage` / `<Visual src>` ; pensez à
  préciser `width`/`height` et un `alt`.
