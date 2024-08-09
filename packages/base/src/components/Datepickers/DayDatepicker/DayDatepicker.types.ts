import type { DatePickerProps, ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import type { Locale } from 'react-datepicker/dist/date_utils';

export type DayDatepickerProps = DayDatepickerOptionProps & DatePickerProps;
export type DayDatepickerOptionProps = { modalHeight?: string; height?: string; isInitSelectedStyle?: boolean };

export type DayDatepickerHeaderCustomProps = ReactDatePickerCustomHeaderProps & {
  minDate?: number;
  maxDate?: number;
  locale?: Locale;
};
