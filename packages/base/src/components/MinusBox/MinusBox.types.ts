import type { MouseEvent, HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';

export interface MinusBoxProps
  extends MinusBoxOptionProps,
    Omit<HTMLAttributes<HTMLInputElement>, 'onClick' | 'color'> {}

export interface MinusBoxOptionProps {
  /**
   * 요소 클릭시 실행되는 함수
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * 요소의 배경색
   */
  color?: ColorTokens;
  /**
   * hover 상태의 요소 ㄴ배경색
   */
  hoverColor?: ColorTokens;
}
