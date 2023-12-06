import React from 'react';
import { Container, StyledRadio } from './Radio.styled';
import type { RadioProps } from './Radio.types';

const Radio = ({ ...rest }: RadioProps) => {
  return (
    <Container data-shoplflow={'Radio'} {...rest}>
      <StyledRadio>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='5.5' fill='white' stroke='#3299FE' strokeWidth='5' />
        </svg>
      </StyledRadio>
    </Container>
  );
};

export default Radio;
