import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type InputOptionProps = {
  nowLength: number;
  maxLength?: number;
  wrapperStyle?: React.CSSProperties;
  errorText?: string;
  onDelete: (...args: any[]) => void;
  confirmController?: {
    hasBackground: boolean;
    onConfirm: (...args: any[]) => void;
    icon: ReactNode;
  };
};

export type InputProps = ComponentPropsWithoutRef<'input'> & InputOptionProps;
