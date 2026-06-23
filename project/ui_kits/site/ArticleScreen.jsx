// Guide / article long-form : montre le colonnage, les callouts, la citation,
// le graphique en situation. Corps en sans, titres en Space Grotesk.
function ArticleScreen({ onNav }) {
  const { Callout, PullQuote, GlassPanel, ColumnRow, Visual, Chart, Button, Badge } = window.CrmLogicielFrDesignSystem_d9d94b;
  return (
    <article style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 20px' }}>
      <header style={{ padding: '40px 0 26px' }}>
        <Breadcrumb items={['Guides', 'TPE & indépendants']} />
        <div style={{ display: 'flex', gap: 8, margin: '18px 0 14px', flexWrap: 'wrap' }}>
          <Badge tone="blue" variant="gradient">Guide de décision</Badge>
          <Badge tone="neutral" mono variant="soft">11 min de lecture</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(34px, 6.5vw, 60px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: 'var(--ink)', margin: 0, maxWidth: '17ch' }}>
          Quel CRM pour une TPE de services en <span className="text-gradient">2026</span> ?
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(17px, 2.4vw, 21px)', lineHeight: 1.5, color: 'var(--ink-80)', maxWidth: '54ch', marginTop: 18 }}>
          Sept outils testés sur des comptes réels pendant trois semaines. Un budget, des cas d'usage, des chiffres. Aucune promesse d'éditeur.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
          <span style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--grad-brand)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 14 }}>JL</span>
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>Julien Lefevre</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-55)' }}>Mis à jour le 12 juin 2026</div>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gap: 26 }}>
        <p className="prose dropcap" style={{ maxWidth: '100%' }}>
          Un CRM pour une TPE de services ne se choisit pas sur la liste de fonctionnalités : il se choisit sur la friction quotidienne. Nous avons ouvert sept comptes réels, importé un fichier de 3 000 contacts, et chronométré chaque opération courante.
        </p>

        <Callout tone="astuce">
          Importez d'abord <b>50 contacts test</b> avant de migrer tout votre fichier : vous repérez les champs mal mappés en 5 minutes, au lieu de corriger 3 000 fiches après coup.
        </Callout>

        <ColumnRow layout="image-text" align="center" gap={32}>
          <Visual label="Pipedrive · vue pipeline, 08/06" height={220} />
          <div>
            <h2 style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 10px' }}>Ce que nous avons mesuré</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-80)', margin: 0 }}>
              Import de 3 000 contacts, prise en main jusqu'à la première fiche complète, délai de réponse du support en français, et coût réel à 12 mois options incluses.
            </p>
          </div>
        </ColumnRow>

        <ColumnRow layout="two" align="start" gap={32}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-80)', margin: 0 }}>
            Le constat tient en une phrase : le prix affiché ne prédit ni la qualité du support, ni la rapidité de prise en main. Trois outils sortent du lot.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-80)', margin: 0 }}>
            Deux sont à éviter pour ce profil. Le reste se joue sur le détail : plafonds du plan d'entrée, clause de réversibilité, et délai de réponse en juillet-août.
          </p>
        </ColumnRow>

        <Chart title="Courbe d'adoption" caption="Pipedrive · 21 jours, plateau dès J+3" values={[8, 14, 38, 66, 80, 85, 87, 89, 90]} highlight={3} />

        <ColumnRow layout="aside-body" align="start" gap={32}>
          <GlassPanel padding="md">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue-ink)', fontWeight: 600, marginBottom: 6 }}>En bref</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-80)', margin: 0 }}>Pour une TPE qui vend : Pipedrive. Pour qui facture aussi : Axonaut.</p>
          </GlassPanel>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-80)', margin: '0 0 14px' }}>
              Sur Pipedrive, l'import des 3 000 contacts a pris 4 min 12 s et signalé 2 doublons. Sur Salesforce, la même opération a demandé une configuration préalable de 40 minutes : disqualifiant pour une TPE sans administrateur.
            </p>
            <Callout tone="attention" label="Avertissement">
              Le plan gratuit de certains outils <b>plafonne l'export à 1 000 lignes</b>. Au-delà, vous êtes captif : vérifiez la clause de réversibilité avant de vous engager.
            </Callout>
          </div>
        </ColumnRow>

        <PullQuote author="Julien Lefevre" role="Auteur · testé sur compte réel" initials="JL">
          Un CRM ne se choisit pas sur sa liste de fonctions, mais sur la friction qu'il vous enlève chaque matin.
        </PullQuote>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => onNav('fiche')} iconRight={<i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>}>Lire la fiche Pipedrive</Button>
          <Button variant="secondary" onClick={() => onNav('comparatif')}>Voir le comparatif complet</Button>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { ArticleScreen });
