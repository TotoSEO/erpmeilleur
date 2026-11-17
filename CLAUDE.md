# meilleur-erp.fr — conventions de travail

Site Astro 5 + MDX (`src/content/articles/*.mdx`), déployé automatiquement par Cloudflare Workers depuis la branche `main` (production).

## Flux de travail

- Travailler et committer directement sur `main` (décision de l'éditeur du site, 17 novembre 2026) ; pas de branche ni de pull request, sauf demande explicite.
- Avant chaque push : `npm run build`, puis `python3 scripts/sync-ranking-anchors.py` (resynchronise les ancres des classements à partir du HTML généré) et un second build si des ancres ont changé ; vérifier qu'aucun lien ni ancre interne n'est cassé dans `dist/`.
- Le dépôt est public : ne jamais y committer de notes de travail, d'analyses ni d'échanges ; les garder hors du dépôt.

## Contenu

- Aucune information inventée : chaque chiffre (prix, nombre de clients, date, certification) vient d'une page officielle citée dans « Nos sources » ; sinon écrire « non communiqué » ou « sur devis ».
- Classements : frontmatter `ranking` (name, editor, anchor) et `faq` (réponses identiques dans le corps), composants `RankingList`, `RankCard`, `ProsCons`, `DataTable`, `FeatureColumns`, `Callout` ; `<Transparence />` en toute fin de fichier ; date de vérification explicite ; `updatedDate` à renseigner à chaque modification de fond.
- Nouvelle page de classement : l'ajouter à `src/data/cocon.ts` (section `CLASSEMENTS`), au hub `meilleurs-erp.mdx` (bloc `FeatureColumns` par taille / secteur / métier) et à `public/llms.txt`, puis la relier depuis les classements voisins.
- Titres : `title` est le H1, `seoTitle` ≤ 60 caractères, `description` ≤ 155 caractères.
