import * as React from 'react';

export interface DataColumn {
  key: string;
  label: React.ReactNode;
  /** Right-align + compose cells in mono tabular. Use for any measured figure. */
  num?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
  /** Pin this column to the left when scrolling (use on the first/name column). */
  sticky?: boolean;
}

/** A cell may be a raw value, or { value, tone } to colour it. */
export type DataCell =
  | React.ReactNode
  | { value: React.ReactNode; tone?: 'positive' | 'negative' | 'muted' | 'strong' };

export interface DataTableProps {
  columns: DataColumn[];
  /** Each row maps column keys to cells; set `_best: true` to highlight the row. */
  rows: (Record<string, DataCell> & { _best?: boolean })[];
  caption?: React.ReactNode;
  stickyHeader?: boolean;
  style?: React.CSSProperties;
}

/**
 * Tableau comparatif design : en-tête dégradé, ligne « meilleur » surlignée.
 * @startingPoint section="Data" subtitle="Tableau comparatif (en-tête dégradé)" viewport="900x300"
 */
export function DataTable(props: DataTableProps): JSX.Element;
