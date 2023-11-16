import type { MouseEvent } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { StyledInputButton } from './InputButton.styled';
import { InputWrapper } from '../common/input.styled';
import { Stack } from '../../Stack';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import { assetFunction } from '../../../styles/IconAssets';
import { IconButton } from '../../Buttons';
import type { InputButtonProps } from './InputButton.types';

const InputButton = ({
  value,
  defaultValue,
  onChange,
  onClick,
  isSelected,
  disabled = false,
  rightSource,
  placeholder,
  onClear,
  ...rest
}: InputButtonProps) => {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const convertToString = useCallback((value: string | number | readonly string[]) => {
    if (typeof value !== 'number') {
      return typeof value === 'string' ? value : value.join('');
    }
    return String(value);
  }, []);

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick && onClick(e);
    }
  };

  const handleOnClear = () => {
    if (!disabled) {
      onClear && onClear();
      setText('');
    }
  };
  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (defaultValue) {
      const convertString = convertToString(defaultValue);
      setText(convertString);
    }
  }, [convertToString, defaultValue]);

  useEffect(() => {
    if (value) {
      const convertString = convertToString(value);
      setText(convertString);
    }
  }, [convertToString, value]);

  useEffect(() => {
    onChange && onChange(convertToString(value ?? ''));
  }, [convertToString, onChange, value]);

  return (
    <InputWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      data-shoplflow={'InputButton'}
      isHovered={isHovered}
      isFocused={isSelected}
      disabled={disabled}
    >
      <StyledInputButton {...rest} onClick={handleOnClick} disabled={disabled}>
        {text && text.length > 0 ? (
          <Text typography={'body1_400'} color={'neutral700'}>
            {text}
          </Text>
        ) : (
          <Text typography={'body1_400'} color={'neutral350'}>
            {placeholder}
          </Text>
        )}
        <Stack.Horizontal align={'center'}>
          {value && (
            <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'} disabled={disabled}>
              <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral600'} />
            </IconButton>
          )}
          {rightSource}
        </Stack.Horizontal>
      </StyledInputButton>
    </InputWrapper>
  );
};

export default InputButton;
