import type { $Values } from '@shoplflow/utils';
import type { DatePickerProps, ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import type { Locale } from 'react-datepicker/dist/date_utils';
import type { SizeVariantProps } from 'src/utils/type/ComponentProps';

export const DayDatepickerSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type DayDatepickerSizeVariantType = $Values<typeof DayDatepickerSizeVariants>;

export type DayDatepickerProps = DayDatepickerOptionProps & DatePickerProps;
export type DayDatepickerOptionProps = {
  modalHeight?: string;
  height?: string;
  isInitSelectedStyle?: boolean;
} & SizeVariantProps<DayDatepickerSizeVariantType>;

export type DayDatepickerHeaderCustomProps = ReactDatePickerCustomHeaderProps & {
  minDate?: number;
  maxDate?: number;
  locale?: Locale;
};
