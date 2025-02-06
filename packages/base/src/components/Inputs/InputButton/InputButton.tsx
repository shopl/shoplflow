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
    {
      value,
      defaultValue,
      onChange,
      onClick,
      isSelected,
      disabled = false,
      useClear = true,
      rightSource,
      onClear,
      width = '100%',
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState(value ?? defaultValue ?? '');
    const [isHovered, setIsHovered] = useState(false);
    const prevValue = useRef(value ?? defaultValue ?? '');
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
      if (prevValue.current === value) {
        return;
      }
      if (value || value === '') {
        const convertString = convertToString(value);

        setText(convertString);
        prevValue.current = convertString;
      }
    }, [convertToString, value]);

    useEffect(() => {
      if (prevValue.current === value) {
        return;
      }
      onChange && onChange(convertToString(text));
    }, [convertToString, onChange, value, text]);

    return (
      <InputWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        data-shoplflow={'InputButton'}
        isHovered={isHovered}
        isFocused={isSelected}
        disabled={disabled}
        minHeight={'40px'}
        maxHeight={'40px'}
        width={width}
      >
        <StyledInputButton onClick={handleOnClick} disabled={disabled}>
          <StyledInputButtonContent className={'body1_400'} value={text} ref={ref} {...rest} />
          <Stack.Horizontal align={'center'}>
            {useClear && text && (
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
