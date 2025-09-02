import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';
import type {
  DefaultSelectedProps,
  DisableProps,
  SelectedProps,
  SizeVariantProps,
} from '../../utils/type/ComponentProps';
import type { $Values } from '@shoplflow/utils';

export const SwitchSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type SwitchSizeVariantType = $Values<typeof SwitchSizeVariants>;

export interface SwitchProps
  extends SwitchOptionProps,
    DisableProps,
    SelectedProps,
    DefaultSelectedProps,
    SizeVariantProps<SwitchSizeVariantType>,
    HTMLAttributes<HTMLInputElement> {}

export interface SwitchOptionProps {
  /*
   * 활성화 되었을 때 요소의 색상
   * */
  activeColor: ColorTokens;
}
