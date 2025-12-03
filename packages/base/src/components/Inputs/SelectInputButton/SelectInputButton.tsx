import React, { type MouseEvent, useState } from 'react';
import { StyledSelectInputButton } from './SelectInputButton.styled';
import type { SelectInputButtonProps } from './SelectInputButton.types';
import { IconButton } from '../../Buttons';
import { Icon } from '../../Icon';
import { assetFunction } from '../../../styles/IconAssets';
import { Stack } from '../../Stack';
import { InputWrapper } from '../common/input.styled';
import { Text } from '../../Text';

const SelectInputButton = ({
  disabled,
  isSelected,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onClear,
  value,
  placeholder,
  label,
  width = '100%',
  rightSource,
  sizeVar = 'M',
  ...rest
}: SelectInputButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = (e: MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onClick && onClick(e);
    }
  };

  const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onClear && onClear(e);
    }
  };
  const handleOnMouseEnter = (e: MouseEvent<HTMLLabelElement>) => {
    setIsHovered(true);
    onMouseEnter && onMouseEnter(e);
  };
  const handleOnMouseLeave = (e: MouseEvent<HTMLLabelElement>) => {
    setIsHovered(false);
    onMouseLeave && onMouseLeave(e);
  };

  const getTextColor = (disabled) => {
    return disabled ? 'neutral350' : 'neutral700';
  };

  return (
    <InputWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      isHovered={isHovered}
      isFocused={isSelected}
      disabled={disabled}
      width={width}
      height={sizeVar === 'M' ? '40px' : '32px'}
      {...rest}
      data-shoplflow={'SelectInputButton'}
    >
      <StyledSelectInputButton sizeVar={sizeVar} disabled={disabled}>
        {value && value.length > 0 && label ? (
          <Text typography={'body1_400'} lineClamp={1} color={getTextColor(disabled)}>
            {value[0][label] as string}
          </Text>
        ) : (
          <Text typography={'body1_400'} lineClamp={1} color={'neutral350'}>
            {placeholder}
          </Text>
        )}

        <Stack.Horizontal align={'center'} spacing={'spacing04'}>
          {value && value.length > 1 && (
            <Text typography={'body1_400'} color={getTextColor(disabled)}>
              +{value.length - 1}
            </Text>
          )}
          <Stack.Horizontal align={'center'}>
            {value && value.length > 0 && Boolean(onClear) && (
              <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'} disabled={disabled}>
                <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral350'} />
              </IconButton>
            )}
            {rightSource}
          </Stack.Horizontal>
        </Stack.Horizontal>
      </StyledSelectInputButton>
    </InputWrapper>
  );
};

export default SelectInputButton;
