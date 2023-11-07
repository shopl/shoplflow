import type { InputHTMLAttributes } from 'react';
import type { DisableProps, RightElementProps, ErrorProps } from '../../../utils/type/ComponentProps';

export interface InputProps
  extends InputOptionProps,
    InputHTMLAttributes<HTMLInputElement>,
    DisableProps,
    RightElementProps {}

export interface InputOptionProps extends ErrorProps {
  maxLength?: number;
  onDelete?: () => void;
}
