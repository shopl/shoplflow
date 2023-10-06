import type { ComponentPropsWithoutRef } from 'react';

export type InputOptionProps = {
  nowLength?: number;
  maxLength?: number;
  wrapperStyle?: React.CSSProperties;
  errorText?: string;
  canDelete?: boolean;
};

export type InputProps = ComponentPropsWithoutRef<'input'> & InputOptionProps;

export type InputComponent = (
  props: InputProps & {
    ref?: React.ComponentPropsWithRef<'input'>['ref'];
  },
) => React.ReactElement;
