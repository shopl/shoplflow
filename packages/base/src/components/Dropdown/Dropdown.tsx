import type { MouseEvent } from 'react';
import React, { forwardRef, useEffect, useState } from 'react';
import {
  DropdownButtonIcon,
  getDropdownFontSizeBySizeVar,
  getDropdownHeightBySizeVar,
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownContent,
} from './Dropdown.styled';
import { Popper } from '../Popper';
import type { DropdownProps, DropdownContentProps, DropdownButtonProps } from './Dropdown.types';
import { DropdownContext, useDropdown } from './useDropdown';
import { InputWrapper } from '../Inputs/common/input.styled';
import { Icon } from '../Icon';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Text } from '../Text';

const Dropdown = ({ isOpen: initialIsOpen, trigger, content }: DropdownProps) => {
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
      <DropdownContext.Provider value={{ ...size, isOpen, setIsOpen }}>
        <Popper
          autoPlacement={{
            allowedPlacements: ['bottom-start', 'top-start'],
          }}
        >
          <Popper.Trigger ref={setTriggerRef} isOpen={isOpen}>
            {trigger}
          </Popper.Trigger>
          <Popper.Portal>{content}</Popper.Portal>
        </Popper>
      </DropdownContext.Provider>
    </StyledDropdown>
  );
};

export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ width, onClick, sizeVar = 'M', placeholder, value, disabled, leftSource, ...rest }, ref) => {
    const { isOpen, setIsOpen } = useDropdown();

    const [isHovered, setIsHovered] = useState(false);

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick && onClick(e);
        setIsOpen(!isOpen);
      }
    };

    const handleOnMouseEnter = () => {
      setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <InputWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        isFocused={isOpen}
        isHovered={isHovered}
        disabled={disabled}
        width={width}
        height={getDropdownHeightBySizeVar(sizeVar)}
      >
        <StyledDropdownButton ref={ref} onClick={handleOnClick} disabled={disabled} {...rest}>
          {leftSource && leftSource}
          {value ? (
            <Text
              typography={getDropdownFontSizeBySizeVar(sizeVar)}
              color={'neutral700'}
              textOverflow={'ellipsis'}
              lineClamp={1}
            >
              {value}
            </Text>
          ) : (
            <Text
              typography={getDropdownFontSizeBySizeVar(sizeVar)}
              color={'neutral400'}
              textOverflow={'ellipsis'}
              lineClamp={1}
            >
              {placeholder}
            </Text>
          )}
          <DropdownButtonIcon
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Icon iconSource={DownArrowSolidXsmallIcon} color={'neutral400'} />
          </DropdownButtonIcon>
        </StyledDropdownButton>
      </InputWrapper>
    );
  },
);

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, width: initialWidth, type = 'FIXED' }, ref) => {
    const { width } = useDropdown();
    const isFillType = type === 'FILL';
    const contentWidth = isFillType ? `${width}px` : initialWidth;

    return (
      <StyledDropdownContent ref={ref} width={contentWidth}>
        {children}
      </StyledDropdownContent>
    );
  },
);

Dropdown.Button = DropdownButton;

Dropdown.Content = DropdownContent;

export default Dropdown;
