import React from 'react';

/**
 * Button — bouton pilule. Primaire en dégradé lumineux + halo, secondaire en
 * verre dépoli, accents teal/orange/corail. Gros arrondis.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px', minHeight: '38px', gap: '6px' },
    md: { padding: '11px 22px', fontSize: '15px', minHeight: '46px', gap: '8px' },
    lg: { padding: '15px 30px', fontSize: '17px', minHeight: '56px', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--grad-brand)', color: '#fff',
      border: '2px solid var(--ink)', boxShadow: 'var(--shadow-pop)',
    },
    secondary: {
      background: '#fff', color: 'var(--ink)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)',
    },
    ghost: {
      background: 'transparent', color: 'var(--blue)', border: '2px solid transparent',
    },
    teal: {
      background: 'var(--grad-aqua)', color: '#fff', border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)',
    },
    minium: {
      background: 'var(--grad-sunset)', color: 'var(--ink)', border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)',
    },
    'minium-outline': {
      background: '#fff', color: 'var(--minium-ink)',
      border: '2px solid var(--minium)',
    },
  };

  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      data-variant={variant}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-ui)', fontWeight: 700, lineHeight: 1,
        letterSpacing: '0.02em', textTransform: 'uppercase', borderRadius: '0',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, textDecoration: 'none',
        width: fullWidth ? '100%' : 'auto',
        transition: 'transform 120ms ease, box-shadow 120ms ease',
        ...sizes[size], ...variants[variant], ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '7px 7px 0 var(--ink)'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = ''; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
