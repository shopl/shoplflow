import React from 'react';
import { StyledAnnualDatepicker } from './AnnualDatepicker.styled';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';

const AnnualDatepicker = ({ ...rest }: AnnualDatepickerProps) => {
  return (
    <StyledAnnualDatepicker data-shoplflow={'AnnualDatepicker'} {...rest}>
      AnnualDatepicker
    </StyledAnnualDatepicker>
  );
};

export default AnnualDatepicker;
