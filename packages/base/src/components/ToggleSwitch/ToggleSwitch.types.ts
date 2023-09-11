import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';

export interface ToggleSwitchProps extends ToggleSwitchOptionProps, Omit<HTMLAttributes<HTMLInputElement>, 'onClick'> {}

export interface ToggleSwitchOptionProps {
  /*
   * 요소 클릭시 실행되는 함수
   * */
  onClick?: () => void;
  /*
   * 요소 활성화(checked) 여부
   * */
  isActive?: boolean;
  /*
   * 요소의 비활성화 여부
   * */
  isDisabled?: boolean;
  /*
   * 활성화 되었을 때 요소의 색상
   * */
  activeColor: ColorTokens;
}
