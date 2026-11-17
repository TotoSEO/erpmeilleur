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

## CTA, statistiques et administration

- CTA vers Divalto : configuration par page dans `src/data/cta.ts` (page produit ou métier, tarifs, démonstration, faits vérifiés). Affichés automatiquement dans `RankCard` (fiche dont `editor` vaut « Divalto »), dans `RankingList` (ligne n°1 si Divalto est premier) et par `<NotreChoix />` (placé après le tableau comparatif des classements dont Divalto est premier). Liens en `rel="nofollow noopener"`, paramètres UTM et attributs `data-cta*` suivis. Nouveau classement : ajouter son entrée dans `DIVALTO_CTA`.
- Mesure d'audience sans cookie : `src/components/Tracker.astro` (inclus dans `BaseLayout`) envoie les pages vues à `/api/nav` et les clics sortants à `/api/cta` ; classement des sources dans `src/lib/stats/sources.ts`.
- Stockage : Durable Object SQLite `StatsStore` (`src/lib/stats/store.ts`, liaison `STATS`), exporté par le point d'entrée Worker personnalisé `src/worker.ts`, qui journalise aussi les robots des moteurs et des IA (`assets.run_worker_first` dans `wrangler.jsonc`). Toute nouvelle classe de Durable Object exige une nouvelle entrée `migrations`.
- Administration : `/admin/` (`src/pages/admin/index.astro`). Mot de passe créé à la première visite avec un code d'installation à usage unique (empreinte dans `src/lib/admin/auth.ts`, le code lui-même n'est jamais commité). Réinitialisation : publier l'empreinte d'un nouveau code avec `version` + 1.

