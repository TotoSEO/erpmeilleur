# Bibliothèque de composants meilleur-erp.fr

Guide de rédaction : comment appeler chaque composant dans un article.

Les articles s'écrivent en **MDX** (`src/content/articles/<mon-article>.mdx`). Un
fichier MDX = un en-tête `---` (le frontmatter, les métadonnées) + le corps de
l'article où vous mélangez du texte Markdown et des composants.

Pour utiliser un composant, **importez-le une fois** en haut du fichier (juste
après le frontmatter), puis appelez sa balise dans le texte.

```mdx
---
title: 'Mon titre'
# … (voir « Frontmatter » plus bas)
---

import Callout from '../../components/Callout.astro';

## Mon premier titre

Mon paragraphe de texte normal.

<Callout tone="astuce">Mon astuce.</Callout>
```

> Aperçu en direct de tous les composants : ouvrez la page **`/exemple/`**,
> section « Bibliothèque de composants » en bas de l'article.

---

## Frontmatter de l'article (en-tête `---`)

| Champ | Obligatoire | Exemple |
|---|---|---|
| `title` | oui | `'Quel ERP pour une PME ?'` (le HTML est permis, ex. `<span class="text-gradient">2026</span>`) |
| `excerpt` | oui | `"Huit ERP testés sur comptes réels…"` (s'affiche sous le H1) |
| `description` | recommandé | meta description SEO (sinon `excerpt`) |
| `badges` | non | liste de `{ label, tone, variant, mono }` affichée au-dessus du H1 |
| `author` | non | `{ name, role, initials }` |
| `readingTime` | non | `'14 min'` |
| `publishedDate` | non | `'03 juin 2026'` (date de mise en ligne) |
| `updatedDate` | non | `'23 juin 2026'` (date d'actualisation) |
| `heroImage` | non | URL de l'image à la une. Si absent, un visuel dégradé sert de placeholder |
| `heroAlt` | non | texte alternatif de l'image |
| `heroLabel` | non | légende affichée sur le placeholder |
| `takeaways` | non | liste de puces de l'encart **« Les points à retenir »** |

La structure d'un article est automatique : **héros 2 colonnes** (titre + extrait
+ méta à gauche, image à droite) → encart **« Les points à retenir »** → votre
contenu. Le **sommaire** se construit tout seul à partir de vos titres `##` / `###`
(sticky à gauche sur desktop, dépliable sur mobile).

---

## Les composants

### Éditorial

#### `Callout` — encadré d'information
```mdx
import Callout from '../../components/Callout.astro';

<Callout tone="astuce">Votre conseil.</Callout>
<Callout tone="retenir" label="À retenir">Le point clé.</Callout>
<Callout tone="attention">L'avertissement.</Callout>
```
`tone` : `astuce` (bleu ciel) · `retenir` (bleu) · `attention` (jaune). `label` (optionnel) remplace le titre par défaut.

#### `PullQuote` — citation mise en avant
```mdx
import PullQuote from '../../components/PullQuote.astro';

<PullQuote author="Julien Lefevre" role="Auteur" initials="JL">
  Votre citation.
</PullQuote>
```

#### `ProsCons` — Avantages / Inconvénients
```mdx
import ProsCons from '../../components/ProsCons.astro';

<ProsCons
  pros={['Avantage 1', 'Avantage 2']}
  cons={['Limite 1', 'Limite 2']}
/>
```
Options : `prosTitle`, `consTitle` (titres personnalisés).

#### `KeyTakeaways` — « Les points à retenir »
Le plus simple : remplissez `takeaways` dans le frontmatter (l'encart s'affiche
automatiquement au bon endroit). Pour un encart supplémentaire dans le corps :
```mdx
import KeyTakeaways from '../../components/KeyTakeaways.astro';

<KeyTakeaways items={['Point 1', 'Point 2']} title="En résumé" />
```

### Mise en page (colonnage)

#### `ColumnRow` + `Visual` — colonnes pour rythmer l'article
```mdx
import ColumnRow from '../../components/ColumnRow.astro';
import Visual from '../../components/Visual.astro';

<ColumnRow layout="image-text" align="center">
  <Visual label="Capture annotée" />   {/* ou <Visual src="/img/x.png" alt="…" /> */}
  <div>Votre texte à côté de l'image.</div>
</ColumnRow>
```
`layout` : `image-text` · `text-image` · `two` · `aside-body` · `body-aside` · `three`.
`align` : `start` · `center` · `stretch`. Repasse en pleine largeur sur mobile.

#### `FeatureColumns` — colonnes de même hauteur (picto + titre + texte + bouton)
```mdx
import FeatureColumns from '../../components/FeatureColumns.astro';

<FeatureColumns columns={3} items={[
  { eyebrow: 'Étape 1', title: 'On teste', text: 'Comptes réels.', action: { label: 'En savoir plus', href: '#' } },
  { eyebrow: 'Étape 2', title: 'On mesure', text: 'Prix, support.', action: { label: 'La méthode', href: '#' } },
  { eyebrow: 'Étape 3', title: 'On signe', text: 'Verdict daté.', action: { label: 'Verdicts', href: '#' } },
]} />
```
`columns` : 2, 3 ou 4. Chaque item accepte aussi `image` (URL) à la place du picto.

#### `GlassPanel` — panneau neutre
```mdx
import GlassPanel from '../../components/GlassPanel.astro';

<GlassPanel padding="md">Un encadré pour isoler une info.</GlassPanel>
```
`padding` : `none` · `sm` · `md` · `lg` · `xl`.

### Données

#### `DataTable` — tableau comparatif
```mdx
import DataTable from '../../components/DataTable.astro';

<DataTable
  caption="Comparatif 2026"
  columns={[
    { key: 'outil', label: 'ERP', sticky: true },
    { key: 'prix', label: 'Prix', num: true },
    { key: 'support', label: 'Support' },
  ]}
  rows={[
    { outil: 'Outil A', prix: '4 680 €', support: { value: 'Excellent', tone: 'positive' }, _best: true },
    { outil: 'Outil C', prix: '3 240 €', support: { value: 'Moyen', tone: 'muted' } },
  ]}
/>
```
Colonne : `num: true` (chiffres en mono, alignés à droite), `sticky: true` (1re colonne figée).
Cellule colorée : `{ value: '…', tone: 'positive' | 'negative' | 'muted' | 'strong' }`.
Ligne mise en avant : `_best: true`.

#### `StatDiscs` — disques de chiffres clés
```mdx
import StatDiscs from '../../components/StatDiscs.astro';

<StatDiscs items={[
  { value: '8', unit: '/10', label: 'Note' },
  { value: '6', unit: ' sem.', label: 'Mise en route' },
]} />
```
2 à 4 disques.

#### `Faders` — notation type console
```mdx
import Faders from '../../components/Faders.astro';

<Faders items={[
  { label: 'Prise en main', value: 8.7 },
  { label: 'Support FR', value: 7.4, max: 10 },
]} />
```

#### `Chart` — graphique de courbe
```mdx
import Chart from '../../components/Chart.astro';

<Chart title="Mise en route" caption="30 jours" values={[4, 9, 18, 30, 48, 62]} highlight={3} />
```
`highlight` : index du point à marquer (optionnel).

#### `ProductCard` — fiche outil
```mdx
import ProductCard from '../../components/ProductCard.astro';

<ProductCard name="Outil A" category="ERP industriel" score={8.7} verdict="positive"
  specs={[{ label: 'Prix', value: '4 680 €' }, { label: 'Mise en route', value: '6 sem.' }]} />
```
`verdict` : `positive` · `neutral` · `negative`.

### Base (UI)

#### `Button` — bouton
```mdx
import Button from '../../components/Button.astro';

<Button variant="primary" href="/lien">Mon bouton</Button>
```
`variant` : `primary` · `secondary` · `ghost` · `teal` · `minium`. `size` : `sm` · `md` · `lg`.

#### `Badge` — étiquette / sticker
```mdx
import Badge from '../../components/Badge.astro';

<Badge tone="blue" variant="gradient">Guide</Badge>
<Badge tone="positive" variant="soft" dot>Recommandé</Badge>
```
`tone` : `neutral` · `blue` · `teal` · `orange` · `positive` · `negative`.
`variant` : `soft` · `outline` · `solid` · `gradient` · `pop`. `mono` pour les chiffres. `dot` ajoute une pastille.

#### `Input` — champ de saisie
```mdx
import Input from '../../components/Input.astro';

<Input label="Votre e-mail" type="email" placeholder="vous@entreprise.fr" />
<Input label="Budget" mono prefix="€" suffix="/ mois" hint="Hors options." />
```

---

## Règles de marque

- **Aucun tiret cadratin (« — »)** dans les textes. Utilisez `:` ou `·`.
- Les **chiffres mesurés** (prix, durées, notes) se composent en mono : ajoutez la
  classe `num` (ex. `<span class="num">42</span>`) ou utilisez les composants data.
- Palette : blanc, encre quasi noire, **bleu électrique** + **jaune**, rouge pour les
  alertes. Coins nets, ombres dures décalées, formes coupées (triangles).
- Vouvoiement, direct, chiffré. Le deux-points est la ponctuation de la marque.
