export type WeekClickDateInfo = {
  startWeek?: number;
  startYear?: number;
  startDate?: Date;
  endWeek?: number;
  endYear?: number;
  endDate?: Date;
};

export type WeekDatepickerProps = {
  /**
   * 선택된 시작 날짜
   */
  initStartDate?: Date;
  /**
   * 선택된 마지막 날짜
   */
  initEndDate?: Date;

  /**
   * @param dateInfo
   */
  handleWeekClick: (dateInfo: WeekClickDateInfo) => void;

  /**
   * 최소 선택 가능 날짜
   */
  minDate?: Date;

  /**
   * 최대 선택 가능 날짜
   */
  maxDate?: Date;

  /**
   * 하나의 주만 선택 여부
   */
  onlySingleWeek?: boolean;
};

export type WeekDatepickerStyleType = { inRange: boolean; isStart: boolean; isEnd: boolean; disabled: boolean };
