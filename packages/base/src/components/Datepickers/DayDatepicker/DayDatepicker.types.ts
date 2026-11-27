import type { ReactNode } from 'react';
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
  | 'fixedHeight'
  | 'className'
  | 'onMonthChange'
  | 'onYearChange'
> &
  DayDatepickerOptionProps;

export type DayDatepickerOptionProps = {
  /**
   * 캘린더 타입
   */
  calendarType: DayCalendarType;
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
  /**
   * 달력 하단(날짜 칸 아래)에 넣을 내용 — 예: 최대 선택 기간 안내.
   * 날짜 칸과 8px 간격을 두고 달력 안쪽 여백 안에 전체 폭으로 놓인다. 내용·스타일은 사용하는 쪽에서 정한다
   */
  bottomSource?: ReactNode;
} & SizeVariantProps<DayDatepickerSizeVariantType>;

export type DayDatepickerHeaderCustomProps = ReactDatePickerCustomHeaderProps & {
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
  className?: string;
};
