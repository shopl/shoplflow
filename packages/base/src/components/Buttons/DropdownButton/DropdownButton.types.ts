import type { Placement } from '@floating-ui/core';
import type { $Values } from '@shoplflow/utils';
import type { SizeVariantProps, StyleVariantProps } from '../../../utils/type/ComponentProps';

export const DropdownButtonSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type DropdownButtonSizeVariantType = $Values<typeof DropdownButtonSizeVariants>;

export const DropdownButtonStyleVariants = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
} as const;

export type DropdownButtonStyleVariantType = $Values<typeof DropdownButtonStyleVariants>;

export interface DropdownButtonProps
  extends DropdownButtonOptionProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export type DropdownButtonOptionProps = SizeVariantProps<DropdownButtonSizeVariantType> &
  StyleVariantProps<DropdownButtonStyleVariantType> & { text: string } & {
    placement?: Placement;
  };
