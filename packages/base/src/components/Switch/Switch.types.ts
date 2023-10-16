import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';
import type { DefaultSelectedProps, DisableProps, SelectedProps } from '../../utils/type/ComponentProps';

export interface SwitchProps
  extends SwitchOptionProps,
    DisableProps,
    SelectedProps,
    DefaultSelectedProps,
    Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {}

export interface SwitchOptionProps {
  /*
   * 요소 클릭시 실행되는 함수
   * */
  onChange?: () => void;
  /*
   * 활성화 되었을 때 요소의 색상
   * */
  activeColor: ColorTokens;
}
