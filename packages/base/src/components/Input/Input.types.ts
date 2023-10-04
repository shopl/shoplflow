import type { ComponentPropsWithoutRef } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  maxLength?: number;
  wrapperStyle?: React.CSSProperties;
};

export type InputComponent = (
  props: InputProps & {
    ref?: React.ComponentPropsWithRef<'input'>['ref'];
  },
) => React.ReactElement;
