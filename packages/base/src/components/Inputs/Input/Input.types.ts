import type { InputHTMLAttributes } from 'react';
import type { DisableProps, RightElementProps, ErrorProps } from '../../../utils/type/ComponentProps';

export interface InputProps
  extends InputOptionProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width'>,
    DisableProps,
    RightElementProps {}

export interface InputOptionProps extends ErrorProps {
  width?: string;
  maxLength?: number;
  borderRadius?: CSSStyleDeclaration['borderRadius'];
  onClear?: () => void;
}
