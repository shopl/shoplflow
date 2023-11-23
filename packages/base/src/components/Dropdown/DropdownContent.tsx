import type { MouseEvent } from 'react';
import React, { forwardRef } from 'react';
import type { DropdownContentProps } from './Dropdown.types';
import { useDropdown } from './useDropdown';
import { noop, OutSideClick } from '@shoplflow/utils';
import { StyledDropdownContent } from './Dropdown.styled';

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, width: initialWidth, onClick, type = 'FIXED' }, ref) => {
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
        <StyledDropdownContent ref={ref} width={contentWidth} onClick={handleClick}>
          {children}
        </StyledDropdownContent>
      </OutSideClick>
    );
  },
);
