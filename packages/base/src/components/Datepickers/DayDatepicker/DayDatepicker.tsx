import React from 'react';
import { StyledDayDatepicker } from './DayDatepicker.styled';
import type { DayDatepickerProps } from './DayDatepicker.types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import DayDatepickerHeader from './DayDatepickerHeader';

const DayDatepicker = ({ modalHeight, height, isInitSelectedStyle, ...rest }: DayDatepickerProps) => {
  return (
    <StyledDayDatepicker
      modalHeight={modalHeight}
      height={height}
      isInitSelectedStyle={isInitSelectedStyle}
      data-shoplflow={'DayDatepicker'}
    >
      <div className='dayDatepickerArea'>
        <DatePicker
          inline
          renderCustomHeader={(props) => <DayDatepickerHeader {...props} />}
          renderDayContents={(dayOfMonth) => {
            return <div className='each-day'>{dayOfMonth}</div>;
          }}
          {...rest}
        />
      </div>
    </StyledDayDatepicker>
  );
};

export default DayDatepicker;
