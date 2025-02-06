import type {
  ColorTokenProps,
  LeftAndRightElementProps,
  SizeVariantProps,
  StyleVariantProps,
  TextProps,
  DisableProps,
  BackgroundColorProps,
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
    /**
     * border 기준 4단계 높은 색상
     */
    TextProps,
    DisableProps,
    LeftAndRightElementProps,
    SizeVariantProps<ChipButtonSizeVariantType>,
    /**
     * styleVar에 따라 기준 속성이 변경됩니다.
     */
    StyleVariantProps<ChipButtonStyleVariantType>,
    ColorTokenProps,
    BackgroundColorProps {}
export interface ChipButtonOptionProps {}
