import type { $Values } from '../../utils/type/$values';
import type {
  ColorTokenProps,
  SizeVariantProps,
  StyleVariantProps,
  LeftAndRightElementProps,
  TextProps,
  SelectedProps,
  RadiusBooleanProps,
  DefaultSelectedProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export enum ChipStyleVariants {
  SOLID = 'SOLID',
}

export enum ChipSizeVariants {
  S = 'S',
  XS = 'XS',
}

export type ChipStyleVariantType = $Values<typeof ChipStyleVariants>;
export type ChipSizeVariantType = $Values<typeof ChipSizeVariants>;

export interface ChipProps
  extends ChipOptionProps,
    SelectedProps,
    DefaultSelectedProps,
    ColorTokenProps,
    StyleVariantProps<ChipStyleVariantType>,
    SizeVariantProps<ChipSizeVariantType>,
    LeftAndRightElementProps,
    RadiusBooleanProps,
    TextProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {}
export interface ChipOptionProps {}
