import type { MouseEvent } from 'react';
import React, { cloneElement, forwardRef, useState } from 'react';
import type { DropdownTriggerButtonProps } from './Dropdown.types';
import { useDropdown } from './useDropdown';
import {
  StyledDropdownButtonWrapper,
  DropdownButtonIcon,
  getDropdownFontSizeBySizeVar,
  getDropdownHeightBySizeVar,
  StyledDropdownButton,
} from './DropdownTriggerButton.styled';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { DeleteIcon, DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Stack } from '../Stack';
import { StackContainer } from '../StackContainer';
import { motion } from 'framer-motion';
import { IconButton } from '../Buttons';

export const DropdownTriggerButton = forwardRef<HTMLButtonElement, DropdownTriggerButtonProps>(
  (
    {
      width = '100%',
      onClick,
      sizeVar = 'M',
      isError,
      placeholder,
      value,
      disabled,
      leftSource,
      rightSource,
      onClear,
      ...rest
    },
    ref,
  ) => {
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

    const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClear && onClear();
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

    const LeftSourceClone = leftSource ? cloneElement(leftSource, { ...leftSource.props, disabled }) : leftSource;
    const RightSourceClone = rightSource ? cloneElement(rightSource, { ...rightSource.props, disabled }) : rightSource;

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
        hasValue={Boolean(value)}
      >
        <StyledDropdownButton
          ref={ref}
          onClick={handleOnClick}
          disabled={disabled}
          {...rest}
          sizeVar={sizeVar}
          data-shoplflow={'Dropdown-Content-Area'}
        >
          <Stack.Horizontal width='100%' spacing='spacing04' align='center'>
            {LeftSourceClone && LeftSourceClone}
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

          {onClear && sizeVar !== 'L' && (
            <IconButton sizeVar='S' styleVar='GHOST' onClick={handleOnClear} className='dropdown-clear-icon'>
              <Icon iconSource={DeleteIcon} color='neutral350' sizeVar='S' />
            </IconButton>
          )}
        </StyledDropdownButton>

        {RightSourceClone && <StackContainer padding='0 6px 0 0'>{RightSourceClone}</StackContainer>}

        <DropdownButtonIcon sizeVar={sizeVar} data-shoplflow={'Dropdown-Button-Icon-Area'}>
          <motion.div
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
          </motion.div>
        </DropdownButtonIcon>
      </StyledDropdownButtonWrapper>
    );
  },
);
