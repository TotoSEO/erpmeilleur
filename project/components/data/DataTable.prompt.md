Le tableau comme objet premier : dense, réglé de hairlines, en-tête collant, lignes alternées ton papier. Les colonnes `num` passent en mono tabulaire et s'alignent à droite. Une cellule peut être `{ value, tone }` pour la colorer.

```jsx
<DataTable
  caption="Comparatif CRM commerciaux · v2026-06"
  columns={[
    { key: 'nom', label: 'Outil', sticky: true },
    { key: 'prix', label: 'Prix /mois', num: true },
    { key: 'note', label: 'Note', num: true },
    { key: 'verdict', label: 'Verdict' },
  ]}
  rows={[
    { nom: 'Pipedrive', prix: '14,90 €', note: { value: '8,4', tone: 'positive' }, verdict: 'Recommandé' },
    { nom: 'HubSpot', prix: '0,00 €', note: { value: '7,1', tone: 'strong' }, verdict: 'Sous conditions' },
  ]}
/>
```

`tone` des cellules : `positive | negative | muted | strong`.
