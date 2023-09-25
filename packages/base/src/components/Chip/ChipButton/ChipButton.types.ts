import type {
  ColorTokenProps,
  LeftAndRightElementProps,
  SizeVariantProps,
  StyleVariantProps,
  TextProps,
  DisableProps,
} from '../../../utils/type/ComponentProps';
import type { $Values } from '@shoplflow/utils';
import type { HTMLAttributes } from 'react';
export const ChipButtonStyleVariants = {
  LINE: 'LINE',
} as const;

export const ChipButtonSizeVariants = {
  S: 'S',
  XS: 'XS',
} as const;

export type ChipButtonStyleVariantType = $Values<typeof ChipButtonStyleVariants>;
export type ChipButtonSizeVariantType = $Values<typeof ChipButtonSizeVariants>;

export interface ChipButtonProps
  extends ChipButtonOptionProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'color'>,
    TextProps,
    DisableProps,
    LeftAndRightElementProps,
    SizeVariantProps<ChipButtonSizeVariantType>,
    StyleVariantProps<ChipButtonStyleVariantType>,
    ColorTokenProps {}
export interface ChipButtonOptionProps {}
