import type { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import React, { forwardRef, useEffect, useId, useState } from 'react';

import type { TextAreaProps } from './TextArea.types';

import { StyledTextarea, TextAreaWrapper } from './TextArea.styled';
import TextCounter from '../common/TextCounter';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      onMouseEnter,
      onMouseLeave,
      maxLength,
      placeholder,
      disabled = false,
      onChange,
      value,
      defaultValue,
      onBlur,
      onFocus,
      minHeight = 100,
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleOnMouseEnter = (e: MouseEvent<HTMLLabelElement>) => {
      onMouseEnter && onMouseEnter(e);
      setIsHovered(true);
    };
    const handleOnMouseLeave = (e: MouseEvent<HTMLLabelElement>) => {
      onMouseLeave && onMouseLeave(e);
      setIsHovered(false);
    };

    const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event);
      setIsFocused(true);
    };
    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(event);

      !isHovered && setIsFocused(false);
    };
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <TextAreaWrapper
        htmlFor={uniqueId}
        focused={isFocused}
        disabled={disabled}
        isHovered={isHovered}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        data-shoplflow={'text-area'}
      >
        <StyledTextarea
          className='body1_400'
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
          minHeight={minHeight}
          {...rest}
        />
        {maxLength && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
      </TextAreaWrapper>
    );
  },
);

export default TextArea;
