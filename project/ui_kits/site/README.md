# UI kit — Blog éditorial crm-logiciel.fr

Recréation cliquable du blog. Mobile-first, contrastes AA, sans librairie lourde.
Ouvrez `index.html` : navigation entre 4 écrans, état persistant (localStorage).
Le `<body>` porte `class="lumiere"` (fond blanc + blobs dégradés derrière le verre).

## Écrans
- **ArticleScreen** — guide long-form : montre le colonnage (`ColumnRow`), les `Callout`, la `PullQuote`, le `Chart` et la lettrine en situation.
- **FicheAvisScreen** — fiche avis : hero verre + `StatDiscs`, pour/contre en colonnage, `Faders`, tableau des tarifs.
- **ComparatifScreen** — grand `DataTable` filtrable par profil + podium en `ProductCard`.
- **AuteurScreen** — page Julien Lefevre : méthode en 3 colonnes, `Callout` indépendance, derniers verdicts.

## Architecture
- `Chrome.jsx` expose `SiteHeader`, `SiteFooter`, `Wordmark`, `Breadcrumb` sur `window`.
- Chaque écran s'exporte sur `window` et reçoit `onNav(id)`.
- Les primitives viennent du bundle `window.CrmLogicielFrDesignSystem_d9d94b`.
- Icônes Lucide via CDN ; `lucide.createIcons()` rappelé à chaque rendu.

## Notes
- Les `Visual` sont des placeholders dégradés : remplacez-les par de vraies captures en production.
- `_ds_bundle.js` est généré par le compilateur ; il doit exister à la racine pour que le kit s'affiche.
