import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactElement } from 'react';
import type { PolymorphicComponentProps } from '../../../types/PolymorphicComponentProps';
import type { $Values } from '@shoplflow/utils';
import type {
  DisableProps,
  IconSourceProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../../utils/type/ComponentProps';

export const iconButtonSizeVar = {
  S: 'S',
  M: 'M',
};

export type IconButtonSizeVar = $Values<typeof iconButtonSizeVar>;

export const iconButtonStyleVar = {
  SOLID: 'SOLID',
  GHOST: 'GHOST',
};

export type IconButtonStyleVar = $Values<typeof iconButtonStyleVar>;

export type IconButtonOptionProps<T extends ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> &
  DisableProps &
  SizeVariantProps<IconButtonSizeVar> &
  StyleVariantProps<IconButtonStyleVar> &
  IconSourceProps;

export type IconButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, IconButtonOptionProps>;

export type IconButtonComponent = <T extends ElementType = 'button'>(
  props: IconButtonProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref'];
  },
) => ReactElement | null;
