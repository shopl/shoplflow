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
  rightSource,
  placeholder,
  onDelete,
  ...rest
}: InputButtonProps) => {
  const [text, setText] = useState('');

  const convertToString = useCallback((value: string | number | readonly string[]) => {
    if (typeof value !== 'number') {
      return typeof value === 'string' ? value : value.join('');
    }
    return String(value);
  }, []);
  const handleOnDelete = () => {
    onDelete && onDelete();
    setText('');
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
    <InputWrapper {...rest}>
      <StyledInputButton data-shoplflow={'InputButton'}>
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
            <IconButton sizeVar={'S'} onClick={handleOnDelete} styleVar={'GHOST'}>
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
