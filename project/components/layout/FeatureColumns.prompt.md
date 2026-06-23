Colonnes de features alignées **de même hauteur** : pictogramme (ou image) en haut, titre H3 + texte au milieu, **bouton calé en bas** (aligné entre colonnes). 2 à 4 colonnes, responsive.

```jsx
<FeatureColumns columns={3} items={[
  { icon: <i data-lucide="search" />, title: 'On mesure', text: 'Comptes réels, chiffres datés.', action: { label: 'La méthode', href: '#' } },
  { icon: <i data-lucide="calendar-check" />, title: 'On date', text: 'Chaque relevé est horodaté.', action: { label: 'Voir', href: '#' } },
  { icon: <i data-lucide="pen-line" />, title: 'On signe', text: 'Un auteur unique, responsable.', action: { label: 'L\'auteur', href: '#' } },
]} />
```

Chaque item : `icon` (orbe dégradé) **ou** `image` (bloc média en CSS background), `eyebrow?`, `title`, `text`, `action?` ({label, href/onClick}). Si Lucide est chargé, appelez `lucide.createIcons()` après le rendu.
