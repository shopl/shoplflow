import type { MouseEvent, HTMLAttributes } from 'react';
import type { ColorTokens } from '../../../styles';

export interface MinusBoxProps
  extends MinusBoxOptionProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'color'> {}

export interface MinusBoxOptionProps {
  /**
   * 요소 클릭시 실행되는 함수
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * 요소의 배경색
   */
  color?: ColorTokens;
}
