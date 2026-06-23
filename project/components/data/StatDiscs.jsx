import React from 'react';

const GRADS = [
  'linear-gradient(150deg, #2E2EFF, #18A6F6)',
  'linear-gradient(150deg, #18A6F6, #2E2EFF)',
  'linear-gradient(150deg, #FFD400, #FFA800)',
  'linear-gradient(150deg, #1C1CCC, #2E2EFF)',
];

/**
 * StatDiscs — disques de chiffres clés qui flottent en couches (relief).
 * Chacun porte sa propre ombre et un léger angle. 2 à 4 disques.
 */
export function StatDiscs({ items = [], style = {} }) {
  const list = items.slice(0, 4);
  const rot = [-6, 5, -3, 4];
  const sizes = [124, 100, 92, 84];
  const pos = [
    { left: '6px', top: '20px', zIndex: 4 },
    { right: '16px', top: '0', zIndex: 3 },
    { right: '42px', bottom: '0', zIndex: 2 },
    { left: '30px', bottom: '6px', zIndex: 1 },
  ];
  return (
    <div style={{ position: 'relative', height: '188px', ...style }}>
      {list.map((it, i) => (
        <div key={i} style={{
          position: 'absolute', width: `${sizes[i]}px`, height: `${sizes[i]}px`,
          borderRadius: '24px', display: 'grid', placeItems: 'center', textAlign: 'center',
          background: it.gradient || GRADS[i % GRADS.length], transform: `rotate(${rot[i]}deg)`,
          border: '1px solid rgba(255,255,255,.55)',
          boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.7)',
          ...pos[i],
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '28px', color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              {it.value}{it.unit && <small style={{ fontSize: '14px', opacity: 0.85 }}>{it.unit}</small>}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.92)', marginTop: '4px' }}>{it.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
