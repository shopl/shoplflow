import React from 'react';
import { StyledMenu } from './Menu.styled';
import type { MenuProps } from './Menu.types';

const Menu = ({ ...rest }: MenuProps) => {
  return (
    <StyledMenu {...rest} data-shoplflow={'Menu'}>
      Menu
    </StyledMenu>
  );
};

export default Menu;
