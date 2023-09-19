import type { $Values } from '../../utils/type/$values';
import type {
  BackgroundColorProps,
  ChildrenProps,
  ColorTokenProps,
  LeftElementProps,
  RightElementProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';

export enum ChipStyleVariants {
  PILL = 'PILL',
  RECTANGLE = 'RECTANGLE',
  LINE = 'LINE',
}

export enum ChipSizeVariants {
  S = 'S',
  XS = 'XS',
}

export type ChipStyleVariantType = $Values<typeof ChipStyleVariants>;
export type ChipSizeVariantType = $Values<typeof ChipSizeVariants>;

export interface ChipProps
  extends ChipOptionProps,
    ChildrenProps,
    ColorTokenProps,
    BackgroundColorProps,
    StyleVariantProps<ChipStyleVariantType>,
    SizeVariantProps<ChipSizeVariantType>,
    LeftElementProps,
    RightElementProps,
    Omit<HTMLAttributes<HTMLLIElement>, 'color'> {}
export interface ChipOptionProps {
  selectedColor?: ColorTokens;
}
