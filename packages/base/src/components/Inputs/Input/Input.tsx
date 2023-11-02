import type { FocusEvent, ChangeEvent, ForwardedRef } from 'react';
import { useEffect, forwardRef, useId, useState } from 'react';
import { InputWrapper, StyledInput } from './Input.styled';

import TextCounter from '../common/TextCounter';
import type { InputProps } from './Input.types';
import { typographyTokens } from '../../../styles';
import { Stack } from '../../Stack';

const Input = forwardRef<ForwardedRef<HTMLInputElement>, InputProps>(
  (
    {
      placeholder = 'placeholder',
      onFocus,
      onBlur,
      onChange,
      defaultValue,
      value,
      disabled,
      type = 'text',
      maxLength,
      className,
      rightSource,
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const uniqueId = useId();

    const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event);
      setIsFocused(true);
    };
    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(event);
      setIsFocused(false);
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
      defaultValue && setText(convertToString(defaultValue));
    }, [defaultValue]);

    useEffect(() => {
      value && setText(convertToString(value));
    }, [value]);

    return (
      <InputWrapper htmlFor={uniqueId} focused={isFocused} disabled={disabled}>
        <StyledInput
          className={`${typographyTokens.body1_400} ${className}`}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          maxLength={maxLength}
          disabled={disabled}
          value={text}
          type={type}
          id={uniqueId}
          ref={ref}
          {...rest}
        />
        <Stack.Horizontal>
          {maxLength && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
          {Boolean(String(text).length > 0) && <>{rightSource}</>}
        </Stack.Horizontal>
      </InputWrapper>
    );
  },
);

export default Input;
