import React from 'react';

const ICONS = {
  astuce: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z',
  retenir: 'm9 11 3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  attention: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
};

const TONES = {
  astuce: { grad: 'var(--grad-aqua)', label: 'var(--teal-ink)', glow: 'rgba(24,166,246,.42)', default: 'Astuce' },
  retenir: { grad: 'var(--grad-brand)', label: 'var(--blue-ink)', glow: 'rgba(46,46,255,.4)', default: 'À retenir' },
  attention: { grad: 'var(--grad-sunset)', label: 'var(--minium-ink)', glow: 'rgba(255,168,0,.45)', default: 'Attention' },
};

/**
 * Callout — encadré éditorial en verre dosé, avec disque d'icône en relief.
 * 3 tons : astuce (teal), retenir (violet), attention (corail). Pas de filet-gauche.
 */
export function Callout({
  tone = 'astuce',
  label = null,
  icon = null,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.astuce;
  return (
    <aside
      style={{
        position: 'relative', borderRadius: 'var(--radius-xl)',
        padding: '24px 28px 22px 88px', margin: 0,
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur)) saturate(145%)',
        WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(145%)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        position: 'absolute', left: '24px', top: '24px', width: '48px', height: '48px',
        borderRadius: '15px', display: 'grid', placeItems: 'center', background: t.grad,
        boxShadow: `0 12px 22px -8px ${t.glow}, inset 0 1px 0 rgba(255,255,255,.5)`,
      }}>
        {icon || (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d={ICONS[tone] || ICONS.astuce} />
          </svg>
        )}
      </span>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em',
        textTransform: 'uppercase', color: t.label, fontWeight: 600,
      }}>{label || t.default}</div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: '15.5px', lineHeight: 1.6,
        color: 'var(--ink)', marginTop: '5px', maxWidth: '60ch',
      }}>{children}</div>
    </aside>
  );
}
