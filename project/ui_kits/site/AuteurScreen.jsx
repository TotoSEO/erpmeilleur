// Page auteur — Julien Lefevre : signataire unique, méthode, derniers verdicts.
function AuteurScreen({ onNav }) {
  const { GlassPanel, DataTable, Callout, ColumnRow, FeatureColumns, Badge, Button, PullQuote } = window.CrmLogicielFrDesignSystem_d9d94b;
  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ padding: '36px 0 24px' }}><Breadcrumb items={['Le média', 'Julien Lefevre']} /></div>

      <GlassPanel strong radius="2xl" padding="xl">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ width: 92, height: 92, borderRadius: 26, background: 'var(--grad-brand)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 34, flex: 'none', transform: 'rotate(-4deg)', boxShadow: 'var(--shadow-disc)' }}>JL</span>
          <div style={{ flex: '1 1 280px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue-ink)' }}>Auteur unique · signataire</div>
            <h1 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(30px,5vw,46px)', letterSpacing: '-0.03em', color: 'var(--ink)', margin: '6px 0 10px' }}>Julien Lefevre</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: 'var(--ink-80)', maxWidth: '52ch', margin: 0, lineHeight: 1.5 }}>
              Je teste chaque CRM sur des comptes réels et je signe chaque verdict. Pas de contenu d'éditeur, pas de note achetée : si je n'ai pas mesuré, je ne publie pas.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
              <Badge tone="neutral" mono variant="soft">37 outils testés</Badge>
              <Badge tone="neutral" mono variant="soft">depuis 2021</Badge>
              <Badge tone="teal" variant="gradient">Indépendant</Badge>
            </div>
          </div>
        </div>
      </GlassPanel>

      <div style={{ display: 'grid', gap: 28, marginTop: 28 }}>
        <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>Ma méthode</h2>
        <FeatureColumns columns={3} collapseAt={820} items={[
          { icon: <i data-lucide="search" style={{ width: 24, height: 24, color: '#fff' }}></i>, eyebrow: '01', title: 'Compte réel', text: "J'ouvre un compte payant ou gratuit, jamais une démo guidée.", action: { label: 'La méthode', onClick: (e) => { e.preventDefault(); onNav('comparatif'); } } },
          { icon: <i data-lucide="calendar-check" style={{ width: 24, height: 24, color: '#fff' }}></i>, eyebrow: '02', title: 'Chiffres datés', text: 'Import de 3 000 contacts, même fichier ; chaque prix et note est horodaté.', action: { label: 'Voir un comparatif', onClick: (e) => { e.preventDefault(); onNav('comparatif'); } } },
          { icon: <i data-lucide="pen-line" style={{ width: 24, height: 24, color: '#fff' }}></i>, eyebrow: '03', title: 'Verdict signé', text: 'Captures annotées, changelog visible, un auteur unique responsable.', action: { label: 'Lire une fiche', onClick: (e) => { e.preventDefault(); onNav('fiche'); } } },
        ]} />

        <Callout tone="retenir" label="Indépendance">
          crm-logiciel.fr ne reçoit <b>aucune rémunération</b> des éditeurs testés. Aucun lien d'affiliation n'influence une note.
        </Callout>

        <div>
          <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>Derniers verdicts signés</h2>
          <DataTable
            columns={[
              { key: 'date', label: 'Date', num: true, sticky: true },
              { key: 'outil', label: 'Outil' },
              { key: 'note', label: 'Note', num: true },
              { key: 'verdict', label: 'Verdict' },
            ]}
            rows={[
              { _best: true, date: '12.06.2026', outil: 'Pipedrive', note: { value: '8,4', tone: 'positive' }, verdict: 'Recommandé' },
              { date: '04.06.2026', outil: 'Axonaut', note: { value: '7,8', tone: 'positive' }, verdict: 'Recommandé' },
              { date: '28.05.2026', outil: 'Salesforce', note: { value: '4,6', tone: 'negative' }, verdict: 'Trop lourd (TPE)' },
            ]}
          />
        </div>

        <Button variant="primary" onClick={() => onNav('comparatif')} iconRight={<i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>} style={{ justifySelf: 'start' }}>Voir tous les comparatifs</Button>
      </div>
    </div>
  );
}

Object.assign(window, { AuteurScreen });
