import React from 'react';

/**
 * PullQuote — citation éditoriale : guillemet géant en dégradé iris, texte en
 * Space Grotesk, signature avec pastille initiales. Posée sur verre teinté.
 */
export function PullQuote({
  children,
  author = null,
  role = null,
  initials = null,
  style = {},
}) {
  return (
    <figure style={{
      position: 'relative', margin: 0, padding: '30px 30px 26px 84px',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(135deg, rgba(46,46,255,.08), rgba(255,212,0,.07)), var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      ...style,
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', left: '22px', top: '6px', fontFamily: 'var(--font-display)',
        fontWeight: 700, fontSize: '96px', lineHeight: 1, background: 'var(--grad-iris)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
      }}>“</span>
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(20px, 3vw, 27px)', lineHeight: 1.3, letterSpacing: '-0.01em',
        color: 'var(--ink)',
      }}>{children}</blockquote>
      {(author || role) && (
        <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
          {initials && (
            <span style={{
              width: '40px', height: '40px', borderRadius: '999px', background: 'var(--grad-brand)',
              color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '15px', flex: 'none',
            }}>{initials}</span>
          )}
          <span>
            {author && <b style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--ink)', display: 'block' }}>{author}</b>}
            {role && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-55)' }}>{role}</span>}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
