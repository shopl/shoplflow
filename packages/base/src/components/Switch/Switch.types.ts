import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';
import type { DefaultSelectedProps, DisableProps, SelectedProps } from '../../utils/type/ComponentProps';

export interface SwitchProps
  extends SwitchOptionProps,
    DisableProps,
    SelectedProps,
    DefaultSelectedProps,
    HTMLAttributes<HTMLInputElement> {}

export interface SwitchOptionProps {
  /*
   * 활성화 되었을 때 요소의 색상
   * */
  activeColor: ColorTokens;
}
