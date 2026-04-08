import type {
  ColorTokenProps,
  LeftAndRightElementProps,
  SizeVariantProps,
  StyleVariantProps,
  TextProps,
  DisableProps,
  BackgroundColorProps,
  SelectedProps,
} from '../../../utils/type/ComponentProps';
import type { ColorTokens } from '../../../styles';
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
  extends
    ChipButtonOptionProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'color'>,
    TextProps,
    DisableProps,
    SelectedProps,
    LeftAndRightElementProps,
    SizeVariantProps<ChipButtonSizeVariantType>,
    StyleVariantProps<ChipButtonStyleVariantType>,
    ColorTokenProps,
    BackgroundColorProps {}
export interface ChipButtonOptionProps {
  /**
   * 선택 상태에서 기본 배경 대신 사용할 토큰입니다.
   */
  selectedBackground?: ColorTokens;
  /**
   * 선택 상태에서 기본 테두리 색 대신 사용할 토큰입니다.
   */
  selectedBorderColor?: ColorTokens;
}
