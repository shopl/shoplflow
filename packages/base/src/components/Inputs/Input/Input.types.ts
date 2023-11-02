import type { InputHTMLAttributes } from 'react';
import type { DisableProps, RightElementProps } from '../../../utils/type/ComponentProps';

export interface InputProps
  extends InputOptionProps,
    InputHTMLAttributes<HTMLInputElement>,
    DisableProps,
    RightElementProps {}

export type InputOptionProps = {
  maxLength?: number;
  isError?: boolean;
  onDelete: (...args: any[]) => void;
};
