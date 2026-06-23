import React from 'react';

const LAYOUTS = {
  'image-text': '1.7fr 1fr',
  'text-image': '1fr 1.7fr',
  'two': '1fr 1fr',
  'aside-body': '1fr 2fr',
  'body-aside': '2fr 1fr',
  'three': 'repeat(3, 1fr)',
};

/**
 * ColumnRow — système de colonnage éditorial pour rythmer un article :
 * image+texte, deux colonnes, aparté+corps asymétrique, grille 3 colonnes.
 * Repasse en pleine largeur sous le point de rupture.
 */
export function ColumnRow({
  layout = 'two',
  gap = 24,
  align = 'start',          // 'start' | 'center' | 'stretch'
  collapseAt = 760,
  children,
  style = {},
  ...rest
}) {
  const cols = LAYOUTS[layout] || LAYOUTS.two;
  const id = React.useMemo(() => 'cr' + Math.random().toString(36).slice(2, 8), []);
  return (
    <div
      data-col-layout={layout}
      style={{
        display: 'grid', gridTemplateColumns: cols, gap: typeof gap === 'number' ? `${gap}px` : gap,
        alignItems: align, ...style,
      }}
      {...rest}
    >
      <style>{`@media (max-width:${collapseAt}px){[data-col-layout="${layout}"]{grid-template-columns:1fr !important;}}`}</style>
      {children}
    </div>
  );
}

/**
 * Visual — placeholder visuel dégradé pour le colonnage (capture, image).
 * Remplacez par une vraie image en production.
 */
export function Visual({ label = null, height = 196, gradient = 'linear-gradient(140deg, #2E2EFF, #18A6F6 58%, #FFD400)', children, style = {} }) {
  return (
    <div style={{
      position: 'relative', borderRadius: 'var(--radius-lg)', minHeight: height,
      overflow: 'hidden', background: gradient, boxShadow: 'var(--shadow-raise)', ...style,
    }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,255,255,.32), transparent 52%)' }} />
      {children}
      {label && (
        <span style={{
          position: 'absolute', left: '14px', bottom: '14px', fontFamily: 'var(--font-mono)',
          fontSize: '10.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
          background: 'rgba(0,0,0,.20)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          padding: '6px 12px', borderRadius: '999px',
        }}>{label}</span>
      )}
    </div>
  );
}
