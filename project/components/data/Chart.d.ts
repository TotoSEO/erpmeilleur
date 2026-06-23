import * as React from 'react';

export interface ChartProps {
  title?: React.ReactNode;
  caption?: React.ReactNode;
  /** Series of numbers, left to right. */
  values: number[];
  /** Upper bound; defaults to the max value. */
  max?: number | null;
  /** Index of a point to mark with a dot. */
  highlight?: number | null;
  height?: number;
  style?: React.CSSProperties;
}

/**
 * Graphique éditorial clair : grille douce, aire + ligne dégradées.
 * @startingPoint section="Data" subtitle="Graphique clair (aire dégradée)" viewport="700x260"
 */
export function Chart(props: ChartProps): JSX.Element;
