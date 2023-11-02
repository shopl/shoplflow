import React, { forwardRef, useId, useState } from 'react';

import type { TextAreaProps } from './TextArea.types';

import { StyledTextarea, Wrapper } from './TextArea.styled';
import TextCounter from '../common/TextCounter';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      maxLength,
      placeholder,
      disabled = false,
      isError = false,
      value,
      onBlur,
      onFocus,
      nowLength,
      minHeight = 100,
      wrapperStyle,
      ...rest
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(false);
    const uniqueId = useId();

    return (
      <Wrapper style={wrapperStyle} htmlFor={uniqueId} selected={selected} isError={isError} disabled={disabled}>
        <StyledTextarea
          className='body1_400'
          placeholder={placeholder}
          onFocus={(event) => {
            onFocus?.(event);
            setSelected(true);
          }}
          onBlur={(event) => {
            onBlur?.(event);
            setSelected(false);
          }}
          name={name}
          id={uniqueId}
          value={value}
          ref={ref}
          maxLength={maxLength}
          disabled={disabled}
          minHeight={minHeight}
          {...rest}
        />
        {maxLength && (
          <TextCounter
            nowLength={nowLength ?? 0}
            maxLength={maxLength}
            wrapperStyle={{ width: '100%', justifyContent: 'flex-end' }}
          />
        )}
      </Wrapper>
    );
  },
);

export default TextArea;
