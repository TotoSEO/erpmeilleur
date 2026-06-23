import * as React from 'react';

export interface PullQuoteProps {
  children?: React.ReactNode;
  author?: React.ReactNode;
  role?: React.ReactNode;
  /** Author initials for the avatar disc. */
  initials?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Citation éditoriale : guillemet géant dégradé + signature. */
export function PullQuote(props: PullQuoteProps): JSX.Element;
