import * as React from 'react';

export interface ProsConsProps {
  pros: React.ReactNode[];
  cons: React.ReactNode[];
  prosTitle?: React.ReactNode;
  consTitle?: React.ReactNode;
  gap?: number | string;
  collapseAt?: number;
  style?: React.CSSProperties;
}

/**
 * Double colonne Avantages / Inconvénients (titres H3, verre teinté).
 * @startingPoint section="Éditorial" subtitle="Pour / Contre (deux colonnes, H3)" viewport="760x240"
 */
export function ProsCons(props: ProsConsProps): JSX.Element;
