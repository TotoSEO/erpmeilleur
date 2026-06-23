import React from 'react';

const ORB_GRADS = ['var(--grad-brand)', 'var(--grad-aqua)', 'var(--grad-sunset)', 'var(--grad-cool)'];

/**
 * FeatureColumns — colonnes alignées de même hauteur : pictogramme (ou image)
 * en haut, titre H3 + texte au milieu, bouton calé en bas. 2 à 4 colonnes,
 * repasse en pleine largeur sous le point de rupture.
 */
export function FeatureColumns({
  items = [],            // [{ icon?, image?, eyebrow?, title, text, action?: {label, href, onClick} }]
  columns = 3,
  gap = 22,
  collapseAt = 820,
  style = {},
}) {
  const id = React.useMemo(() => 'fc' + Math.random().toString(36).slice(2, 8), []);
  return (
    <div
      data-fc={id}
      style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: typeof gap === 'number' ? `${gap}px` : gap, alignItems: 'stretch', ...style }}
    >
      <style>{`@media (max-width:${collapseAt}px){[data-fc="${id}"]{grid-template-columns:1fr !important;}}`}</style>
      {items.map((it, i) => (
        <article key={i} style={{
          display: 'flex', flexDirection: 'column', height: '100%',
          background: 'var(--glass-bg-strong)', backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))', border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
          padding: '24px 24px 22px', overflow: 'hidden',
        }}>
          {it.image ? (
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', height: '128px', marginBottom: '18px', overflow: 'hidden', background: it.image, boxShadow: 'var(--shadow-raise)' }}>
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,255,255,.32), transparent 52%)' }} />
            </div>
          ) : (
            <span style={{
              width: '56px', height: '56px', borderRadius: '18px', display: 'grid', placeItems: 'center',
              background: ORB_GRADS[i % ORB_GRADS.length], marginBottom: '18px',
              boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.5)',
            }}>{it.icon}</span>
          )}

          {it.eyebrow && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: '6px' }}>{it.eyebrow}</div>}
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', letterSpacing: '-0.01em', color: 'var(--ink)', margin: '0 0 8px' }}>{it.title}</h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--ink-80)', margin: 0 }}>{it.text}</p>

          {it.action && (
            <a
              href={it.action.href || '#'}
              onClick={it.action.onClick}
              style={{
                marginTop: 'auto', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '14px', color: '#fff',
                background: 'var(--grad-brand)', padding: '11px 20px', borderRadius: 'var(--radius-full)',
                textDecoration: 'none', paddingTop: '11px',
                boxShadow: '0 14px 28px -12px rgba(46,46,255,.55)',
              }}
            >{it.action.label}</a>
          )}
        </article>
      ))}
    </div>
  );
}
