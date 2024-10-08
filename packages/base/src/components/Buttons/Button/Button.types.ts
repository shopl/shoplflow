import type { $Values } from '@shoplflow/utils';
import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';
import type { PolymorphicComponentProps } from '../../../types/PolymorphicComponentProps';
import type {
  ColorTokenProps,
  DisableProps,
  LeftAndRightNodeProps,
  LoadingProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../../utils/type/ComponentProps';

import type { TypographyTokens } from '../../../styles';

export const ButtonSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type ButtonSizeVariantType = $Values<typeof ButtonSizeVariants>;

export const ButtonStyleVariants = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SOLID: 'SOLID',
  GHOST: 'GHOST',
} as const;

export type ButtonStyleVariantType = $Values<typeof ButtonStyleVariants>;

// MARK : interface는 객체 구조를 가지기 때문에, 컴파일 시점에 객체 구조가 명확하게 설정되어 있어야 합니다. 따라서 동적 타입을 명시할 때는 타입을 선언하고, 정적 타입을 선언할 때는 interface를 사용합니다.
export type ButtonOptionProps<T extends ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> &
  SizeVariantProps<ButtonSizeVariantType> &
  StyleVariantProps<ButtonStyleVariantType> &
  ColorTokenProps &
  DisableProps &
  LoadingProps & {
    typography?: TypographyTokens;
    lineClamp?: number;
  };

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOptionProps> &
  LeftAndRightNodeProps;

export type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
