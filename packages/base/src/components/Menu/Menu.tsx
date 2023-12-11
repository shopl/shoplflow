import type { MouseEvent } from 'react';
import React from 'react';
import { getFontStylesBySizeVar, StyledMenu } from './Menu.styled';
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
  sizeVar = 'M',
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
    <StyledMenu
      sizeVar={sizeVar}
      isSelected={selected}
      leftSource={leftSource}
      onClick={handleOnClick}
      {...rest}
      data-shoplflow={'Menu'}
    >
      {leftSource && LeftSourceClone}
      <Stack.Horizontal width={'100%'} height={'100%'} align={'center'} className={getFontStylesBySizeVar(sizeVar)}>
        {children}
      </Stack.Horizontal>
      {rightSource && rightSource}
    </StyledMenu>
  );
};

export default Menu;
