import React from 'react';
import css from './ActiveLabel.module.css';

export interface IActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: IActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
