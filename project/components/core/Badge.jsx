import React from 'react';

/**
 * Badge — sticker pilule. Plein dégradé, contour épais (pop) ou doux teinté.
 * Vert = positif, corail = négatif/alerte, violet = marque, teal/orange accents.
 */
export function Badge({
  tone = 'neutral',
  variant = 'soft',
  mono = false,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { fg: 'var(--ink)', line: 'var(--ink)', soft: 'var(--paper-sunk)', grad: 'var(--grad-cool)' },
    blue: { fg: 'var(--blue-ink)', line: 'var(--blue)', soft: 'var(--blue-tint)', grad: 'var(--grad-brand)' },
    teal: { fg: 'var(--teal-ink)', line: 'var(--teal)', soft: 'var(--teal-tint)', grad: 'var(--grad-aqua)' },
    orange: { fg: 'var(--orange-ink)', line: 'var(--orange)', soft: 'var(--orange-tint)', grad: 'var(--grad-sunset)' },
    positive: { fg: 'var(--green-ink)', line: 'var(--green)', soft: 'var(--green-tint)', grad: 'linear-gradient(135deg,#2E2EFF,#18A6F6)' },
    negative: { fg: 'var(--minium-ink)', line: 'var(--minium)', soft: 'var(--minium-tint)', grad: 'var(--grad-sunset)' },
  };
  const t = tones[tone];

  const variants = {
    soft: { background: t.soft, color: t.fg, border: 'none' },
    outline: { background: '#fff', color: t.fg, border: `1px solid ${t.line}` },
    solid: { background: t.line, color: '#fff', border: 'none' },
    gradient: { background: t.grad, color: '#fff', border: 'none' },
    pop: { background: '#fff', color: t.fg, border: `2px solid ${t.line}`, boxShadow: `3px 3px 0 ${t.line}` },
  };

  return (
    <span
      data-tone={tone}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: variant === 'pop' ? '4px 12px' : '4px 11px',
        borderRadius: '0',
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
        fontSize: mono ? '11.5px' : '12px', fontWeight: mono ? 600 : 700,
        letterSpacing: mono ? '0.04em' : '0.01em',
        lineHeight: 1.3, whiteSpace: 'nowrap',
        ...variants[variant], ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: '7px', height: '7px', borderRadius: '999px',
          background: (variant === 'solid' || variant === 'gradient') ? '#fff' : t.line, flex: 'none',
        }} />
      )}
      {children}
    </span>
  );
}
