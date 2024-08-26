import type { $Values } from '@shoplflow/utils';
import type { DatePickerProps, ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import type { Locale } from 'react-datepicker/dist/date_utils';
import type { SizeVariantProps } from '../../../utils/type/ComponentProps';

export const DayDatepickerSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

/**
 * single, multiple, range  union type (캘린더의 형태)
 */
export type DayCalendarType =
  | { type: 'single'; handleDayChange: (date: Date | null) => void }
  | { type: 'multiple'; handleMutlipleDaysChange: (date: Date[] | null) => void }
  | { type: 'range'; handleDayRangeChange: (dates: [Date | null, Date | null]) => void };

export type DayDatepickerSizeVariantType = $Values<typeof DayDatepickerSizeVariants>;

export type DayDatepickerProps = Pick<
  DatePickerProps,
  | 'highlightDates'
  | 'startDate'
  | 'endDate'
  | 'locale'
  | 'selectedDates'
  | 'selected'
  | 'children'
  | 'excludeDates'
  | 'calendarStartDay'
> &
  DayDatepickerOptionProps;

export type DayDatepickerOptionProps = {
  /**
   * 캘린더 타입
   */
  calendarType: DayCalendarType;
} & SizeVariantProps<DayDatepickerSizeVariantType>;

export type DayDatepickerHeaderCustomProps = ReactDatePickerCustomHeaderProps & {
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
};
