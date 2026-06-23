// Chrome partagé du blog crm-logiciel.fr : wordmark, nav en verre, pied de page.
function Wordmark({ size = 24, inverse = false }) {
  return (
    <span style={{
      fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: size,
      letterSpacing: '-0.02em', color: inverse ? '#fff' : 'var(--ink)',
      display: 'inline-flex', alignItems: 'baseline', lineHeight: 1,
    }}>
      Crm-Logiciel
      <span style={{
        fontSize: size * 0.6, padding: '3px 8px', marginLeft: 3,
        borderRadius: 12, transform: 'translateY(-1px)', color: '#fff',
        background: inverse ? 'rgba(255,255,255,.25)' : 'var(--grad-brand)',
      }}>.fr</span>
    </span>
  );
}

const NAV = [
  { id: 'article', label: 'Guides' },
  { id: 'fiche', label: 'Avis' },
  { id: 'comparatif', label: 'Comparatifs' },
  { id: 'auteur', label: "L'auteur" },
];

function SiteHeader({ current, onNav }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,.72)',
      backdropFilter: 'blur(18px) saturate(150%)', WebkitBackdropFilter: 'blur(18px) saturate(150%)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 20, height: 62 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('article'); }} style={{ textDecoration: 'none' }}><Wordmark size={21} /></a>
        <nav className="dk-nav" style={{ display: 'none', gap: 4, marginLeft: 8 }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => onNav(n.id)} style={{
              border: 'none', background: current === n.id ? 'var(--blue-tint)' : 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: current === n.id ? 700 : 500,
              color: current === n.id ? 'var(--blue-ink)' : 'var(--ink-80)', padding: '8px 14px', borderRadius: 999,
            }}>{n.label}</button>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="dk-meta" style={{ display: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-55)' }}>
            <span className="num">37</span> outils testés
          </span>
          <button onClick={() => setOpen((o) => !o)} className="mb-burger" style={{
            border: '1px solid var(--hairline-strong)', background: '#fff', width: 42, height: 42, borderRadius: 14,
            cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--ink)',
          }} aria-label="Menu"><i data-lucide={open ? 'x' : 'menu'} style={{ width: 18, height: 18 }}></i></button>
        </div>
      </div>
      {open && (
        <nav style={{ borderTop: '1px solid var(--hairline)', background: '#fff', padding: '6px 12px' }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => { onNav(n.id); setOpen(false); }} style={{
              display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent',
              cursor: 'pointer', minHeight: 46, fontFamily: 'var(--font-ui)', fontSize: 16,
              fontWeight: current === n.id ? 700 : 500, color: current === n.id ? 'var(--blue-ink)' : 'var(--ink)',
              borderBottom: '1px solid var(--hairline)', padding: '0 8px',
            }}>{n.label}</button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Breadcrumb({ items = [] }) {
  return (
    <nav style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.06em', color: 'var(--ink-55)', textTransform: 'uppercase', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {items.map((it, i) => (
        <span key={i}>{i > 0 && <span style={{ color: 'var(--ink-35)', marginRight: 8 }}>/</span>}{it}</span>
      ))}
    </nav>
  );
}

function SiteFooter() {
  const Col = ({ title, items }) => (
    <div>
      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', margin: '0 0 12px' }}>{title}</h4>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 9 }}>
        {items.map((it) => <li key={it}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'rgba(255,255,255,.88)', textDecoration: 'none' }}>{it}</a></li>)}
      </ul>
    </div>
  );
  return (
    <footer style={{ background: 'var(--ink)', color: '#fff', marginTop: 72, position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(40rem 30rem at 100% 0%, rgba(100,87,249,.35), transparent 60%), radial-gradient(36rem 28rem at 0% 100%, rgba(0,194,184,.28), transparent 60%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--content-wide)', margin: '0 auto', padding: '44px 20px', display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div>
          <Wordmark size={20} inverse />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', marginTop: 12, maxWidth: '32ch' }}>
            Le premier blog indépendant des logiciels CRM. On mesure, on date, on signe.
          </p>
        </div>
        <Col title="Méthode" items={['Comment on teste', 'Indépendance', 'Sources & dates']} />
        <Col title="Contenus" items={['Guides de décision', 'Fiches avis', 'Comparatifs']} />
        <Col title="Le média" items={['Julien Lefevre', 'Contact', 'Mentions légales']} />
      </div>
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.14)', padding: '14px 20px' }}>
        <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.55)', letterSpacing: '0.06em' }}>
          © 2026 crm-logiciel.fr · <span className="num">37</span> outils testés · Mis à jour le <span className="num">12 juin 2026</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, SiteHeader, SiteFooter, Breadcrumb, NAV });
