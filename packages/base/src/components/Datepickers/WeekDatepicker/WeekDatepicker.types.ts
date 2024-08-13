export type WeekDatepickerProps = {
  /**
   * 현재 연도의 Date 밸류
   */
  yearForWeek: Date;
  /**
   * 연도의 숫자
   */
  currentYear?: number;
  /**
   * 현재 ㄴ선택된 주별
   */
  selectWeeks: string;

  weekArray: string[];
  /**
   * @param year
   * 상단 연도 변경하기
   */
  handleChangeYear: (year: Date) => void;
  /**
   * @param week
   */
  handleWeekClick: (week: string) => void;
  /**
   * @param week
   * 클릭여부 함수를 위한 작업
   */
  rangeCheckDom: (week: string) => string;

  handlePreviousYearDisabled: boolean;
  handleNextYearDisabled: boolean;
  /**
   * 이전 연도로 가는 함수
   */
  handlePreviousYearOfWeekTab: () => void;
  /**
   * 다음 연도로 가는 함수
   */
  handleNextYearOfWeekTab: () => void;
  modalHeight?: string;

  minDate: Date | null;
  maxDate: Date | null;
};
export interface WeekDatepickerOptionProps {}
