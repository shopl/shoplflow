import type { FocusEvent, ChangeEvent, HTMLInputTypeAttribute, MouseEvent } from 'react';
import React, { useEffect, forwardRef, useId, useState } from 'react';
import { InputWrapper, RightElementWrapper, StyledInput } from './Input.styled';

import TextCounter from '../common/TextCounter';
import type { InputProps } from './Input.types';
import { typographyTokens } from '../../../styles';
import { IconButton } from '../../Buttons';
import { Assets } from '../../../styles/IconAssets';
import { useMergeRefs } from '../../../hooks/useMergeRef';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onChange,
      onDelete,
      defaultValue,
      value,
      isError,
      disabled,
      type: initialType,
      maxLength,
      className,
      ...rest
    },
    ref,
  ) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [type, setType] = useState<HTMLInputTypeAttribute | undefined>('text');
    const [isHovered, setIsHovered] = useState(false);
    const uniqueId = useId();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const refs = useMergeRefs(ref, inputRef);

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

    const handleOnDelete = () => {
      onDelete && onDelete();
      if (inputRef.current) {
        setText('');
        inputRef.current.value = '';
      }
    };

    const convertToString = (value: string | number | readonly string[]) => {
      if (typeof value !== 'number') {
        return typeof value === 'string' ? value : value.join('');
      }
      return String(value);
    };

    const handleTogglePasswordType = () => {
      if (type === 'password') {
        setType('text');
      } else {
        setType('password');
      }
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

    useEffect(() => {
      setType(initialType);
    }, [initialType]);

    return (
      <InputWrapper
        htmlFor={uniqueId}
        focused={isFocused}
        disabled={disabled}
        isError={isError}
        isHovered={isHovered}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        data-shoplflow={'input'}
      >
        <StyledInput
          className={`${typographyTokens.body1_400} ${className}`}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          maxLength={maxLength}
          disabled={disabled}
          value={text}
          type={type}
          id={uniqueId}
          ref={refs}
          {...rest}
        />
        <RightElementWrapper>
          {maxLength && isFocused && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
          {isFocused && Boolean(String(text).length > 0) && (
            <IconButton sizeVar={'S'} onClick={handleOnDelete}>
              <Assets iconName={'DeleteIcon'} />
            </IconButton>
          )}
          {initialType === 'password' && (
            <IconButton sizeVar={'S'} onClick={handleTogglePasswordType}>
              <Assets iconName={type === 'password' ? 'ViewOffIcon' : 'ViewOnIcon'} />
            </IconButton>
          )}
        </RightElementWrapper>
      </InputWrapper>
    );
  },
);

export default Input;
