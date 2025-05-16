import type { ChangeEvent, FocusEvent } from 'react';
import React, { forwardRef, useEffect, useId, useState, createContext, useContext } from 'react';

import type { TextAreaProps } from './TextArea.types';

import { StyledTextarea } from './TextArea.styled';
import { InputWrapper } from '../common/input.styled';
import { StackContainer } from '../../StackContainer/StackContainer';
import TextCounter from '../common/TextCounter';

interface TextAreaContextType {
  text: string;
  maxLength?: number;
}

const TextAreaContext = createContext<TextAreaContextType | null>(null);

// Context Hook
const useTextArea = () => {
  const context = useContext(TextAreaContext);
  if (!context) {
    throw new Error('useTextArea must be used within a TextAreaProvider');
  }
  return context;
};

// TextArea 내부에서 사용할 MaxLength 컴포넌트 정의
const MaxLength = () => {
  const { text, maxLength } = useTextArea();
  if (!maxLength) {
    return null;
  }
  return (
    <StackContainer padding={'0 0 0 4px'}>
      <TextCounter currentLength={String(text).length} maxLength={maxLength} />
    </StackContainer>
  );
};

type TextAreaComponent = React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>> & {
  MaxLength: typeof MaxLength;
};

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
      focusedBorderColor = 'primary300',
      leftSource,
      rightSource,
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

    const contextValue: TextAreaContextType = {
      text,
      maxLength,
    };

    return (
      <TextAreaContext.Provider value={contextValue}>
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
          gap='0'
          data-shoplflow={'text-area'}
          focusedBorderColor={focusedBorderColor}
        >
          <StyledTextarea
            className={'paragraph1' + (className ? ` ${className}` : '')}
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

          {/* leftSource와 rightSource를 모두 입력하지 않았을 경우 우측 하단에 maxLength를 표시합니다 */}
          {!leftSource && !rightSource ? (
            <StackContainer.Horizontal padding={'8px'} width={'100%'} justify='flex-end'>
              <StackContainer>
                <MaxLength />
              </StackContainer>
            </StackContainer.Horizontal>
          ) : (
            <StackContainer.Horizontal
              padding={'8px'}
              width={'100%'}
              align='center'
              justify='space-between'
              style={{ visibility: disabled ? 'hidden' : 'visible' }}
            >
              {leftSource}
              {rightSource}
            </StackContainer.Horizontal>
          )}
        </InputWrapper>
      </TextAreaContext.Provider>
    );
  },
) as TextAreaComponent;

TextArea.MaxLength = MaxLength;

export default TextArea;
