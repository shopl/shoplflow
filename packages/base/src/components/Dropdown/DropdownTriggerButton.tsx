import type { MouseEvent } from 'react';
import { cloneElement, forwardRef, useState } from 'react';
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
      styleVar = 'NORMAL',
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

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
      if (!disabled) {
        onClick?.(e);
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

    const getTextColor = () => {
      if (disabled) return 'neutral350';
      if (!value) return 'neutral400';
      return 'neutral700';
    };

    const getChevronColor = () => {
      if (styleVar === 'GHOST') return disabled ? 'neutral350' : 'neutral600';
      if (sizeVar === 'L') return 'neutral700';
      return 'neutral350';
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
        styleVar={styleVar}
        height={getDropdownHeightBySizeVar(sizeVar)}
        hasValue={Boolean(value)}
        onClick={handleOnClick}
      >
        <StyledDropdownButton
          ref={ref}
          disabled={disabled}
          {...rest}
          sizeVar={sizeVar}
          styleVar={styleVar}
          data-shoplflow={'Dropdown-Content-Area'}
        >
          <Stack.Horizontal width='100%' spacing='spacing04' align='center'>
            {LeftSourceClone && LeftSourceClone}
            {value || (
              <Text
                typography={getDropdownFontSizeBySizeVar(sizeVar)}
                color={getTextColor()}
                textOverflow={'ellipsis'}
                lineClamp={1}
              >
                {placeholder}
              </Text>
            )}
          </Stack.Horizontal>

          {onClear && sizeVar !== 'L' && sizeVar !== 'XS' && (
            <IconButton sizeVar={sizeVar} styleVar='GHOST' onClick={handleOnClear} className='dropdown-clear-icon'>
              <Icon iconSource={DeleteIcon} color='neutral350' sizeVar='S' />
            </IconButton>
          )}
        </StyledDropdownButton>

        {RightSourceClone && <StackContainer padding='0 6px 0 0'>{RightSourceClone}</StackContainer>}

        <DropdownButtonIcon sizeVar={sizeVar} styleVar={styleVar} data-shoplflow={'Dropdown-Button-Icon-Area'}>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          >
            <Icon iconSource={DownArrowSolidXsmallIcon} color={getChevronColor()} sizeVar='XS' />
          </motion.div>
        </DropdownButtonIcon>
      </StyledDropdownButtonWrapper>
    );
  },
);
