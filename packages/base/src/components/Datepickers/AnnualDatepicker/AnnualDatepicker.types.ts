export type AnnualDatepickerProps = {
  currentYear?: number;
  startYear?: number;
  endYear?: number;
  handleYearClick: (year: number) => void;
};
