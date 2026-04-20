import type {
  ColorTokenProps,
  LeftAndRightElementProps,
  SizeVariantProps,
  StyleVariantProps,
  TextProps,
  DisableProps,
  BackgroundColorProps,
  SelectedProps,
  RadiusProps,
} from '../../../utils/type/ComponentProps';
import type { ColorTokens } from '../../../styles';
import type { $Values } from '@shoplflow/utils';
import type { HTMLAttributes, ReactNode } from 'react';
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
    BackgroundColorProps,
    RadiusProps {}
export interface ChipButtonOptionProps {
  /**
   * 내부 컨텐츠를 직접 렌더링합니다. 설정 시 `text`보다 우선합니다.
   */
  children?: ReactNode;
  /**
   * 선택 상태에서 기본 배경 대신 사용할 토큰입니다.
   */
  selectedBackground?: ColorTokens;
  /**
   * 선택 상태에서 기본 테두리 색 대신 사용할 토큰입니다.
   */
  selectedBorderColor?: ColorTokens;
  /**
   * 칩 버튼에 표시할 카운트 수입니다.
   */
  count?: string | number;
}
