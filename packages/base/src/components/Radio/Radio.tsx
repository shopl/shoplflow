import React from 'react';
import { StyledRadio } from './Radio.styled';
import type { RadioProps } from './Radio.types';

const Radio = ({ ...rest }: RadioProps) => {
  return (
    <StyledRadio {...rest} data-shoplflow={'Radio'}>
      Radio
    </StyledRadio>
  );
};

export default Radio;
