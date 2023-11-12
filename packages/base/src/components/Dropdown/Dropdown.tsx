import React from 'react';
import { StyledDropdown } from './Dropdown.styled';
import { Popper } from '../Popper';
import type { DropdownProps } from './Dropdown.types';

const Dropdown = ({ trigger, content, ...rest }: DropdownProps) => {
  return (
    <StyledDropdown data-shoplflow={'Dropdown'}>
      <Popper trigger={trigger} popper={content} {...rest} autoPlacement />
    </StyledDropdown>
  );
};

export default Dropdown;
