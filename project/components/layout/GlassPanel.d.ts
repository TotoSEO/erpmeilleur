import * as React from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'md' | 'lg' | 'xl' | '2xl';
  /** Slightly more opaque fill. */
  strong?: boolean;
  children?: React.ReactNode;
}

/**
 * Surface en verre dosé — la brique de base.
 * @startingPoint section="Layout" subtitle="Panneau en verre dosé (recette v3)" viewport="600x200"
 */
export function GlassPanel(props: GlassPanelProps): JSX.Element;
