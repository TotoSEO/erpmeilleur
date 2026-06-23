import * as React from 'react';

export interface ProductSpec {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface ProductCardProps {
  name: React.ReactNode;
  category?: React.ReactNode;
  /** Score /10 — renders the floating gradient disc. */
  score?: number | null;
  verdict?: 'positive' | 'neutral' | 'negative';
  verdictLabel?: React.ReactNode;
  /** Up to 3 key figures (mono). */
  specs?: ProductSpec[];
  href?: string;
  style?: React.CSSProperties;
}

/**
 * Fiche outil en verre avec pastille de note dégradée en débord (relief).
 * @startingPoint section="Data" subtitle="Fiche outil (verre + pastille de note)" viewport="380x230"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
