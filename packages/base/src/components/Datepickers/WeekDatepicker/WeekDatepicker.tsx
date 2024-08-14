import React, { useState } from 'react';

import { Container, EachWeekArea, WeekArea, WeekContainer } from './WeekDatepicker.styled';
import type { WeekDatepickerProps } from './WeekDatepicker.types';
import YearStepper from '../stepper/YearStepper';

const WeekDatepicker = ({
  // yearForWeek,
  // selectWeeks,
  // handleChangeYear,
  handleWeekClick,
  rangeCheckDom,
  // handlePreviousYearOfWeekTab,
  // handleNextYearOfWeekTab,
  // handlePreviousYearDisabled,
  // handleNextYearDisabled,
  weekArray,
  // minDate,
  // maxDate,
  modalHeight,
}: WeekDatepickerProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    // date, decreaseYear, prevYearButtonDisabled, nextYearButtonDisabled, increaseYear, changeYear, startYear, endYear,
    <Container modalHeight={modalHeight}>
      <WeekContainer>
        <YearStepper
          date={currentDate}
          decreaseYear={() => {
            setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()));
          }}
          prevYearButtonDisabled={false}
          nextYearButtonDisabled={false}
          increaseYear={() => {
            setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()));
          }}
          changeYear={(year) => {
            setCurrentDate(new Date(year, currentDate.getMonth(), currentDate.getDate()));
          }}
        />
        <WeekArea>
          {weekArray.map((each) => (
            <EachWeekArea
              key={`W` + each.substring(4, 6)}
              className={rangeCheckDom(each)}
              onClick={() => (rangeCheckDom(each).indexOf('week-disabled') === -1 ? handleWeekClick(each) : {})}
            >
              <div className='each-day'>{`W` + each.substring(4, 6)}</div>
            </EachWeekArea>
          ))}
        </WeekArea>
      </WeekContainer>
    </Container>
  );
};

export default WeekDatepicker;
