import type { ComponentPropsWithoutRef } from 'react';
import type { PolymorphicComponentProps } from 'src/types/PolymorphicComponentProps';

import type { TypographyTokens } from '../../styles';

export type ButtonSizeVar = 's' | 'm';

export const buttonSizeVar: ButtonSizeVar[] = ['s', 'm'];

export type ButtonStyleVar = 'primary' | 'secondary' | 'solid' | 'ghost';

export const buttonStyleVar: ButtonStyleVar[] = ['primary', 'secondary', 'solid', 'ghost'];

export type ButtonOptionProps<T extends React.ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'diabled'
> & {
  typography?: TypographyTokens;
  styleVar?: ButtonStyleVar;
  sizeVar?: ButtonSizeVar;
  disabled?: boolean;
};

/**
 * styled component props에 포함되지 않은 props 타입 정의
 */
export type ButtonPropsNotStyled = {
  /**
   * 왼쪽 아이콘
   */
  leftChildren?: React.ReactNode;
  /**
   * 오른쪽 아이콘
   */
  rightChildren?: React.ReactNode;
};

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOptionProps> &
  ButtonPropsNotStyled;

export type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: React.ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
