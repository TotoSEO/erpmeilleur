// Fiche avis avec verdict : hero verre + disques de chiffres, faders, pour/contre
// en colonnage, tableau des tarifs.
function FicheAvisScreen({ onNav }) {
  const { GlassPanel, StatDiscs, Faders, DataTable, Callout, ColumnRow, ProsCons, Badge, Button } = window.CrmLogicielFrDesignSystem_d9d94b;

  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ padding: '32px 0 22px' }}><Breadcrumb items={['Avis', 'CRM commercial', 'Pipedrive']} /></div>

      {/* Hero verre */}
      <GlassPanel strong radius="2xl" padding="xl">
        <ColumnRow layout="body-aside" align="center" gap={30}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue-ink)' }}>Fiche avis · CRM commercial</div>
            <h1 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(30px,5vw,44px)', letterSpacing: '-0.03em', color: 'var(--ink)', margin: '8px 0 12px' }}>Pipedrive</h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
              <Badge tone="positive" variant="gradient">Recommandé</Badge>
              <Badge tone="blue" mono variant="outline">v2026-06</Badge>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-80)', margin: 0, maxWidth: '46ch' }}>
              Le meilleur outil de notre panel pour une force de vente qui veut un pipeline lisible sans administrateur dédié.
            </p>
          </div>
          <StatDiscs items={[
            { value: '8,4', unit: '/10', label: 'global' },
            { value: '14,90', unit: '€', label: '/ mois' },
            { value: '14', unit: 'j', label: 'essai' },
          ]} />
        </ColumnRow>
      </GlassPanel>

      <div style={{ display: 'grid', gap: 28, marginTop: 28 }}>
        <ProsCons
          prosTitle="Ce qu'on a aimé"
          consTitle="Ce qui coince"
          pros={['Import de 3 000 contacts en 4 min 12 s', 'Pipeline clair, pris en main en une demi-journée', "Tarif d'entrée honnête, sans surcoût caché"]}
          cons={['Reporting avancé réservé aux plans hauts', 'Support FR plus lent en juillet-août']}
        />

        <ColumnRow layout="aside-body" align="start" gap={28}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 4px' }}>Notes détaillées</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-55)', margin: 0 }}>5 critères mesurés</p>
          </div>
          <GlassPanel padding="lg">
            <Faders items={[
              { label: 'Prise en main', value: 8.8 },
              { label: 'Qualité-prix', value: 8.4 },
              { label: 'Support FR', value: 7.2 },
              { label: 'Import / export', value: 9.0 },
              { label: 'Reporting', value: 7.6 },
            ]} />
          </GlassPanel>
        </ColumnRow>

        <Callout tone="retenir">
          Pipedrive entre dans le budget d'une TPE et couvre la priorité « pipeline de vente ». Si la facturation compte autant que la vente, regardez Axonaut.
        </Callout>

        <div>
          <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 16px' }}>Tarifs relevés</h2>
          <DataTable
            caption="Grille publique · relevée le 12/06/2026"
            columns={[
              { key: 'plan', label: 'Plan', sticky: true },
              { key: 'prix', label: 'Prix /mois', num: true },
              { key: 'an', label: '/ an (×12)', num: true },
              { key: 'pour', label: 'Pour qui' },
            ]}
            rows={[
              { plan: 'Essential', prix: '14,90 €', an: '178,80 €', pour: 'Démarrage solo' },
              { _best: true, plan: 'Advanced', prix: '27,90 €', an: '334,80 €', pour: { value: 'Le bon choix TPE', tone: 'positive' } },
              { plan: 'Professional', prix: '49,90 €', an: '598,80 €', pour: 'Équipe structurée' },
            ]}
          />
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => onNav('comparatif')} iconRight={<i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>}>Comparer aux 6 autres</Button>
          <Button variant="minium-outline" iconLeft={<i data-lucide="flag" style={{ width: 16, height: 16 }}></i>}>Signaler une erreur de tarif</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FicheAvisScreen });
