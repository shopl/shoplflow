import type { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';
import React, { forwardRef, useCallback, useEffect, useId, useState } from 'react';
import { RightElementWrapper, StyledInput } from './Input.styled';
import TextCounter from '../common/TextCounter';
import type { InputProps } from './Input.types';
import { IconButton } from '../../Buttons';
import { assetFunction } from '../../../styles/IconAssets';
import { useMergeRefs } from '../../../hooks/useMergeRef';
import { InputWrapper } from '../common/input.styled';
import { Icon } from '../../Icon';
import { getNumberLimitRange } from './utils/getNumberLimiteRange';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onFocus,
      onBlur,
      onChange,
      onClear,
      defaultValue,
      value,
      isError,
      disabled,
      type: initialType,
      maxLength,
      min,
      max,
      className,
      width,
      borderRadius,
      customNumberInputHeight,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const [type, setType] = useState<HTMLInputTypeAttribute | undefined>(initialType);
    const [isHovered, setIsHovered] = useState(false);
    const uniqueId = useId();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const refs = useMergeRefs(ref, inputRef);

    const convertToString = useCallback((value: string | number | readonly string[]) => {
      if (typeof value !== 'number') {
        return typeof value === 'string' ? value : value.join('');
      }
      return String(value);
    }, []);

    const sliceText = useCallback(
      (value: string) => {
        if (maxLength && value.length > maxLength) {
          return value.slice(0, maxLength);
        }
        return value;
      },
      [maxLength],
    );

    const handleOnMouseEnter = () => {
      setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
      setIsHovered(false);
    };

    const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event);
      setIsFocused(true);
    };
    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(event);
    };

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Tab') {
        setIsFocused(false);
      }
      onKeyDown && onKeyDown(event);
    };

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);

      const slicedText = sliceText(event.target.value);

      if (type === 'number') {
        const numberValue = Number(slicedText);
        const numberMin = Number(min);
        const numberMax = Number(max);
        const limitedText = getNumberLimitRange(numberValue, numberMin, numberMax);
        setText(limitedText);
        return;
      }
      setText(slicedText);
    };

    // event: MouseEvent<HTMLButtonElement>
    const handleOnClear = () => {
      onClear && onClear();
      if (inputRef.current) {
        setText('');
        inputRef.current.value = '';
      }
    };

    const handleTogglePasswordType = () => {
      if (type === 'password') {
        setType('text');
      } else {
        setType('password');
      }
    };

    useEffect(() => {
      if (defaultValue !== undefined) {
        const convertString = convertToString(defaultValue);
        const slicedText = sliceText(convertString);
        setText(slicedText);
      }
    }, [convertToString, defaultValue, maxLength, sliceText]);

    useEffect(() => {
      if (value !== undefined) {
        const convertString = convertToString(value);

        const slicedText = sliceText(convertString);
        inputRef.current?.value && (inputRef.current.value = slicedText);
        setText(slicedText);
      }
    }, [convertToString, maxLength, sliceText, value]);

    useEffect(() => {
      setType(initialType);
    }, [initialType]);

    return (
      <InputWrapper
        htmlFor={uniqueId}
        isFocused={isFocused}
        disabled={disabled}
        isError={isError}
        isHovered={isHovered}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        type={type}
        width={width}
        height={'40px'}
        maxHeight={'40px'}
        data-shoplflow={'input'}
        borderRadius={borderRadius}
        customNumberInputHeight={customNumberInputHeight}
      >
        <StyledInput
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          maxLength={maxLength}
          disabled={disabled}
          value={text}
          type={type}
          id={uniqueId}
          ref={refs}
          className={'body1_400' + (className ? ` ${className}` : '')}
          {...rest}
        />
        {!(type === 'number') && (
          <RightElementWrapper>
            {maxLength && isFocused && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
            {isFocused && Boolean(String(text).length > 0) && (
              <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'}>
                <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral350'} />
              </IconButton>
            )}
            {initialType === 'password' && (
              <IconButton sizeVar={'S'} onClick={handleTogglePasswordType} styleVar={'GHOST'}>
                <Icon
                  color={'neutral600'}
                  iconSource={assetFunction(type === 'password' ? 'ViewOffIcon' : 'ViewOnIcon')}
                />
              </IconButton>
            )}
          </RightElementWrapper>
        )}
      </InputWrapper>
    );
  },
);

export default Input;
