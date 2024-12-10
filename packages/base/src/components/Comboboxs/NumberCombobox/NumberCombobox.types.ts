import type { $Values } from '@shoplflow/utils';
import type { InputHTMLAttributes } from 'react';
import type { ColorTokenProps, SizeVariantProps } from 'src/utils/type/ComponentProps';

export const NumberComboboxSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type NumberComboboxSizeVariantType = $Values<typeof NumberComboboxSizeVariants>;

export type NumberComboboxInputType = 'hours' | 'minutes';

export type NumberComboboxErrorType = 'range' | 'unit';

export type NumberComboboxOptionProps = ColorTokenProps & SizeVariantProps<NumberComboboxSizeVariantType>;

export type NumberComboboxProps = NumberComboboxOptionProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> & {
    disabled?: boolean;
    onSelect?: (value: string | number | readonly string[]) => void;
    width?: string;
    items: Array<{ label: string; value: string }>;
    /**
     * 에러 여부
     */
    isError?: boolean;
  };
