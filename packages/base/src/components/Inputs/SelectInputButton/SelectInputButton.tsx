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
  width,
  rightSource,
  ...rest
}: SelectInputButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = (e: MouseEvent<HTMLLabelElement>) => {
    if (!disabled) {
      onClick && onClick(e);
    }
  };

  const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
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
  return (
    <InputWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      isHovered={isHovered}
      isFocused={isSelected}
      disabled={disabled}
      width={width}
      {...rest}
      data-shoplflow={'SelectInputButton'}
    >
      <StyledSelectInputButton>
        {value && value.length > 0 && label ? (
          <Text typography={'body1_400'}>{value[0][label] as string}</Text>
        ) : (
          <Text typography={'body1_400'} color={'neutral350'}>
            {placeholder}
          </Text>
        )}

        <Stack.Horizontal align={'center'}>
          {value && value.length > 1 && (
            <Text typography={'body1_400'} color={'neutral700'}>
              +{value.length - 1}
            </Text>
          )}
          {value && (
            <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'} disabled={disabled}>
              <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral350'} />
            </IconButton>
          )}
          {rightSource}
        </Stack.Horizontal>
      </StyledSelectInputButton>
    </InputWrapper>
  );
};

export default SelectInputButton;
