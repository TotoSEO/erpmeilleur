import React from 'react';

/**
 * ProsCons — double colonne Avantages / Inconvénients, titres H3, colonnes en
 * verre teinté (émeraude / corail), marqueurs + / −. Même hauteur.
 */
export function ProsCons({
  pros = [],
  cons = [],
  prosTitle = 'Avantages',
  consTitle = 'Inconvénients',
  gap = 20,
  collapseAt = 760,
  style = {},
}) {
  const id = React.useMemo(() => 'pc' + Math.random().toString(36).slice(2, 8), []);
  const Col = ({ title, items, tint, color, mark, icon }) => (
    <section style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: `linear-gradient(160deg, ${tint}, rgba(255,255,255,.6))`,
      backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)', padding: '22px 24px',
    }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.01em', color, margin: '0 0 14px' }}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '11px' }}>
        {items.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: '11px', fontFamily: 'var(--font-sans)', fontSize: '14.5px', lineHeight: 1.5, color: 'var(--ink-80)' }}>
            <span style={{ color, fontWeight: 800, flex: 'none', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>{mark}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
  return (
    <div data-pc={id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: typeof gap === 'number' ? `${gap}px` : gap, alignItems: 'stretch', ...style }}>
      <style>{`@media (max-width:${collapseAt}px){[data-pc="${id}"]{grid-template-columns:1fr !important;}}`}</style>
      <Col title={prosTitle} items={pros} tint="rgba(0,184,148,.12)" color="var(--green-ink)" mark="+" icon="m9 11 3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      <Col title={consTitle} items={cons} tint="rgba(251,44,87,.10)" color="var(--minium-ink)" mark="−" icon="M18 6 6 18M6 6l12 12" />
    </div>
  );
}
