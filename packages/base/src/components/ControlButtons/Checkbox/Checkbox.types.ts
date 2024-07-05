import type { $Values } from '@shoplflow/utils';
import type {
  DefaultSelectedProps,
  DisableProps,
  SelectedProps,
  StyleVariantProps,
} from '../../../utils/type/ComponentProps';
import type { ButtonHTMLAttributes } from 'react';

export const CheckboxStyleVariants = {
  PRIMARY: 'PRIMARY',
  LINE: 'LINE',
} as const;

export type CheckboxStyleVariantType = $Values<typeof CheckboxStyleVariants>;

export interface CheckboxProps extends CheckboxOptionProps {}
export interface CheckboxOptionProps
  extends StyleVariantProps<CheckboxStyleVariantType>,
    SelectedProps,
    DefaultSelectedProps,
    DisableProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}
