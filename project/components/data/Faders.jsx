import React from 'react';

/**
 * Faders — notation par faders : curseur physique sur rail gradué (console),
 * en verre clair. Remplace la barre de progression. Le chiffre est en mono.
 */
export function Faders({ items = [], style = {} }) {
  const gradFor = (v, max) => {
    const r = v / max;
    return r >= 0.7 ? 'var(--grad-aqua)' : r >= 0.5 ? 'var(--grad-cool)' : 'var(--grad-sunset)';
  };
  return (
    <div style={{ display: 'grid', gap: '2px', ...style }}>
      {items.map((it, i) => {
        const max = it.max || 10;
        const pct = Math.max(0, Math.min(1, it.value / max)) * 100;
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 48px', alignItems: 'center', gap: '14px', padding: '9px 0' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-80)' }}>{it.label}</span>
            <div style={{ position: 'relative', height: '22px' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', height: '10px', backgroundImage: 'repeating-linear-gradient(90deg, var(--hairline-strong) 0 1px, transparent 1px 10%)', opacity: 0.6 }} />
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '4px', transform: 'translateY(-50%)', background: 'var(--paper-sunk)', borderRadius: '999px' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: gradFor(it.value, max), borderRadius: '999px' }} />
              </div>
              <div style={{
                position: 'absolute', top: '50%', left: `${pct}%`, width: '16px', height: '24px',
                transform: 'translate(-50%,-50%)', borderRadius: '7px', background: '#fff',
                border: '2px solid var(--blue)', boxShadow: '0 4px 10px -2px rgba(46,46,255,.5)',
              }}>
                <span style={{ position: 'absolute', left: '50%', top: '4px', bottom: '4px', width: '1.5px', background: 'var(--blue)', transform: 'translateX(-50%)' }} />
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '16px', textAlign: 'right', color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>
              {it.value.toFixed(1).replace('.', ',')}
            </span>
          </div>
        );
      })}
    </div>
  );
}
