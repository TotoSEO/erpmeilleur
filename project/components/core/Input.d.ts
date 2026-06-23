import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message; turns the field rule minium. */
  error?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  /** Compose the value in IBM Plex Mono (for numeric input). */
  mono?: boolean;
}

/** Champ de saisie texte/nombre. */
export function Input(props: InputProps): JSX.Element;
