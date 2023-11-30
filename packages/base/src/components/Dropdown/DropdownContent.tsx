import type { MouseEvent } from 'react';
import React from 'react';
import { useDropdown } from './useDropdown';
import { noop, OutSideClick } from '@shoplflow/utils';
import { StyledDropdownContent } from './Dropdown.styled';
import type { DropdownContentProps } from './Dropdown.types';

export const DropdownContent = ({ children, width: initialWidth, type, onClick, ...rest }: DropdownContentProps) => {
  const { width, setIsOpen, option } = useDropdown();

  const isFillType = type === 'FILL';
  const contentWidth = isFillType ? `${width}px` : initialWidth;

  const returnCallbackByOption = () => {
    if (option === 'OUTSIDE_CLICK') {
      return () => setIsOpen(false);
    }
    if (option === 'CLICK') {
      return () => setIsOpen(false);
    }
    return noop;
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e);
    if (option === 'CLICK') {
      setIsOpen(false);
    }
  };

  return (
    <OutSideClick outsideClick={returnCallbackByOption()}>
      <StyledDropdownContent width={contentWidth} onClick={handleClick} {...rest}>
        {children}
      </StyledDropdownContent>
    </OutSideClick>
  );
};
