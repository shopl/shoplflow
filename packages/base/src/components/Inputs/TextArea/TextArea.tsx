import React, { forwardRef, useEffect, useId, useState } from 'react';

import { Text } from '../../Text';

import type { TextAreaProps } from './TextArea.types';

import { LengthTextBox, StyledTextArea, InputWrapper } from './TextArea.styled';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { name, maxLength, height, disabled = false, isError = false, onChange, onBlur, onFocus, minHeight = 100, ...rest },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState<string>('');
    const id = useId();

    const inputId = `${name}${id}`;
    const input = document.getElementById(inputId) as HTMLInputElement;
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsSelected(true);
      onFocus && onFocus(e);
    };
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsSelected(false);
      onBlur && onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const sliceValue = e.target.value.slice(0, maxLength);
      const replace = sliceValue.replace(/^ /gi, '');

      if (maxLength) {
        input.value = replace;
        setValue(replace);
      } else {
        setValue(e.target.value);
      }
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      if (input) {
        setValue(input.value);
      }
    }, [input]);

    return (
      <InputWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
        disabled={disabled}
        isError={isError}
        height={height}
        minHeight={minHeight}
        isSelected={isSelected}
        flexDirection={'column'}
      >
        {disabled ? (
          <div>
            <Text color={'neutral400'} typography='body1_400'>
              {rest.placeholder}
            </Text>
          </div>
        ) : (
          <>
            <StyledTextArea
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              defaultValue={value}
              name={name}
              ref={ref}
              id={inputId}
              {...rest}
            />
            <LengthTextBox>
              {maxLength && (
                <Text typography='caption_400' color={'neutral400'}>
                  {value.length}/{maxLength}
                </Text>
              )}
            </LengthTextBox>
          </>
        )}
      </InputWrapper>
    );
  },
);

export default TextArea;
