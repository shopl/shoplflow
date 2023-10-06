import type { ForwardedRef } from 'react';
import { forwardRef, useId, useState } from 'react';
import { Wrapper, StyledInput } from './Input.styled';
import type { InputProps } from './Input.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../../IconButton';
import TextLengthWithMax from '../common/TextLengthWithMax';

const Input = forwardRef(
  (
    {
      wrapperStyle,
      placeholder = 'placeholder',
      value,
      onFocus,
      onBlur,
      errorText,
      disabled,
      canDelete,
      nowLength,
      maxLength,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [selected, setSelected] = useState(false);
    const uniqueId = useId();

    return (
      <>
        <Wrapper
          style={wrapperStyle}
          htmlFor={uniqueId}
          selected={selected}
          isError={Boolean(errorText)}
          disabled={disabled}
        >
          <StyledInput
            className='body1_400'
            placeholder={placeholder}
            onFocus={(event) => {
              onFocus?.(event);
              setSelected(true);
            }}
            type='text'
            onBlur={(event) => {
              onBlur?.(event);
              setSelected(false);
            }}
            id={uniqueId}
            value={value}
            ref={ref}
            disabled={disabled}
            {...rest}
          />
          {maxLength && <TextLengthWithMax nowLength={nowLength ?? 0} maxLength={maxLength} />}

          {Boolean(canDelete) && (
            <IconButton sizeVar='S' styleVar='ghost'>
              <DeleteIcon width={20} height={20} />
            </IconButton>
          )}
        </Wrapper>
      </>
    );
  },
);

export default Input;
