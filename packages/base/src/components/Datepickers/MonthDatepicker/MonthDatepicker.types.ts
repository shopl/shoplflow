export type MonthClickDateInfo = {
  startDate?: Date;
  endDate?: Date;
  selectedMonthRange: number;
};

export type MonthDatepickerProps = {
  /**
   * 선택된 시작 날짜
   */
  initStartDate?: Date;
  /**
   * 선택된 마지막 날짜
   */
  initEndDate?: Date;
  handleMonthClick: (dateInfo: MonthClickDateInfo) => void;
  /**
   * 최소 선택 가능 날짜
   */
  minDate?: Date;

  /**
   * 최대 선택 가능 날짜
   */
  maxDate?: Date;

  /**
   * 하나의 월만 선택 여부
   */
  onlySingleMonth?: boolean;

  /**
   * 사이즈 - 기본값: M
   */
  sizeVar?: 'S' | 'M';
};

export type MonthDatepickerStyleType = { inRange: boolean; isStart: boolean; isEnd: boolean; disabled: boolean };
