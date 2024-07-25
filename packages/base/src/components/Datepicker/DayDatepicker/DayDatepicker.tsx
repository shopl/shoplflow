import React from 'react';
import { StyledDayDatepicker } from './DayDatepicker.styled';
import type { DayDatepickerProps } from './DayDatepicker.types';

const DayDatepicker = ({ ...rest }: DayDatepickerProps) => {
  return (
    <StyledDayDatepicker data-shoplflow={'DayDatepicker'} {...rest}>
      DayDatepicker
    </StyledDayDatepicker>
  );
};

export default DayDatepicker;
