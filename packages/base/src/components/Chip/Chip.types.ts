import type { $Values } from '../../utils/type/$values';
import type {
  BackgroundColorProps,
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
    BackgroundColorProps,
    StyleVariantProps<ChipStyleVariantType>,
    SizeVariantProps<ChipSizeVariantType>,
    LeftAndRightElementProps,
    RadiusBooleanProps,
    TextProps,
    Omit<HTMLAttributes<HTMLLIElement>, 'color'> {}
export interface ChipOptionProps {}
