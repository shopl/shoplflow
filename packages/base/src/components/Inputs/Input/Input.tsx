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
      className,
      width,
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
      !isHovered && setIsFocused(false);
    };
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      const slicedText = sliceText(event.target.value);
      setText(slicedText);
    };

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
      if (defaultValue) {
        const convertString = convertToString(defaultValue);
        const slicedText = sliceText(convertString);
        setText(slicedText);
      }
    }, [convertToString, defaultValue, maxLength, sliceText]);

    useEffect(() => {
      if (value) {
        const convertString = convertToString(value);
        const slicedText = sliceText(convertString);
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
        width={width}
        data-shoplflow={'input'}
      >
        <StyledInput
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          maxLength={maxLength}
          disabled={disabled}
          value={text}
          type={type}
          id={uniqueId}
          ref={refs}
          className={'body1_400' + (className ? ` ${className}` : '')}
          {...rest}
        />
        <RightElementWrapper>
          {maxLength && isFocused && <TextCounter currentLength={String(text).length} maxLength={maxLength} />}
          {isFocused && Boolean(String(text).length > 0) && (
            <IconButton sizeVar={'S'} onClick={handleOnClear} styleVar={'GHOST'}>
              <Icon iconSource={assetFunction('DeleteIcon')} color={'neutral600'} />
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
      </InputWrapper>
    );
  },
);

export default Input;
