import * as React from 'react';

export interface ColumnRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Editorial layout preset. */
  layout?: 'image-text' | 'text-image' | 'two' | 'aside-body' | 'body-aside' | 'three';
  gap?: number | string;
  align?: 'start' | 'center' | 'stretch';
  /** Viewport (px) below which columns stack to full width. */
  collapseAt?: number;
  children?: React.ReactNode;
}

export interface VisualProps {
  label?: React.ReactNode;
  height?: number;
  gradient?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Système de colonnage pour composer un article.
 * @startingPoint section="Layout" subtitle="Colonnage éditorial (image+texte, asymétrique…)" viewport="900x240"
 */
export function ColumnRow(props: ColumnRowProps): JSX.Element;
/** Placeholder visuel dégradé pour le colonnage. */
export function Visual(props: VisualProps): JSX.Element;
