import type { HTMLAttributes } from 'react';
import type { PolymorphicComponentProps } from 'src/types/PolymorphicComponentProps';

import type { ColorTokens, TypographyTokens } from '../../styles';

export type ButtonSize = 's' | 'm';

export type ButtonType = 'primary' | 'secondary' | 'solid' | 'ghost';

export interface ButtonOptionProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  typography?: TypographyTokens;
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  color?: ColorTokens;
}

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOptionProps>;

export type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: React.ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
