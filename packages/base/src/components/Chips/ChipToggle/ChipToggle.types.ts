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
  DisableProps,
} from '../../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export const ChipToggleStyleVariants = {
  SOLID: 'SOLID',
} as const;

export const ChipToggleSizeVariants = {
  S: 'S',
  XS: 'XS',
} as const;

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
    DisableProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {}
export interface ChipToggleOptionProps {}
