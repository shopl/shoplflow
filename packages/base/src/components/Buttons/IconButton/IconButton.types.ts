import type { ComponentPropsWithoutRef } from 'react';
import type { PolymorphicComponentProps } from 'src/types/PolymorphicComponentProps';

export type IconButtonSizeVar = 'S' | 'M';

export const iconButtonSizeVar: IconButtonSizeVar[] = ['S', 'M'];

export type IconButtonStyleVar = 'SOLID' | 'GHOST';

export const iconButtonStyleVar: IconButtonStyleVar[] = ['SOLID', 'GHOST'];

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
