import type { ChangeEvent, FocusEvent } from 'react';
import React, { forwardRef, useEffect, useId, useState } from 'react';

import type { TextAreaProps } from './TextArea.types';

import { BottomElementWrapper, StyledTextarea } from './TextArea.styled';
import TextCounter from '../common/TextCounter';
import { InputWrapper } from '../common/input.styled';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      maxLength,
      placeholder,
      disabled = false,
      isError = false,
      onChange,
      value,
      defaultValue,
      onBlur,
      onFocus,
      minHeight = '100px',
      width,
      height,
      className,
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleOnMouseEnter = () => {
      setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
      setIsHovered(false);
    };

    const handleOnFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
      onFocus && onFocus(event);
      setIsFocused(true);
    };
    const handleOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
      onBlur && onBlur(event);

      !isHovered && setIsFocused(false);
    };
    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(event);
      setText(event.target.value);
    };

    const convertToString = (value: string | number | readonly string[]) => {
      if (typeof value !== 'number') {
        return typeof value === 'string' ? value : value.join('');
      }
      return String(value);
    };

    useEffect(() => {
      if (defaultValue) {
        const convertString = convertToString(defaultValue);
        if (maxLength && convertString.length > maxLength) {
          setText(convertString);
        }
        setText(convertString);
      }
    }, [defaultValue, maxLength]);

    useEffect(() => {
      if (value) {
        const convertString = convertToString(value);
        if (maxLength && convertString.length > maxLength) {
          setText(convertString);
        }
        setText(convertToString(value));
      }
    }, [maxLength, value]);

    const uniqueId = useId();

    return (
      <InputWrapper
        htmlFor={uniqueId}
        isFocused={isFocused}
        disabled={disabled}
        isHovered={isHovered}
        isError={isError}
        direction={'column'}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        height={height}
        minHeight={minHeight}
        width={width}
        data-shoplflow={'text-area'}
      >
        <StyledTextarea
          className={'body1_400' + (className ? ` ${className}` : '')}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name={name}
          id={uniqueId}
          value={value}
          ref={ref}
          maxLength={maxLength}
          disabled={disabled}
          {...rest}
        />
        <BottomElementWrapper>
          {maxLength && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
        </BottomElementWrapper>
      </InputWrapper>
    );
  },
);

export default TextArea;
