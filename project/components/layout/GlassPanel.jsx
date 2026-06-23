import React from 'react';

/**
 * GlassPanel — surface en verre dosé (recette v3) : voile translucide, reflet
 * d'arête, ombre douce. La brique de base de toutes les compositions.
 */
export function GlassPanel({
  as = 'div',
  padding = 'lg',
  radius = 'xl',
  strong = false,
  children,
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: '16px 18px', md: '20px 22px', lg: '24px 28px', xl: '32px 34px' };
  const radii = { md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)', '2xl': 'var(--radius-2xl)' };
  const Tag = as;
  return (
    <Tag
      style={{
        position: 'relative',
        background: strong ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur)) saturate(148%)',
        WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(148%)',
        border: '1px solid var(--glass-border)',
        borderRadius: radii[radius] || radii.xl,
        boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
        padding: pads[padding] ?? pads.lg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
