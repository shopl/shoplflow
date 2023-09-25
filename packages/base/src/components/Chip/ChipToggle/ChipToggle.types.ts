import type { $Values } from '../../../utils/type/$values';
import type {
  ColorTokenProps,
  SizeVariantProps,
  StyleVariantProps,
  LeftAndRightElementProps,
  TextProps,
  SelectedProps,
  RadiusBooleanProps,
  DefaultSelectedProps,
} from '../../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export enum ChipToggleStyleVariants {
  SOLID = 'SOLID',
}

export enum ChipToggleSizeVariants {
  S = 'S',
  XS = 'XS',
}

export type ChipToggleStyleVariantType = $Values<typeof ChipToggleStyleVariants>;
export type ChipToggleSizeVariantType = $Values<typeof ChipToggleSizeVariants>;

export interface ChipToggleProps
  extends ChipToggleOptionProps,
    SelectedProps,
    DefaultSelectedProps,
    ColorTokenProps,
    StyleVariantProps<ChipToggleStyleVariantType>,
    SizeVariantProps<ChipToggleSizeVariantType>,
    LeftAndRightElementProps,
    RadiusBooleanProps,
    TextProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {}
export interface ChipToggleOptionProps {}
