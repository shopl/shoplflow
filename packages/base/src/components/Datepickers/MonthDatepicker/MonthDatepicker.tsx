import React, { useMemo, useState } from 'react';
import { EachMonthArea, EachMonthDate, MonthArea, MonthContainer } from './MonthDatepicker.styled';
import type { MonthDatepickerProps } from './MonthDatepicker.types';
import YearStepper from '../stepper/YearStepper';
import { differenceInCalendarMonths, endOfMonth, startOfMonth } from 'date-fns';

const MonthDatepicker = ({
  handleMonthClick,
  initStartDate,
  initEndDate,
  minDate,
  maxDate,
  onlySingleMonth,
}: MonthDatepickerProps) => {
  // 연차 이동에 기준이 되는 날짜
  const [currentDate, setCurrentDate] = useState(initStartDate || new Date());

  /**
   * [월, 년도]
   */
  const [selectedStartMonthAndYear, setSelectedStartMonthAndYear] = useState(
    initStartDate ? [initStartDate.getMonth(), initStartDate.getFullYear()] : null,
  );

  /**
   * [월, 년도]
   */
  const [selectedEndMonthAndYear, setSelectedEndMonthAndYear] = useState(
    initEndDate ? [initEndDate.getMonth(), initEndDate.getFullYear()] : null,
  );

  const Months = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => index + 1);
  }, []);

  const clickMonth = (month: number, year: number) => {
    // 단일 월 선택일 경우
    if (onlySingleMonth) {
      setSelectedStartMonthAndYear([month, year]);
      handleMonthClick({
        startDate: startOfMonth(new Date(year, month - 1)),
        endDate: endOfMonth(new Date(year, month - 1)),
        selectedMonthRange: 1,
      });
      return;
    }

    // 시작일 선택 or 시작 + 마지막 월이 이미 선택되어 있을 경우
    if (!selectedStartMonthAndYear || (selectedStartMonthAndYear && selectedEndMonthAndYear)) {
      const startDate = startOfMonth(new Date(year, month - 1));
      const endDate = endOfMonth(new Date(year, month - 1));

      setSelectedStartMonthAndYear([month, year]);
      setSelectedEndMonthAndYear(null);
      handleMonthClick({
        startDate,
        endDate,
        // 현재 달 까지 포함
        selectedMonthRange: differenceInCalendarMonths(endDate, startDate) + 1,
      });
      return;
    }

    // 날짜가 하나만 선택
    if (selectedStartMonthAndYear && !selectedEndMonthAndYear) {
      // 년도가 이전 or 년도 동일 + 달이 이전
      const [selectedMonth, selectedYear] = selectedStartMonthAndYear;
      if (selectedYear > year || (selectedYear === year && selectedMonth > month)) {
        const startDate = startOfMonth(new Date(year, month - 1));
        const endDate = endOfMonth(new Date(selectedYear, selectedMonth - 1));

        setSelectedStartMonthAndYear([month, year]);
        setSelectedEndMonthAndYear([selectedMonth, selectedYear]);
        handleMonthClick({
          startDate,
          endDate,
          // 현재 달 까지 포함
          selectedMonthRange: differenceInCalendarMonths(endDate, startDate) + 1,
        });
        return;
      }

      if (selectedMonth !== month || selectedYear !== year) {
        setSelectedEndMonthAndYear([month, year]);
      }
      const startDate = startOfMonth(new Date(selectedYear, selectedMonth - 1));
      const endDate = endOfMonth(new Date(year, month - 1));

      handleMonthClick({
        startDate,
        endDate,
        // 현재 달까지 포함
        selectedMonthRange: differenceInCalendarMonths(endDate, startDate) + 1,
      });
    }
  };

  return (
    <MonthContainer data-shoplflow={'MonthDatepicker'}>
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
      <MonthArea>
        {Months.map((month) => {
          const currentYear = currentDate.getFullYear();

          const isStart = currentYear === selectedStartMonthAndYear?.[1] && month === selectedStartMonthAndYear?.[0];
          const isEnd = selectedEndMonthAndYear?.[1] === currentYear && selectedEndMonthAndYear?.[0] === month;
          const isReady = isStart && Boolean(selectedEndMonthAndYear);
          let inRange = false;

          let disabled = false;

          if (minDate) {
            const minMonth = minDate.getMonth() + 1;
            const minYear = minDate.getFullYear();

            // 최소 년도보다 현재 년도가 작음
            if (currentYear < minYear) {
              disabled = true;
            }

            // 최소년도와 현재년도가 같고, 월이 작거나 같음
            if (currentYear === minYear) {
              if (month <= minMonth) {
                disabled = true;
              }
            }
          }

          if (maxDate) {
            const maxMonth = maxDate.getMonth() + 1;
            const maxYear = maxDate.getFullYear();

            // 최대년도보다 현재 년도가 큼
            if (currentYear > maxYear) {
              disabled = true;
            }

            // 최대년도와 현재년도가 같고, 월이 크거나 같음
            if (currentYear === maxYear) {
              if (month >= maxMonth) {
                disabled = true;
              }
            }
          }

          // 시작일 + 마지막일이 선택된 경우
          if (selectedStartMonthAndYear && selectedEndMonthAndYear) {
            const [startMonth, startYear] = selectedStartMonthAndYear;
            const [endMonth, endYear] = selectedEndMonthAndYear;
            // 시작년  마지막년도 사이의 해당 년도가 존재하는 경우
            if (currentYear > startYear && currentYear < endYear) {
              inRange = true;
            }

            // 시작년도, 마지막년도, 현재 년도가 같은 경우
            if (currentYear === startYear && currentYear === endYear) {
              // 현재 월 => 시작 월, 마지막 월 사이에 존재
              if (month >= startMonth && month <= endMonth) {
                inRange = true;
              }
            }

            // 시작년도, 현재년도 같음 + 시작월 <= 현재 월
            if (currentYear === startYear && currentYear !== endYear) {
              if (month >= startMonth) {
                inRange = true;
              }
            }

            // 시작년도, 마지막 년도 같음  + 마지막 월 >= 현재 월
            if (currentYear === endYear && currentYear !== startYear) {
              if (month <= endMonth) {
                inRange = true;
              }
            }
          }

          return (
            <EachMonthArea
              inRange={inRange}
              isStart={isStart}
              isReady={isReady}
              isEnd={isEnd}
              disabled={disabled}
              key={month}
              onClick={() => {
                if (disabled) {
                  return;
                }

                clickMonth(month, currentDate.getFullYear());
              }}
            >
              <EachMonthDate inRange={inRange} isStart={isStart} isEnd={isEnd} disabled={disabled}>
                {month}
              </EachMonthDate>
            </EachMonthArea>
          );
        })}
      </MonthArea>
    </MonthContainer>
  );
};

export default MonthDatepicker;
