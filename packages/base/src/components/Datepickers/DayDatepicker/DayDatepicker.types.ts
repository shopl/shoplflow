import type { $Values } from '@shoplflow/utils';
import type { DatePickerProps, ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import type { Locale } from 'react-datepicker/dist/date_utils';
import type { SizeVariantProps } from 'src/utils/type/ComponentProps';

export const DayDatepickerSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type DayCalendarType =
  | { type: 'single'; handleDayChange: (date: Date | null) => void }
  | { type: 'multiple'; handleMutlipleDaysChange: (date: Date[] | null) => void }
  | { type: 'range'; handleDayRangeChange: (dates: [Date | null, Date | null]) => void };

export type DayDatepickerSizeVariantType = $Values<typeof DayDatepickerSizeVariants>;

export type DayDatepickerProps = Omit<DatePickerProps, 'selectsRange' | 'selectsMultiple' | 'onChange'> &
  DayDatepickerOptionProps;
export type DayDatepickerOptionProps = {
  isInitSelectedStyle?: boolean;
  /**
   * 시작년도 (옵션 리스트 시작년도)
   */
  startYear?: number;
  /**
   * 마지막년도 (옵션 리스트 마지막년도)
   */
  endYear?: number;
  locale?: Locale;
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
