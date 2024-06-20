import type { $Values } from '@shoplflow/utils';
import type { HTMLAttributes, InputHTMLAttributes } from 'react';

export const ToggleButtonSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type ToggleButtonSizeVariantType = $Values<typeof ToggleButtonSizeVariants>;

export interface ToggleButtonProps extends ToggleButtonOptionProps, HTMLAttributes<HTMLDivElement> {
  targetName: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  fixedWidth: number;
  selectedValue?: string;
  sizeVar?: ToggleButtonSizeVariantType;
}

export interface ToggleButtonOptionProps {}

export interface ToggleButtonInnerRadioProps
  extends ToggleButtonInnerRadioOptionProps,
    InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ToggleButtonInnerRadioOptionProps {
  disabled?: boolean;
  selected?: boolean;
}
