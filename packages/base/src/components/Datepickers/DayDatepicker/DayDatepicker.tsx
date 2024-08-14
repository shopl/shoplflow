import { SmallStyledDayDatepickerWrapper, StyledDayDatepicker } from './DayDatepicker.styled';
import type { DayDatepickerProps } from './DayDatepicker.types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MonthStepper from '../stepper/MonthStepper';

const DayDatepicker = ({ sizeVar, children, calendarType, ...rest }: DayDatepickerProps) => {
  const Wrapper = sizeVar === 'S' ? SmallStyledDayDatepickerWrapper : StyledDayDatepicker;

  /**
   * 범위 선택 캘린더
   */
  if (calendarType.type === 'range') {
    return (
      <Wrapper data-shoplflow={'DayDatepicker'}>
        <div className='dayDatepickerArea'>
          <DatePicker
            inline
            renderCustomHeader={(props) => <MonthStepper {...props} />}
            renderDayContents={(dayOfMonth) => {
              return <div className='each-day'>{dayOfMonth}</div>;
            }}
            {...rest}
            selectsRange
            selectsMultiple={undefined}
            onChange={calendarType.handleDayRangeChange}
          >
            {children}
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
      <Wrapper data-shoplflow={'DayDatepicker'}>
        <div className='dayDatepickerArea'>
          <DatePicker
            inline
            renderCustomHeader={(props) => <MonthStepper {...props} />}
            renderDayContents={(dayOfMonth) => {
              return <div className='each-day'>{dayOfMonth}</div>;
            }}
            {...rest}
            selectsMultiple
            onChange={calendarType.handleMutlipleDaysChange}
          >
            {children}
          </DatePicker>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-shoplflow={'DayDatepicker'}>
      <div className='dayDatepickerArea'>
        <DatePicker
          inline
          renderCustomHeader={(props) => <MonthStepper {...props} />}
          renderDayContents={(dayOfMonth) => {
            return <div className='each-day'>{dayOfMonth}</div>;
          }}
          {...rest}
          onChange={calendarType.handleDayChange}
        >
          {children}
        </DatePicker>
      </div>
    </Wrapper>
  );
};

export default DayDatepicker;
