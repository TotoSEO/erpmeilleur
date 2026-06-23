import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `minium` variants are reserved for annotation/alert actions. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'teal' | 'minium' | 'minium-outline';
  size?: 'sm' | 'md' | 'lg';
  /** Element to render as, e.g. 'a' for links. */
  as?: 'button' | 'a';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * Bouton d'interface de crm-logiciel.fr.
 * @startingPoint section="Core" subtitle="Bouton grotesque, angle vif, sans gradient" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
