import React from 'react';
import { StyledMonthDatepicker } from './MonthDatepicker.styled';
import type { MonthDatepickerProps } from './MonthDatepicker.types';

const MonthDatepicker = ({ ...rest }: MonthDatepickerProps) => {
  return (
    <StyledMonthDatepicker data-shoplflow={'MonthDatepicker'} {...rest}>
      MonthDatepicker
    </StyledMonthDatepicker>
  );
};

export default MonthDatepicker;
