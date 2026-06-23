import React from 'react';

const VERDICTS = {
  positive: { grad: 'var(--grad-aqua)', label: 'Recommandé' },
  neutral: { grad: 'var(--grad-cool)', label: 'Sous conditions' },
  negative: { grad: 'var(--grad-sunset)', label: 'À éviter' },
};

/**
 * ProductCard — fiche outil en verre, avec une pastille de note dégradée qui
 * déborde du coin (relief). Remplace l'étiquette. Chiffres en mono.
 */
export function ProductCard({
  name,
  category = null,
  score = null,
  verdict = 'neutral',
  verdictLabel = null,
  specs = [],            // [{ label, value }]
  href = null,
  style = {},
}) {
  const v = VERDICTS[verdict] || VERDICTS.neutral;
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href || undefined}
      style={{
        position: 'relative', display: 'block', textDecoration: 'none',
        background: 'var(--glass-bg-strong)', backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))', border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
        padding: '24px 26px 22px', overflow: 'visible', ...style,
      }}
    >
      {score != null && (
        <span style={{
          position: 'absolute', top: '-16px', right: '20px', width: '70px', height: '70px',
          borderRadius: '20px', background: v.grad, transform: 'rotate(-6deg)',
          display: 'grid', placeItems: 'center', textAlign: 'center',
          boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.6)',
        }}>
          <span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '24px', color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              {score.toFixed(1).replace('.', ',')}
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.1em', color: 'rgba(255,255,255,.9)' }}>/10</span>
          </span>
        </span>
      )}
      {category && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-55)' }}>{category}</div>}
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '4px 0 14px', maxWidth: '70%' }}>{name}</h3>

      <span style={{
        display: 'inline-flex', padding: '5px 13px', borderRadius: '999px', background: v.grad,
        color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '12px',
      }}>{verdictLabel || v.label}</span>

      {specs.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--hairline)' }}>
          {specs.slice(0, 3).map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-55)' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '16px', color: 'var(--ink)', marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
            </div>
          ))}
        </div>
      )}
    </Tag>
  );
}
