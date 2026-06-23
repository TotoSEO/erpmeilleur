---
name: meilleur-erp-design
description: Use this skill to generate well-branded interfaces and assets for meilleur-erp.fr (le premier blog indépendant des logiciels ERP), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Essentiel à retenir
- **Blog de contenu indépendant** sur les ERP. D.A « anguleux : triangles & formes coupées » : fond blanc pur, palette bleu électrique + jaune, coins nets (rayons à 0), ombres dures décalées, décor de formes coupées dominant. PAS de verre dépoli, PAS d'arrondis, PAS de SaaS générique.
- **Fond BLANC pur `#FFFFFF`.** Palette : bleu électrique `#2E2EFF` (marque), bleu ciel `#18A6F6`, jaune `#FFD400`, rouge `#FF2D2D` (négatif/alerte), encre quasi noire `#0B0B12`. Le positif reprend le bleu (plus de vert). Dégradés : brand (bleu→ciel), aqua, sunset (jaune→ambre), iris (bleu→ciel→jaune, titres héros).
- **Trois polices :** Bricolage Grotesque (titres, souvent en `.text-gradient`), Hanken Grotesk (UI/corps), JetBrains Mono (**chaque chiffre mesuré**, tabulaire).
- **Panneaux à coins nets** (`.glass` / `GlassPanel`) : surface blanche, **bord encre 2px**, **ombre dure décalée** (`--shadow-pop` = 5px 5px 0). Plus aucun flou. Boutons & badges sont des **rectangles vifs** en CAPITALES, hover = décalage net (translate -2px + ombre 7px).
- **Signature = formes coupées** : helpers `.cut-corner`, `.cut-both`, `.cut-arrow`, `.cut-chevron` + variables `--cut-tri-up` / `--cut-tri-down` (clip-path). Le `<body class="lumiere">` pose des triangles bleu/jaune en fond. Triangles, biseaux, flèches : à utiliser généreusement.
- **AUCUN tiret cadratin « — » dans les textes.** Ponctuation de marque : le deux-points. Vouvoiement, direct, chiffré (`8,4` · `3 000` · `14,90 €`). Pas d'emoji.
- Coins nets partout (rayons à 0 ; seuls les cercles/pastilles gardent `--radius-full`). Pas de glassmorphism, pas d'ombre floue, pas de coin arrondi sur les cartes.

## Vocabulaire de composants (la signature)
`Callout` (Astuce/À retenir/Attention), `PullQuote`, `ColumnRow` (colonnage image+texte / asymétrique / 3 col, + `Visual`), `GlassPanel`, `StatDiscs` (disques de chiffres), `DataTable` (en-tête dégradé, ligne `_best`), `Faders` (notation), `Chart` (graphique clair), `ProductCard` (fiche outil), `Button`, `Badge`, `Input`. Namespace runtime `window.CrmLogicielFrDesignSystem_d9d94b` via `_ds_bundle.js`.

## Fichiers clés
- `styles.css` — lier en premier ; mettre `class="lumiere"` sur le `<body>` pour le fond lumineux.
- `readme.md` — guide complet (CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY).
- `components/` — primitives React. `ui_kits/site/` — blog cliquable (4 écrans) à copier/adapter.
- `guidelines/` — cartes de specimens. `assets/` — wordmark.

Pour un artefact statique : liez `styles.css`, `body class="lumiere"`, réutilisez `.headline` / `.prose` / `.num` / `.text-gradient` / `.glass` / `.dropcap`, copiez le wordmark.
