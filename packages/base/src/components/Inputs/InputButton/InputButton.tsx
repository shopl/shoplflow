import type { MouseEvent } from 'react';
import React, { useRef, forwardRef, useCallback, useEffect, useState } from 'react';
import { StyledInputButton, StyledInputButtonContent } from './InputButton.styled';
import { InputWrapper } from '../common/input.styled';
import { Stack } from '../../Stack';
import { IconButton } from '../../Buttons';
import type { InputButtonProps } from './InputButton.types';
import { Icon } from '../../Icon';
import { assetFunction } from '../../../styles/IconAssets';

const InputButton = forwardRef<HTMLInputElement, InputButtonProps>(
  (
    { value, defaultValue, onChange, onClick, isSelected, disabled = false, rightSource, onClear, width, ...rest },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const prevValue = useRef(value);
    const convertToString = useCallback((value: string | number | readonly string[]) => {
      if (typeof value !== 'number') {
        return typeof value === 'string' ? value : value.join('');
      }
      return String(value);
    }, []);

    const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        onClick && onClick(e);
      }
    };

    const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        onClear && onClear(e);
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
      if (!(value === undefined || value === null)) {
        if (prevValue.current === value) {
          return;
        }
        const convertString = convertToString(value);
        setText(convertString);
        prevValue.current = convertString;
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
        width={width}
      >
        <StyledInputButton onClick={handleOnClick} disabled={disabled}>
          <StyledInputButtonContent className={'body1_400'} defaultValue={text} ref={ref} {...rest} />
          <Stack.Horizontal align={'center'}>
            {text && (
              <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'} disabled={disabled}>
                <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral350'} />
              </IconButton>
            )}
            {rightSource}
          </Stack.Horizontal>
        </StyledInputButton>
      </InputWrapper>
    );
  },
);

export default InputButton;
