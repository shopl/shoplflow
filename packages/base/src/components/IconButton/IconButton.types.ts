import type { ComponentPropsWithoutRef } from 'react';
import type { PolymorphicComponentProps } from 'src/types/PolymorphicComponentProps';

export type IconButtonSizeVar = 's' | 'm';

export const iconButtonSizeVar: IconButtonSizeVar[] = ['s', 'm'];

export type IconButtonStyleVar = 'solid' | 'ghost';

export const iconButtonStyleVar: IconButtonStyleVar[] = ['solid', 'ghost'];

export type IconButtonOptionProps<T extends React.ElementType = 'button'> = Omit<
  ComponentPropsWithoutRef<T>,
  'color' | 'disabled'
> & {
  styleVar?: IconButtonStyleVar;
  sizeVar?: IconButtonSizeVar;
  disabled?: boolean;
};

export type IconButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentProps<
  T,
  IconButtonOptionProps
>;

export type IconButtonComponent = <T extends React.ElementType = 'button'>(
  props: IconButtonProps<T> & {
    ref?: React.ComponentPropsWithRef<T>['ref'];
  },
) => React.ReactElement | null;
