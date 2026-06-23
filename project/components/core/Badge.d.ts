import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic colour. positive=émeraude, negative=corail, blue=marque, teal/orange=accents. */
  tone?: 'neutral' | 'blue' | 'teal' | 'orange' | 'positive' | 'negative';
  variant?: 'soft' | 'outline' | 'solid' | 'gradient' | 'pop';
  /** Compose in IBM Plex Mono — use for versions, dates, counts. */
  mono?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Pastille / sticker de statut ou de verdict. */
export function Badge(props: BadgeProps): JSX.Element;
