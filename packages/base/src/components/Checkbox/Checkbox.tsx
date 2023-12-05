import React from 'react';
import { StyledCheckbox } from './Checkbox.styled';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ ...rest }: CheckboxProps) => {
  return (
    <StyledCheckbox {...rest} data-shoplflow={'Checkbox'}>
      Checkbox
    </StyledCheckbox>
  );
};

export default Checkbox;
