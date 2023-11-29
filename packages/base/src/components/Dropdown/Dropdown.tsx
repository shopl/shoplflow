import React, { useEffect, useState } from 'react';
import { StyledDropdown } from './Dropdown.styled';
import { Popper } from '../Popper';
import type { DropdownProps } from './Dropdown.types';
import { DropdownContext } from './useDropdown';
import { DropdownButton } from './DropdownButton';
import { DropdownContent } from './DropdownContent';

const Dropdown = ({ isOpen: initialIsOpen = false, trigger, popper, option = 'OUTSIDE_CLICK' }: DropdownProps) => {
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (triggerRef) {
      setSize({
        width: triggerRef.offsetWidth,
        height: triggerRef.offsetHeight,
      });
    }
  }, [triggerRef]);

  useEffect(() => {
    if (initialIsOpen === undefined) {
      return;
    }
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  return (
    <StyledDropdown data-shoplflow={'Dropdown'}>
      <DropdownContext.Provider value={{ ...size, isOpen, setIsOpen, option }}>
        <Popper
          autoPlacement={{
            allowedPlacements: ['bottom-start', 'top-start'],
          }}
        >
          <Popper.Trigger ref={setTriggerRef} isOpen={isOpen}>
            {trigger}
          </Popper.Trigger>
          <Popper.Portal>{popper}</Popper.Portal>
        </Popper>
      </DropdownContext.Provider>
    </StyledDropdown>
  );
};

Dropdown.Button = DropdownButton;

Dropdown.Content = DropdownContent;

export default Dropdown;
