import type { InputHTMLAttributes } from 'react';
import type {
  DisableProps,
  RightElementProps,
  ErrorProps,
  SizeVariantProps,
  LeftElementProps,
} from '../../../utils/type/ComponentProps';
import type { BorderRadiusTokens } from '../../../styles';
import type { $Values } from '@shoplflow/utils';

export const InputSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type InputSizeVariantType = $Values<typeof InputSizeVariants>;

export interface InputProps
  extends
    InputOptionProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width'>,
    DisableProps,
    LeftElementProps,
    RightElementProps {}

export interface InputOptionProps extends ErrorProps, SizeVariantProps<InputSizeVariantType> {
  width?: string;
  maxLength?: number;
  /**
   * 최소 넓이를 지정
   * @description 64px;
   */
  minWidth?: string;
  borderRadius?: BorderRadiusTokens;
  customNumberInputHeight?: string;
  onClear?: () => void;
  gap?: CSSStyleDeclaration['gap'];
  initIsFocused?: boolean;
}
