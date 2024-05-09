import type { MouseEvent } from 'react';
import React, { forwardRef, useState } from 'react';
import type { DropdownButtonProps } from './Dropdown.types';
import { useDropdown } from './useDropdown';
import { InputWrapper } from '../Inputs/common/input.styled';
import {
  DropdownButtonIcon,
  getDropdownFontSizeBySizeVar,
  getDropdownHeightBySizeVar,
  StyledDropdownButton,
} from './Dropdown.styled';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';

export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
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

    return (
      <InputWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        isFocused={isOpen}
        isHovered={isHovered}
        disabled={disabled}
        width={width}
        isError={isError}
        height={getDropdownHeightBySizeVar(sizeVar)}
      >
        <StyledDropdownButton ref={ref} onClick={handleOnClick} disabled={disabled} {...rest} sizeVar={sizeVar}>
          {leftSource && leftSource}
          <Text
            typography={getDropdownFontSizeBySizeVar(sizeVar)}
            color={value ? 'neutral700' : 'neutral400'}
            textOverflow={'ellipsis'}
            lineClamp={1}
          >
            {value || placeholder}
          </Text>
          <DropdownButtonIcon
            sizeVar={sizeVar}
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Icon iconSource={DownArrowSolidXsmallIcon} color={'neutral400'} sizeVar='XS' />
          </DropdownButtonIcon>
        </StyledDropdownButton>
      </InputWrapper>
    );
  },
);
