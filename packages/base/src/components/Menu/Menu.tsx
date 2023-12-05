import type { MouseEvent } from 'react';
import React from 'react';
import { StyledMenu } from './Menu.styled';
import type { MenuProps } from './Menu.types';
import { Stack } from '../Stack';
import { useOnToggle } from '../../hooks/useOnToggle';

const Menu = ({
  leftSource,
  rightSource,
  children,
  isSelected,
  defaultSelected = false,
  onClick,
  disabled = false,
  ...rest
}: MenuProps) => {
  const [selected, handleToggle] = useOnToggle(isSelected, defaultSelected);

  const LeftSourceClone = leftSource
    ? React.cloneElement(leftSource, {
        ...rest,
        isSelected,
      })
    : leftSource;

  const handleOnClick = (e: MouseEvent<HTMLLIElement>) => {
    !disabled && handleToggle();
    !disabled && onClick && onClick(e);
  };

  return (
    <StyledMenu isSelected={selected} leftSource={leftSource} onClick={handleOnClick} {...rest} data-shoplflow={'Menu'}>
      {leftSource && LeftSourceClone}
      <Stack.Horizontal width={'100%'} align={'center'} className={'body1_400'}>
        {children}
      </Stack.Horizontal>
      {rightSource && rightSource}
    </StyledMenu>
  );
};

export default Menu;
