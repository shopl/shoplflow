import type { $Values } from '@shoplflow/utils';
import type { ComponentPropsWithoutRef } from 'react';
import type { PolymorphicComponentProps } from 'src/types/PolymorphicComponentProps';
import type {
  DisableProps,
  LeftAndRightNodeProps,
  SizeVariantProps,
  StyleVariantProps,
} from 'src/utils/type/ComponentProps';

import type { TypographyTokens } from '../../styles';

export const buttonSizeVar = {
  S: 'S',
  M: 'M',
} as const;

export type ButtonSizeVar = $Values<typeof buttonSizeVar>;

export type ButtonStyleVar = 'primary' | 'secondary' | 'solid' | 'ghost';

export const buttonStyleVar: ButtonStyleVar[] = ['primary', 'secondary', 'solid', 'ghost'];

// MARK : interface는 객체 구조를 가지기 때문에, 컴파일 시점에 객체 구조가 명확하게 설정되어 있어야 합니다. 따라서 동적 타입을 명시할 때는 타입을 선언하고, 정적 타입을 선언할 때는 interface를 사용합니다.
export type ButtonOptionProps<T extends React.ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> &
  SizeVariantProps<ButtonSizeVar> &
  StyleVariantProps<ButtonStyleVar> &
  DisableProps & {
    typography?: TypographyTokens;
  };

export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOptionProps> &
  LeftAndRightNodeProps;

export type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: React.ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
