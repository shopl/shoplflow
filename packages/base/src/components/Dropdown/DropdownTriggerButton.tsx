import type { MouseEvent } from 'react';
import React, { forwardRef, useState } from 'react';
import type { DropdownTriggerButtonProps } from './Dropdown.types';
import { useDropdown } from './useDropdown';
import {
  StyledDropdownButtonWrapper,
  DropdownButtonIcon,
  getDropdownFontSizeBySizeVar,
  getDropdownHeightBySizeVar,
  StyledDropdownButton,
} from './Dropdown.styled';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Stack } from '../Stack';

export const DropdownTriggerButton = forwardRef<HTMLButtonElement, DropdownTriggerButtonProps>(
  ({ width = '100%', onClick, sizeVar = 'M', isError, placeholder, value, disabled, leftSource, ...rest }, ref) => {
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

    const getTextColor = ({ value, disabled }: { value?: React.ReactNode | null; disabled?: boolean }) => {
      if (disabled) {
        return 'neutral350';
      }
      if (!value) {
        return 'neutral400';
      }
      return 'neutral700';
    };

    return (
      <StyledDropdownButtonWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        isFocused={isOpen}
        isHovered={isHovered}
        disabled={disabled}
        width={width}
        isError={isError}
        sizeVar={sizeVar}
        height={getDropdownHeightBySizeVar(sizeVar)}
      >
        <StyledDropdownButton ref={ref} onClick={handleOnClick} disabled={disabled} {...rest} sizeVar={sizeVar}>
          <Stack.Horizontal width='100%' spacing={sizeVar === 'L' ? 'spacing04' : undefined} align='center'>
            {leftSource && leftSource}
            {value || (
              <Text
                typography={getDropdownFontSizeBySizeVar(sizeVar)}
                color={getTextColor({ value, disabled })}
                textOverflow={'ellipsis'}
                lineClamp={1}
              >
                {placeholder}
              </Text>
            )}
          </Stack.Horizontal>

          <DropdownButtonIcon
            sizeVar={sizeVar}
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Icon
              iconSource={DownArrowSolidXsmallIcon}
              color={sizeVar === 'L' ? 'neutral700' : 'neutral400'}
              sizeVar='XS'
            />
          </DropdownButtonIcon>
        </StyledDropdownButton>
      </StyledDropdownButtonWrapper>
    );
  },
);
