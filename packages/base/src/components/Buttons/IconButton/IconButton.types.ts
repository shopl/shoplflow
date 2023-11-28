import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactElement } from 'react';
import type { PolymorphicComponentProps } from '../../../types/PolymorphicComponentProps';
import type { $Values } from '@shoplflow/utils';
import type {
  DisableProps,
  SizeVariantProps,
  StyleVariantProps,
  ColorTokenProps,
  ChildrenProps,
} from '../../../utils/type/ComponentProps';

export const iconButtonSizeVar = {
  S: 'S',
  M: 'M',
} as const;

export type IconButtonSizeVar = $Values<typeof iconButtonSizeVar>;

export const iconButtonStyleVar = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SOLID: 'SOLID',
  GHOST: 'GHOST',
} as const;

export type IconButtonStyleVar = $Values<typeof iconButtonStyleVar>;

export type IconButtonOptionProps<T extends ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> &
  DisableProps &
  SizeVariantProps<IconButtonSizeVar> &
  StyleVariantProps<IconButtonStyleVar> &
  ChildrenProps &
  ColorTokenProps;

export type IconButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, IconButtonOptionProps>;

export type IconButtonComponent = <T extends ElementType = 'button'>(
  props: IconButtonProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  },
) => ReactElement | null;
