import * as React from 'react';

export interface FaderItem {
  label: React.ReactNode;
  value: number;
  max?: number;
}

export interface FadersProps {
  items: FaderItem[];
  style?: React.CSSProperties;
}

/**
 * Notation par faders : curseur physique sur rail gradué.
 * @startingPoint section="Data" subtitle="Notation par faders (console)" viewport="460x220"
 */
export function Faders(props: FadersProps): JSX.Element;
