import {
  SmallStyledDayDatepickerWrapper,
  StyledDayDatepicker,
  StyledDayDatepickerBottomSource,
} from './DayDatepicker.styled';
import type { DayDatepickerProps } from './DayDatepicker.types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MonthStepper from '../stepper/MonthStepper';

const DayDatepicker = ({
  sizeVar,
  children,
  minDate,
  maxDate,
  calendarType,
  locale,
  fixedHeight = true,
  className,
  bottomSource,
  ...rest
}: DayDatepickerProps) => {
  const Wrapper = sizeVar === 'S' ? SmallStyledDayDatepickerWrapper : StyledDayDatepicker;
  const isSingleSelect = calendarType.type !== 'range';
  // 하단 영역은 react-datepicker children 칸에 넣어 달력 흰 배경·안쪽 여백 안에 놓는다 (칸 모양은 data-bottom-source 로 바꿈)
  const hasBottomSource = bottomSource !== undefined && bottomSource !== null && bottomSource !== false;
  const calendarChildren = hasBottomSource ? (
    <>
      {children}
      <StyledDayDatepickerBottomSource>{bottomSource}</StyledDayDatepickerBottomSource>
    </>
  ) : (
    children
  );

  /**
   * 범위 선택 캘린더
   */
  if (calendarType.type === 'range') {
    // 끝 날짜를 고르기 전 첫 선택일은 react-datepicker 가 selecting-range-start 만 붙여 색이 없다 → highlighted 로 칠한다
    const { startDate, endDate, highlightDates } = rest;
    const rangeHighlightDates = startDate && !endDate ? [...(highlightDates ?? []), startDate] : highlightDates;

    return (
      <Wrapper
        data-shoplflow={'DayDatepicker'}
        className={className}
        data-bottom-source={hasBottomSource ? '' : undefined}
      >
        <div
          className={`${'dayDatepickerArea'}${className ? ` ${className}` : ''}`}
          role='grid'
          data-selected-single={isSingleSelect}
        >
          <DatePicker
            inline
            renderCustomHeader={(props) => (
              <MonthStepper
                sizeVar={sizeVar || 'M'}
                {...props}
                minDate={minDate}
                maxDate={maxDate}
                locale={locale}
                className={className}
              />
            )}
            renderDayContents={(dayOfMonth) => {
              return <div className='each-day'>{dayOfMonth}</div>;
            }}
            className={className}
            {...rest}
            highlightDates={rangeHighlightDates}
            minDate={minDate}
            maxDate={maxDate}
            selectsRange
            selectsMultiple={undefined}
            locale={locale}
            onChange={calendarType.handleDayRangeChange}
            fixedHeight={fixedHeight}
          >
            {calendarChildren}
          </DatePicker>
        </div>
      </Wrapper>
    );
  }

  /**
   * 다중 선택 캘린더
   */
  if (calendarType.type === 'multiple') {
    return (
      <Wrapper
        data-shoplflow={'DayDatepicker'}
        className={className}
        data-bottom-source={hasBottomSource ? '' : undefined}
      >
        <div
          className={`${'dayDatepickerArea'}${className ? ` ${className}` : ''}`}
          role='grid'
          data-selected-single={isSingleSelect}
        >
          <DatePicker
            inline
            renderCustomHeader={(props) => (
              <MonthStepper
                sizeVar={sizeVar || 'M'}
                {...props}
                minDate={minDate}
                maxDate={maxDate}
                locale={locale}
                className={className}
              />
            )}
            renderDayContents={(dayOfMonth) => {
              return <div className='each-day'>{dayOfMonth}</div>;
            }}
            {...rest}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            selectsMultiple
            onChange={calendarType.handleMutlipleDaysChange}
            fixedHeight={fixedHeight}
          >
            {calendarChildren}
          </DatePicker>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-shoplflow={'DayDatepicker'} data-bottom-source={hasBottomSource ? '' : undefined}>
      <div
        className={`${'dayDatepickerArea'}${className ? ` ${className}` : ''}`}
        role='grid'
        data-selected-single={isSingleSelect}
      >
        <DatePicker
          inline
          renderCustomHeader={(props) => (
            <MonthStepper
              sizeVar={sizeVar || 'M'}
              {...props}
              minDate={minDate}
              maxDate={maxDate}
              locale={locale}
              className={className}
            />
          )}
          renderDayContents={(dayOfMonth) => {
            return <div className='each-day'>{dayOfMonth}</div>;
          }}
          {...rest}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          onChange={calendarType.handleDayChange}
          fixedHeight={fixedHeight}
        >
          {calendarChildren}
        </DatePicker>
      </div>
    </Wrapper>
  );
};

export default DayDatepicker;
