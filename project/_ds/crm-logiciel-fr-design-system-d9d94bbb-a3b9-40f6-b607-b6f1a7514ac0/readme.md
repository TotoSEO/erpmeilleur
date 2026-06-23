# meilleur-erp.fr — Design System

**meilleur-erp.fr** — *le premier blog indépendant des logiciels ERP.*

Un média français qui teste chaque ERP sur des comptes réels et publie des verdicts **signés, chiffrés et datés** : comparatifs par profil, fiches avis, guides de décision. Aucun contenu d'éditeur, aucune mascotte, aucune promesse. Tous les contenus sont signés par un auteur unique, **Julien Lefevre**.

## Le concept

C'est **un blog de contenu**, pensé pour la lecture longue et le SEO. L'ADN reste « on mesure, on date, on signe » (chiffres en mono, verdicts datés), mais la direction artistique est **anguleuse : triangles & formes coupées** : fond blanc pur, palette bleu électrique + jaune, coins nets (rayons à 0), ombres dures décalées, et un décor de formes coupées (triangles, biseaux, flèches) comme signature visuelle dominante. Pas de SaaS générique, pas de verre dépoli, pas d'arrondis : un vocabulaire de composants éditoriaux à part entière.

## Sources

Défini à partir d'un brief de direction artistique (pas de codebase ni de Figma fournis), puis affiné en plusieurs itérations avec le client jusqu'à la D.A « anguleux, formes coupées ». Aucune URL externe. Polices via Google Fonts (voir « Substitutions »).

---

## CONTENT FUNDAMENTALS

**Voix :** un testeur indépendant qui a ouvert les comptes lui-même. Première personne assumée à la page auteur (« je teste, je signe »), **vouvoiement** du lecteur partout (« Trouvez votre ERP »).

**Ton :** direct, factuel, chiffré. On ne vend rien ; on rapporte ce qu'on a mesuré. Pas de superlatifs marketing. Si ce n'est pas mesuré, ce n'est pas publié.

**Ponctuation :** le **deux-points** introduit la preuve ou le verdict (« Mis à jour le 12 juin 2026 », « 37 outils testés : verdicts signés »). **Aucun tiret cadratin « — » dans les textes** : on utilise le deux-points, la virgule, le point ou la parenthèse. (Règle stricte demandée par le client.)

**Casing :** titres en casse de phrase (Bricolage Grotesque). Labels, kickers et marginalia en **CAPITALES mono espacées** (`letter-spacing: 0.14em`). Jamais de Title Case anglais.

**Chiffres :** toujours en mono tabulaire, à la française — virgule décimale (`8,4`), espace fine séparateur de milliers (`3 000`), unités collées au sens (`14,90 €`, `4 min 12 s`, `11 min de lecture`).

**Emoji : interdits dans l'UI.** Les seuls pictos tolérés sont les icônes Lucide (trait fin) et les signes typographiques (`+`, `−`, `✓`, `:`).

**Microcopie type :** « Recommandé », « Sous conditions », « À éviter », « Trouver mon ERP », « Signaler une erreur de tarif », « Testé sur compte réel ».

---

## VISUAL FOUNDATIONS

### Palette — bleu & jaune, sur blanc
### Palette — bleu & jaune, sur blanc
- **Blanc pur `#FFFFFF`** : le fond du site (`--canvas`). Pas de teinte.
- **Bleu électrique `#2E2EFF`** : couleur de marque primaire (`--blue`). Hover `#1C1CCC`, tint `#E4E4FF`.
- **Bleu ciel `#18A6F6`**, **Jaune `#FFD400`**, **Rouge `#FF2D2D`** : les couleurs flash. Le positif reprend le bleu (`--green` = `#2E2EFF`, plus de vert) ; rouge = négatif/alerte.
- **Encre `#0B0B12`** : quasi noir pour le texte et les titres. Secondaire `#26262F`, tertiaire `#54545F`.
- **Dégradés** : `--grad-brand` (bleu→ciel), `--grad-aqua` (ciel→bleu), `--grad-sunset` (jaune→ambre), `--grad-iris` (bleu→ciel→jaune, pour les titres héros et les guillemets).

Mode clair uniquement. Pas de dark mode.

### Typographie
- **Bricolage Grotesque** (`--font-display`) : titres expressifs, du caractère. Souvent en `.text-gradient` (dégradé iris) pour les héros.
- **Hanken Grotesk** (`--font-sans` / `--font-ui`) : UI et corps de lecture.
- **JetBrains Mono** (`--font-data`) : **chaque chiffre mesuré** (prix, durées, notes, dates), tabulaire. La signature data conservée.

### Panneaux à coins nets (la surface signature)
Fini le verre dépoli. La surface (`--glass-bg` = blanc) est opaque, sans flou, à **bord encre 2px** et **ombre dure décalée** (`--shadow-soft` = 5px 5px 0 encre). La variante `.glass-strong` reçoit un bord 2.5px et `--shadow-pop`. Classes : `.glass`, `.glass-strong` ; composant `GlassPanel`. Helpers de découpe : `.cut-corner`, `.cut-both`, `.cut-arrow`, `.cut-chevron`.

### Fond anguleux
Classe `.lumiere` sur le `<body>` : des **triangles et bandes diagonales** bleu/jaune en `position: fixed` derrière le contenu (~0.16 d'opacité). Pas de blobs, pas de texture, pas de grille.

### Relief & profondeur
Le relief vient d'**éléments qui flottent en couches** + **ombres dures décalées** : disques de chiffres (`StatDiscs`), pastille de note en débord (`ProductCard`), disque d'icône qui sort du cadre (`Callout`). Chacun porte son ombre (`--shadow-disc` = 4px 4px 0) et un léger angle.

### Coins nets & ombres
Rayons à 0 partout (`--radius-lg` / `--radius-xl` = 0) ; seuls les cercles et pastilles gardent `--radius-full`. Formes coupées via clip-path (`--cut-corner`, `--cut-both`, `--cut-tri-up`, `--cut-arrow`, `--cut-chevron`). Ombres **dures décalées** uniquement (`--shadow-soft`, `--shadow-pop`, `--shadow-glow`, 4–5px 0) ; aucune ombre floue, aucun glassmorphism.

### Animation & états
Minimale. Boutons : décalage net au survol (`translate(-2px,-2px)` + ombre portée 7px), transition 120ms. Pas de bounce, pas de parallaxe. Focus : filet bleu.

### Composants identitaires (le vocabulaire éditorial)
1. **Callout** — encadré Astuce / À retenir / Attention, disque d'icône en relief.
2. **PullQuote** — citation, guillemet géant dégradé.
3. **ColumnRow** — système de colonnage (image+texte, asymétrique, 3 colonnes) pour rythmer un article. **FeatureColumns** — colonnes de même hauteur (picto, texte, bouton en bas). **ProsCons** — double colonne Avantages / Inconvénients (titres H3).
4. **GlassPanel** — la brique panneau (coins nets).
5. **StatDiscs** — disques de chiffres flottants.
6. **DataTable** — tableau comparatif design (en-tête dégradé, ligne « meilleur » surlignée).
7. **Faders** — notation par curseurs sur rail gradué.
8. **Chart** — graphique clair (aire + ligne dégradées).
9. **ProductCard** — fiche outil avec pastille de note en débord.

### Interdits
Tirets cadratins dans le texte · fond teinté (le fond est blanc) · gradients ternes · verre dépoli / glassmorphism · ombres floues · coins arrondis sur les cartes · emojis dans l'UI · carrousels de logos · badges dorés « N°1 » · vert (couleur abandonnée).

---

## ICONOGRAPHY

Pas de jeu d'icônes propre dans le brief. Choix retenu : **Lucide** (CDN `unpkg.com/lucide`), trait fin et uniforme, cohérent avec l'épure moderne. Usage parcimonieux (`arrow-right`, `flag`, `menu`, `circle-check-big`, `circle-x`). Taille 14–18px, couleur héritée. Les disques d'icône des `Callout` reçoivent un glyphe Lucide-like blanc sur dégradé.

> **⚠ Substitution à valider.** Lucide est un choix de l'auteur du système. Fournissez un jeu propre si vous en avez un.

Pas d'emoji. Le **wordmark** est typographique : `assets/logo-wordmark.svg` (+ `-inverse`) — « Meilleur-erp » en Bricolage Grotesque encre, « .fr » dans un cartouche **coupé (biseau)** bleu.

---

## Substitutions de polices (à valider)

Toutes via **Google Fonts** (`tokens/fonts.css`), donc **non embarquées** : Bricolage Grotesque (display), Hanken Grotesk (UI/corps), JetBrains Mono (data). Pour un usage hors-ligne / production stricte, remplacez l'`@import` par des `@font-face` self-hosted (`.woff2`). **Fournissez vos binaires pour les embarquer.**

---

## Index du dépôt

**Entrée globale** — `styles.css` (liste d'`@import`).

**Tokens** (`tokens/`) — `fonts.css`, `colors.css` (palette + panneaux + dégradés + ombres dures), `typography.css`, `spacing.css` (rayons à 0 + clip-paths coupés), `base.css` (`.lumiere` triangles, `.num`, `.headline`, `.text-gradient`, `.prose`, `.dropcap`, `.glass`, `.cut-*`).

**Composants** (`components/`)
- `core/` — `Button`, `Badge`, `Input`
- `editorial/` — `Callout`, `PullQuote`, `ProsCons`
- `layout/` — `GlassPanel`, `ColumnRow` (+ `Visual`), `FeatureColumns`
- `data/` — `DataTable`, `Faders`, `StatDiscs`, `Chart`, `ProductCard`

Espace de noms runtime : `window.CrmLogicielFrDesignSystem_d9d94b`.

**UI kit** (`ui_kits/site/`) — blog cliquable (4 écrans) : guide long-form (`ArticleScreen`), fiche avis (`FicheAvisScreen`), comparatif (`ComparatifScreen`), page auteur (`AuteurScreen`) + `Chrome.jsx`.

**Specimens** (`guidelines/`) — cartes du Design System (Type, Colors, Spacing, Brand).

**Assets** (`assets/`) — wordmark (+ inverse).

**Skill** — `SKILL.md` (compatible Agent Skills / Claude Code).
