import React, { useState } from 'react';
import { YearContainer, YearArea, EachYearArea, EachYearDate } from './AnnualDatepicker.styled';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';

const AnnualDatepicker = ({
  startYear = 2000,
  endYear = 2100,
  currentYear,
  handleYearClick,
  disabledYears,
}: AnnualDatepickerProps) => {
  const [selectedYear, setSelectedYear] = useState(currentYear || new Date().getFullYear());
  const Years = Array.from({ length: endYear - startYear + 1 }).map((_, index) => startYear + index);

  const clickYear = (year: number) => {
    setSelectedYear(year);
    handleYearClick(year);
  };

  return (
    <YearContainer data-shoplflow={'AnnualDatepicker'}>
      <YearArea>
        {Years.map((year) => {
          const disabled = disabledYears?.includes(year);

          return (
            <EachYearArea
              key={year}
              disabled={disabled}
              isSelected={selectedYear === year}
              aria-disabled={disabled}
              onClick={() => {
                if (disabled) {
                  return;
                }
                clickYear(year);
              }}
            >
              <EachYearDate aria-disabled={disabled} disabled={disabled} isSelected={selectedYear === year}>
                {year}
              </EachYearDate>
            </EachYearArea>
          );
        })}
      </YearArea>
    </YearContainer>
  );
};

export default AnnualDatepicker;
