// Comparatif : grand tableau filtrable par profil + grille de fiches outils.
function ComparatifScreen({ onNav }) {
  const { DataTable, ProductCard, ColumnRow, Badge, Button } = window.CrmLogicielFrDesignSystem_d9d94b;
  const [filter, setFilter] = React.useState('all');

  const ROWS = [
    { profil: 'vente', nom: 'Pipedrive', prix: '14,90 €', note: 8.4, contacts: '∞', verdict: { value: 'Recommandé', tone: 'positive' }, _best: true },
    { profil: 'tpe', nom: 'Axonaut', prix: '41,99 €', note: 7.8, contacts: '∞', verdict: { value: 'Recommandé', tone: 'positive' } },
    { profil: 'vente', nom: 'HubSpot', prix: '0,00 €', note: 7.1, contacts: '1 M', verdict: 'Sous conditions' },
    { profil: 'tpe', nom: 'Sellsy', prix: '29,00 €', note: 7.4, contacts: '∞', verdict: 'Sous conditions' },
    { profil: 'equipe', nom: 'Zoho CRM', prix: '14,00 €', note: 6.7, contacts: '∞', verdict: 'Sous conditions' },
    { profil: 'equipe', nom: 'Salesforce', prix: '25,00 €', note: 4.6, contacts: '∞', verdict: { value: 'Trop lourd (TPE)', tone: 'negative' } },
  ];
  const FILTERS = [{ id: 'all', label: 'Tous' }, { id: 'vente', label: 'Forces de vente' }, { id: 'tpe', label: 'TPE / indés' }, { id: 'equipe', label: 'Équipes' }];
  const rows = filter === 'all' ? ROWS : ROWS.filter((r) => r.profil === filter);

  return (
    <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto', padding: '0 20px' }}>
      <header style={{ padding: '36px 0 20px' }}>
        <Breadcrumb items={['Comparatifs', 'CRM commerciaux']} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(30px,5vw,46px)', letterSpacing: '-0.03em', color: 'var(--ink)', margin: 0 }}>
              Comparatif : <span className="text-gradient">7 CRM commerciaux</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--ink-80)', marginTop: 10, maxWidth: '48ch' }}>Mêmes tests, mêmes comptes, mêmes chiffres : choisissez par profil.</p>
          </div>
          <Badge tone="blue" mono variant="outline" style={{ marginBottom: 6 }}>v2026-06</Badge>
        </div>
      </header>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '6px 0 22px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-55)', marginRight: 4 }}>Profil :</span>
        {FILTERS.map((f) => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: '8px 16px',
            borderRadius: 999, minHeight: 38, border: filter === f.id ? 'none' : '1px solid var(--hairline-strong)',
            background: filter === f.id ? 'var(--grad-brand)' : '#fff', color: filter === f.id ? '#fff' : 'var(--ink-80)',
          }}>{f.label}</button>
        ))}
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-55)' }}><span className="num">{rows.length}</span> outils</span>
      </div>

      <DataTable
        caption="Comparatif CRM commerciaux · relevé le 12/06/2026"
        columns={[
          { key: 'nom', label: 'Outil', sticky: true },
          { key: 'prix', label: 'Prix /mois', num: true },
          { key: 'contacts', label: 'Contacts', num: true },
          { key: 'note', label: 'Note /10', num: true },
          { key: 'verdict', label: 'Verdict' },
        ]}
        rows={rows.map((r) => ({ _best: r._best, nom: r.nom, prix: r.prix, contacts: r.contacts, note: { value: r.note.toFixed(1).replace('.', ','), tone: r.note >= 7 ? 'positive' : r.note < 5 ? 'negative' : 'strong' }, verdict: r.verdict }))}
      />

      <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '40px 0 20px' }}>Notre podium</h2>
      <ColumnRow layout="three" align="start" gap={24} collapseAt={820}>
        <ProductCard name="Pipedrive" category="Forces de vente" score={8.4} verdict="positive" href="#" specs={[{ label: 'Prix', value: '14,90 €' }, { label: 'Essai', value: '14 j' }]} />
        <ProductCard name="Axonaut" category="TPE qui facture" score={7.8} verdict="positive" href="#" specs={[{ label: 'Prix', value: '41,99 €' }, { label: 'Essai', value: '15 j' }]} />
        <ProductCard name="HubSpot" category="Démarrage gratuit" score={7.1} verdict="neutral" href="#" specs={[{ label: 'Prix', value: '0,00 €' }, { label: 'Plafond', value: '1 M' }]} />
      </ColumnRow>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
        <Button variant="primary" onClick={() => onNav('fiche')}>Ouvrir une fiche</Button>
        <Button variant="secondary" onClick={() => onNav('auteur')}>Notre méthode</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ComparatifScreen });
