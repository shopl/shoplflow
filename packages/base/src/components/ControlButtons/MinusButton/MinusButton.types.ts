import type { MouseEvent, ButtonHTMLAttributes } from 'react';
import type { ColorTokens } from '../../../styles';

export interface MinusBoxProps
  extends MinusBoxOptionProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'color'> {}

export interface MinusBoxOptionProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: ColorTokens;
}
