import React from 'react';

/**
 * Chart — graphique éditorial clair (ex-écran, redessiné) : grille douce, aire
 * dégradée, ligne dégradée, point d'inflexion mis en avant. Posé sur verre.
 * `values` : tableau de nombres ; `max` borne le haut (défaut = max des valeurs).
 */
export function Chart({
  title = null,
  caption = null,
  values = [],
  max = null,
  highlight = null,      // index du point à marquer
  height = 170,
  style = {},
}) {
  const W = 900, H = 170;
  const top = max || Math.max(...values, 1);
  const n = values.length;
  const pts = values.map((v, i) => {
    const x = n <= 1 ? 0 : (i / (n - 1)) * W;
    const y = H - (v / top) * (H - 16) - 8;
    return [x, y];
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${W},${H} L0,${H} Z`;
  const uid = React.useMemo(() => 'ch' + Math.random().toString(36).slice(2, 7), []);

  return (
    <figure style={{
      margin: 0, borderRadius: 'var(--radius-xl)', padding: '22px 24px',
      background: 'var(--glass-bg-strong)', backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))', border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)', ...style,
    }}>
      {(title || caption) && (
        <figcaption style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
          {title && <b style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.01em', color: 'var(--ink)' }}>{title}</b>}
          {caption && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-55)' }}>{caption}</span>}
        </figcaption>
      )}
      <div style={{
        position: 'relative', height, borderRadius: 'var(--radius-md)',
        backgroundImage: 'linear-gradient(rgba(17,42,27,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,42,27,.06) 1px, transparent 1px)',
        backgroundSize: '100% 34px, 9% 100%',
      }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <linearGradient id={`${uid}l`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#FFD400" /><stop offset=".5" stopColor="#18A6F6" /><stop offset="1" stopColor="#2E2EFF" /></linearGradient>
            <linearGradient id={`${uid}a`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(46,46,255,.26)" /><stop offset="1" stopColor="rgba(46,46,255,0)" /></linearGradient>
          </defs>
          <path d={area} fill={`url(#${uid}a)`} />
          <path d={line} fill="none" stroke={`url(#${uid}l)`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
        {highlight != null && pts[highlight] && (
          <span style={{
            position: 'absolute', left: `${(pts[highlight][0] / W) * 100}%`, top: `${(pts[highlight][1] / H) * 100}%`,
            width: '11px', height: '11px', borderRadius: '999px', background: 'var(--blue)',
            border: '2.5px solid #fff', transform: 'translate(-50%,-50%)', boxShadow: '0 2px 8px rgba(46,46,255,.5)',
          }} />
        )}
      </div>
    </figure>
  );
}
