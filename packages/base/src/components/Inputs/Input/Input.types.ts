import type { InputHTMLAttributes } from 'react';
import type { DisableProps, RightElementProps, ErrorProps } from '../../../utils/type/ComponentProps';
import type { BorderRadiusTokens } from '../../../styles';

export interface InputProps
  extends InputOptionProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width'>,
    DisableProps,
    RightElementProps {}

export interface InputOptionProps extends ErrorProps {
  width?: string;
  maxLength?: number;
  borderRadius?: BorderRadiusTokens;
  customNumberInputHeight?: string;
  onClear?: () => void;
}
