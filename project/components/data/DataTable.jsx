import React from 'react';

/**
 * DataTable — tableau comparatif design : en-tête en dégradé, lignes à surligner
 * (`best`), puces de verdict, verre clair. Colonnes `num` en mono alignées à droite.
 */
export function DataTable({
  columns = [],          // [{ key, label, align?, num?, width?, sticky? }]
  rows = [],             // [{ [key]: value | {value, tone}, _best? }]
  caption = null,
  stickyHeader = true,
  style = {},
}) {
  const toneColor = (tone) => ({
    positive: 'var(--green-ink)', negative: 'var(--minium-ink)',
    muted: 'var(--ink-55)', strong: 'var(--ink)',
  }[tone] || 'inherit');

  return (
    <div style={{ overflow: 'hidden', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', background: 'var(--glass-bg-strong)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))', boxShadow: 'var(--shadow-soft), var(--glass-highlight)', ...style }}>
      <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-ui)',
        minWidth: columns.length > 4 ? '640px' : 'auto',
      }}>
        {caption && (
          <caption style={{
            captionSide: 'top', textAlign: 'left', padding: '14px 16px',
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--ink-55)',
            borderBottom: '1px solid var(--hairline)',
          }}>{caption}</caption>
        )}
        <thead>
          <tr>
            {columns.map((c, ci) => (
              <th key={c.key} scope="col" style={{
                position: stickyHeader ? 'sticky' : 'static', top: 0, zIndex: 2,
                textAlign: c.align || (c.num ? 'right' : 'left'),
                padding: '14px 18px', background: 'var(--grad-brand)',
                fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap',
                width: c.width, left: c.sticky ? 0 : undefined,
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const best = row._best;
            const rowBg = best
              ? 'linear-gradient(90deg, rgba(46,46,255,.12), transparent)'
              : 'transparent';
            return (
            <tr key={ri} style={{ background: rowBg }}>
              {columns.map((c) => {
                const cell = row[c.key];
                const value = cell && typeof cell === 'object' && 'value' in cell ? cell.value : cell;
                const tone = cell && typeof cell === 'object' ? cell.tone : undefined;
                return (
                  <td key={c.key} style={{
                    textAlign: c.align || (c.num ? 'right' : 'left'),
                    padding: '13px 18px', borderBottom: ri < rows.length - 1 ? '1px solid var(--hairline)' : 'none',
                    fontFamily: c.num ? 'var(--font-mono)' : 'var(--font-ui)',
                    fontVariantNumeric: c.num ? 'tabular-nums lining-nums' : 'normal',
                    fontSize: '14px',
                    fontWeight: c.sticky ? 700 : (c.num ? 500 : 400),
                    color: toneColor(tone) === 'inherit' ? (c.sticky ? 'var(--ink)' : 'var(--ink-80)') : toneColor(tone),
                    whiteSpace: 'nowrap',
                    position: c.sticky ? 'sticky' : 'static', left: c.sticky ? 0 : undefined,
                  }}>{value}</td>
                );
              })}
            </tr>
          );})}
        </tbody>
      </table>
      </div>
    </div>
  );
}
