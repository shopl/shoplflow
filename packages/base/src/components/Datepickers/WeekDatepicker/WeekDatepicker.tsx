import { useMemo, useState } from 'react';

import { WeekArea, WeekContainer, EachWeekArea, EachWeekDate } from './WeekDatepicker.styled';
import type { WeekDatepickerProps } from './WeekDatepicker.types';
import YearStepper from '../stepper/YearStepper';
import { getEndOfISOWeek, getStartOfISOWeek, getWeeksInYear } from '../helpers';
import { differenceInCalendarISOWeeks, getISOWeek, getISOWeekYear } from 'date-fns';

const WeekDatepicker = ({
  handleWeekClick,
  initStartDate,
  initEndDate,
  minDate,
  maxDate,
  onlySingleWeek,
}: WeekDatepickerProps) => {
  const year = initStartDate?.getFullYear() || new Date().getFullYear();
  const [currentDate, setCurrentDate] = useState(new Date(year, 5, 5));

  /**
   * [주, 년도]
   */
  const [selectedStartWeekAndYear, setSelectedStartWeekAndYear] = useState(
    initStartDate ? [getISOWeek(initStartDate || new Date()), getISOWeekYear(initStartDate || new Date())] : null,
  );

  /**
   * [주, 년도]
   */
  const [selectedEndWeekAndYear, setSelectedEndWeekAndYear] = useState(
    initEndDate ? [getISOWeek(initEndDate || new Date()), getISOWeekYear(initEndDate || new Date())] : null,
  );

  const selectedYear = currentDate.getFullYear();

  const Years = useMemo(() => {
    return Array.from({ length: getWeeksInYear(selectedYear) }).map((_, index) => {
      return String(index + 1).padStart(2, '0');
    });
  }, [selectedYear]);

  const clickWeek = (week: number, year: number) => {
    // onlySingleWeek or 시작일 선택 or 시작 + 마지막 주이 이미 선택되어 있을 경우
    if (onlySingleWeek || !selectedStartWeekAndYear || (selectedStartWeekAndYear && selectedEndWeekAndYear)) {
      setSelectedStartWeekAndYear([week, year]);
      setSelectedEndWeekAndYear(null);
      handleWeekClick({
        startYear: year,
        startWeek: week,
        startDate: getStartOfISOWeek(week, year),
        endYear: year,
        endWeek: week,
        endDate: getEndOfISOWeek(week, year),
        selectedWeeksRange: 1,
      });
      return;
    }

    // 날짜가 하나만 선택
    if (selectedStartWeekAndYear && !selectedEndWeekAndYear) {
      const [selectedWeek, selectedYear] = selectedStartWeekAndYear;

      // 선택된 년도가 이전 or 년도 동일 주가 이전
      if (selectedYear > year || (selectedYear === year && selectedWeek > week)) {
        const startDate = getStartOfISOWeek(week, year);
        const endDate = getEndOfISOWeek(selectedWeek, selectedYear);

        setSelectedStartWeekAndYear([week, year]);
        setSelectedEndWeekAndYear([selectedWeek, selectedYear]);
        handleWeekClick({
          startYear: year,
          startWeek: week,
          startDate: startDate,
          endYear: selectedYear,
          endWeek: selectedWeek,
          endDate: endDate,
          // 현재 주까지 포함
          selectedWeeksRange: differenceInCalendarISOWeeks(endDate, startDate) + 1,
        });
        return;
      }

      if (selectedWeek !== week || selectedYear !== year) {
        setSelectedEndWeekAndYear([week, year]);
      }

      const startDate = getStartOfISOWeek(selectedWeek, selectedYear);
      const endDate = getEndOfISOWeek(week, year);
      handleWeekClick({
        startYear: selectedYear,
        startWeek: selectedWeek,
        startDate: startDate,
        endYear: year,
        endWeek: week,
        endDate: endDate,
        // 현재 주까지 포함
        selectedWeeksRange: differenceInCalendarISOWeeks(endDate, startDate) + 1,
      });
    }
  };

  return (
    <WeekContainer>
      <YearStepper
        date={currentDate}
        decreaseYear={() => {
          setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()));
        }}
        minDate={minDate}
        maxDate={maxDate}
        prevYearButtonDisabled={minDate ? minDate.getFullYear() === currentDate.getFullYear() : false}
        nextYearButtonDisabled={maxDate ? maxDate.getFullYear() === currentDate.getFullYear() : false}
        increaseYear={() => {
          setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()));
        }}
        changeYear={(year) => {
          setCurrentDate(new Date(year, currentDate.getMonth(), currentDate.getDate()));
        }}
      />

      {/* 주차 그리드 */}
      <WeekArea>
        {Years.map((each, index) => {
          const currentYear = currentDate.getFullYear();
          const currentWeek = Number(each);

          const isStart =
            currentYear === selectedStartWeekAndYear?.[1] && currentWeek === selectedStartWeekAndYear?.[0];
          const isEnd = selectedEndWeekAndYear?.[1] === currentYear && selectedEndWeekAndYear?.[0] === currentWeek;
          const isReady = isStart && Boolean(selectedEndWeekAndYear);
          let inRange = false;

          let disabled = false;

          // 최소 날짜가 있는 경우
          if (minDate) {
            const minWeek = getISOWeek(minDate);
            const minYear = getISOWeekYear(minDate);

            // 최소 년도보다 현재 년도가 작음
            if (currentYear < minYear) {
              disabled = true;
            }

            // 최소년도와 현재년도가 같고, 주차가 작거나 같음
            if (currentYear === minYear) {
              if (currentWeek <= minWeek) {
                disabled = true;
              }
            }
          }

          // 최대 날짜가 있는 경우
          if (maxDate) {
            const maxWeek = getISOWeek(maxDate);
            const maxYear = getISOWeekYear(maxDate);

            // 최대년도보다 현재 년도가 큼
            if (currentYear > maxYear) {
              disabled = true;
            }

            // 최대년도와 현재년도가 같고, 주차가 크거나 같음
            if (currentYear === maxYear) {
              if (currentWeek >= maxWeek) {
                disabled = true;
              }
            }
          }

          // 시작일 + 마지막일이 선택된 경우
          if (selectedStartWeekAndYear && selectedEndWeekAndYear) {
            const [startWeek, startYear] = selectedStartWeekAndYear;
            const [endWeek, endYear] = selectedEndWeekAndYear;
            // 시작년  마지막년도 사이의 해당 년도가 존재하는 경우
            if (currentYear > startYear && currentYear < endYear) {
              inRange = true;
            }

            // 시작년도, 마지막년도, 현재 년도가 같은 경우
            if (currentYear === startYear && currentYear === endYear) {
              // 현재 주 => 시작 주, 마지막 주 사이에 존재
              if (currentWeek >= startWeek && currentWeek <= endWeek) {
                inRange = true;
              }
            }

            // 시작년도, 현재년도 같음 + 시작주 <= 현재 주
            if (currentYear === startYear && currentYear !== endYear) {
              if (currentWeek >= startWeek) {
                inRange = true;
              }
            }

            // 시작년도, 마지막 년도 같음  + 마지막 주 >= 현재 주
            if (currentYear === endYear && currentYear !== startYear) {
              if (currentWeek <= endWeek) {
                inRange = true;
              }
            }
          }

          return (
            <EachWeekArea
              inRange={inRange}
              isStart={isStart}
              isReady={isReady}
              isEnd={isEnd}
              disabled={disabled}
              key={index}
              onClick={() => {
                if (disabled) {
                  return;
                }
                clickWeek(Number(each), currentDate.getFullYear());
              }}
            >
              <EachWeekDate inRange={inRange} isStart={isStart} isEnd={isEnd} disabled={disabled}>
                W{each}
              </EachWeekDate>
            </EachWeekArea>
          );
        })}
      </WeekArea>
    </WeekContainer>
  );
};

export default WeekDatepicker;
