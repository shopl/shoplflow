import type { $Values } from '@shoplflow/utils';
import type { InputHTMLAttributes } from 'react';
import type { ColorTokenProps, SizeVariantProps } from 'src/utils/type/ComponentProps';

export const NumberComboboxSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type NumberComboboxSizeVariantType = $Values<typeof NumberComboboxSizeVariants>;

export type NumberComboboxInputType = 'hours' | 'minutes';

export type NumberComboboxOptionProps = ColorTokenProps & SizeVariantProps<NumberComboboxSizeVariantType>;

export type NumberComboboxProps = NumberComboboxOptionProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> & {
    /**
     * 시간 단위 (ex: 5 > 0, 5, 10....)
     */
    unit?: number;
    inputType: NumberComboboxInputType;
    disabled?: boolean;
    onSelect?: (value: string | number | readonly string[]) => void;
    onError?: () => void;
  };
