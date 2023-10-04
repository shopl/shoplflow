import React, { useId, useState } from 'react';
import { Wrapper, StyledInput } from './Input.styled';
import type { InputProps } from './Input.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../IconButton';

const Input = ({ wrapperStyle, placeholder = 'placeholder', ...rest }: InputProps) => {
  const [selected, setSelected] = useState(false);
  const uniqueId = useId();

  return (
    <>
      <Wrapper style={wrapperStyle} htmlFor={uniqueId} selected={selected}>
        <StyledInput
          className='body1_400'
          placeholder={placeholder}
          {...rest}
          onFocus={() => {
            setSelected(true);
          }}
          onBlur={() => {
            setSelected(false);
          }}
          id={uniqueId}
          {...rest}
        />
        <IconButton sizeVar='s' styleVar='ghost'>
          <DeleteIcon width={20} height={20} />
        </IconButton>
      </Wrapper>
    </>
  );
};

export default Input;
