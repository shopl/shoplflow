import type { $Values } from '@shoplflow/utils';
import type { Command as CommandPrimitive } from 'cmdk';
import type { ColorTokenProps, SizeVariantProps } from 'src/utils/type/ComponentProps';

export const ComboboxSizeVariants = {
  S: 'S',
  M: 'M',
} as const;
export type ComboboxSizeVariantType = $Values<typeof ComboboxSizeVariants>;

export type ComboboxInputType = 'hours' | 'minutes';

export type ComboboxOptionProps = SizeVariantProps<ComboboxSizeVariantType> & ColorTokenProps;

export type ComboboxProps = ComboboxOptionProps &
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    /**
     * 시간 단위 (ex: 5 > 0, 5, 10....)
     */
    unit?: number;
    inputType: ComboboxInputType;
    disabled?: boolean;
    onSelect?: (value: string) => void;
    onError?: () => void;
  };
