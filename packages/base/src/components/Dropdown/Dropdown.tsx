import React from 'react';
import { StyledDropdown, StyledDropdownContent } from './Dropdown.styled';
import { Popper } from '../Popper';
import type { DropdownProps } from './Dropdown.types';

const Dropdown = ({ trigger, content, ...rest }: DropdownProps) => {
  return (
    <StyledDropdown data-shoplflow={'Dropdown'}>
      <Popper trigger={trigger} popper={content} {...rest} isOpen />
    </StyledDropdown>
  );
};

const DropdownContent = ({ children }: { children: React.ReactNode }) => {
  return <StyledDropdownContent>{children}</StyledDropdownContent>;
};

Dropdown.Content = DropdownContent;

export default Dropdown;
