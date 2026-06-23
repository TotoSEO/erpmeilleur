import * as React from 'react';

export interface FeatureColumnAction {
  label: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface FeatureColumnItem {
  /** Pictogram (e.g. a Lucide <i>/<svg>) shown in a gradient orb. */
  icon?: React.ReactNode;
  /** OR a CSS background (gradient/url) shown as a top media block instead of the orb. */
  image?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  text: React.ReactNode;
  /** Optional button pinned to the bottom of the column. */
  action?: FeatureColumnAction;
}

export interface FeatureColumnsProps {
  items: FeatureColumnItem[];
  columns?: number;
  gap?: number | string;
  collapseAt?: number;
  style?: React.CSSProperties;
}

/**
 * Colonnes de features de même hauteur : picto/image, titre, texte, bouton en bas.
 * @startingPoint section="Layout" subtitle="Colonnes de features (même hauteur, bouton en bas)" viewport="980x300"
 */
export function FeatureColumns(props: FeatureColumnsProps): JSX.Element;
