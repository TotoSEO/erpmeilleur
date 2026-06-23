import React from 'react';

/**
 * Input — champ de saisie sur blanc data, angle vif, filet hairline.
 * Focus = filet bleu de travail. La valeur numérique se compose en mono.
 */
export function Input({
  label = null,
  hint = null,
  error = null,
  prefix = null,
  suffix = null,
  mono = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const lineColor = error ? 'var(--minium)' : 'var(--hairline-strong)';

  return (
    <label htmlFor={inputId} style={{ display: 'block', fontFamily: 'var(--font-ui)' }}>
      {label && (
        <span style={{
          display: 'block', fontSize: '13px', fontWeight: 600,
          color: 'var(--ink)', marginBottom: '6px',
        }}>{label}</span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center',
        background: 'var(--glass-bg-strong)',
        backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
        border: `2px solid ${lineColor}`,
        borderRadius: 'var(--radius-full)', padding: '0 18px', minHeight: '50px',
        transition: 'border-color 150ms ease, box-shadow 150ms ease',
      }}>
        {prefix && <span style={{ color: 'var(--ink-55)', marginRight: '8px', fontSize: '14px' }}>{prefix}</span>}
        <input
          id={inputId}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
            fontSize: '15px', color: 'var(--ink)', minWidth: 0,
            fontVariantNumeric: mono ? 'tabular-nums lining-nums' : 'normal',
            ...style,
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--ink-55)', marginLeft: '8px', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{suffix}</span>}
      </span>
      {(hint || error) && (
        <span style={{
          display: 'block', marginTop: '6px', fontSize: '12px',
          color: error ? 'var(--minium-ink)' : 'var(--ink-55)',
        }}>{error || hint}</span>
      )}
    </label>
  );
}
