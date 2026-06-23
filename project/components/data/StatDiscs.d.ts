import * as React from 'react';

export interface StatDisc {
  value: React.ReactNode;
  unit?: React.ReactNode;
  label: React.ReactNode;
  /** Override the gradient fill. */
  gradient?: string;
}

export interface StatDiscsProps {
  /** 2 to 4 key figures. */
  items: StatDisc[];
  style?: React.CSSProperties;
}

/** Disques de chiffres clés flottant en couches (relief). */
export function StatDiscs(props: StatDiscsProps): JSX.Element;
