import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** astuce=teal, retenir=violet, attention=corail. */
  tone?: 'astuce' | 'retenir' | 'attention';
  /** Override the eyebrow label (defaults by tone). */
  label?: React.ReactNode;
  /** Override the orb icon (defaults to a per-tone Lucide-style glyph). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Encadré de mise en avant en verre, disque d'icône en relief.
 * @startingPoint section="Éditorial" subtitle="Encadré Astuce / À retenir / Attention" viewport="700x180"
 */
export function Callout(props: CalloutProps): JSX.Element;
