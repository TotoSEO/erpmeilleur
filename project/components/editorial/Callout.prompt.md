Encadré éditorial en verre dosé, avec un disque d'icône en relief. Trois tons : `astuce` (teal), `retenir` (violet), `attention` (corail). Remplace l'encadré à filet-gauche.

```jsx
<Callout tone="astuce">
  Importez d'abord <b>50 contacts test</b> avant de migrer tout votre fichier.
</Callout>
<Callout tone="attention" label="Avertissement">
  Le plan gratuit plafonne l'export à <b>1 000 lignes</b>.
</Callout>
```

Props : `tone`, `label` (sur-titre, défaut selon le ton), `icon` (override du glyphe).
