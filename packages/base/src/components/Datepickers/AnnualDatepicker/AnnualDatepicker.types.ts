export type AnnualDatepickerProps = {
  currentYear?: number;
  startYear?: number;
  endYear?: number;
  handleYearClick: (year: number) => void;
  /**
   * 선택 불가 연도
   */
  disabledYears?: number[];
};
