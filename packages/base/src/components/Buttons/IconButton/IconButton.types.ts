import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';
import type { PolymorphicComponentProps } from '../../../types/PolymorphicComponentProps';
import type { $Values } from '@shoplflow/utils';
import type {
  DisableProps,
  SizeVariantProps,
  StyleVariantProps,
  ColorTokenProps,
  ChildrenProps,
  LoadingProps,
} from '../../../utils/type/ComponentProps';
import type React from 'react';

export const IconButtonSizeVariants = {
  XS: 'XS',
  S: 'S',
  M: 'M',
} as const;

export type IconButtonSizeVariantType = $Values<typeof IconButtonSizeVariants>;

export const IconButtonStyleVariants = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SOLID: 'SOLID',
  GHOST: 'GHOST',
} as const;

export type IconButtonStyleVariantType = $Values<typeof IconButtonStyleVariants>;

export type IconButtonOptionProps<T extends ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> &
  DisableProps &
  SizeVariantProps<IconButtonSizeVariantType> &
  StyleVariantProps<IconButtonStyleVariantType> &
  ChildrenProps &
  ColorTokenProps &
  LoadingProps;

export type IconButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, IconButtonOptionProps>;

export type IconButtonComponent = <T extends ElementType = 'button'>(
  props: IconButtonProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
