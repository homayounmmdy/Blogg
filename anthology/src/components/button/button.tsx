import { ComponentProps } from 'react';

import clsx from 'clsx';
import styles from './button.module.css';

export type BUttonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, className, ...props }: BUttonProps) => {
  const classes = clsx(styles.button, styles[variant], className);

  return <button {...props} className={classes} />;
};
