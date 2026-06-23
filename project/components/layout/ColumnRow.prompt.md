Système de colonnage éditorial pour rythmer un article. Presets : `image-text`, `text-image`, `two`, `aside-body`, `body-aside`, `three`. Repasse en pleine largeur sous `collapseAt` (760px par défaut). Livré avec `Visual`, un placeholder dégradé.

```jsx
<ColumnRow layout="image-text" align="center">
  <Visual label="Capture · vue pipeline" />
  <div><h4>Image + texte</h4><p>Le commentaire à droite.</p></div>
</ColumnRow>

<ColumnRow layout="aside-body">
  <GlassPanel padding="md"><h4>En bref</h4><p>…</p></GlassPanel>
  <p className="prose">Le corps déroule le propos.</p>
</ColumnRow>
```
