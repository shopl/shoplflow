import type { ForwardedRef } from 'react';
import { forwardRef, useId, useState } from 'react';
import { WrapperWithError, Wrapper, StyledInput, HasBackgroundBtnWrapper } from './Input.styled';
import type { InputProps } from './Input.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../../IconButton';
import TextLengthWithMax from '../common/TextLengthWithMax';
import { Text } from '../../../components/Text';
import { spacingTokens } from '../../../styles';

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
      onDelete,
      nowLength,
      maxLength,
      name,
      confirmController,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [focused, setFocused] = useState(false);
    const uniqueId = useId();

    return (
      <WrapperWithError>
        <Wrapper
          style={wrapperStyle}
          htmlFor={uniqueId}
          focused={focused}
          isError={Boolean(errorText)}
          disabled={disabled}
          isEmpty={!nowLength}
          withRightBackgroundBtn={confirmController?.hasBackground}
        >
          <StyledInput
            className='body1_400'
            placeholder={placeholder}
            onFocus={(event) => {
              onFocus?.(event);
              setFocused(true);
            }}
            type='text'
            onBlur={(event) => {
              onBlur?.(event);
              setFocused(false);
            }}
            id={uniqueId}
            value={value}
            ref={ref}
            name={name}
            maxLength={maxLength}
            disabled={disabled}
            {...rest}
          />
          {maxLength && !confirmController && <TextLengthWithMax nowLength={nowLength ?? 0} maxLength={maxLength} />}

          {Boolean(nowLength) && (
            <IconButton
              sizeVar='S'
              styleVar='ghost'
              onClick={() => {
                onDelete();
              }}
            >
              <DeleteIcon width={20} height={20} />
            </IconButton>
          )}
          {Boolean(confirmController) &&
            (confirmController?.hasBackground ? (
              <HasBackgroundBtnWrapper>{confirmController.icon}</HasBackgroundBtnWrapper>
            ) : (
              <div>
                <IconButton sizeVar='S' styleVar='solid'></IconButton>
              </div>
            ))}
        </Wrapper>
        {Boolean(errorText) && (
          <Text style={{ paddingLeft: spacingTokens.spacing08 }} typography='caption_400' color='red300'>
            {errorText}
          </Text>
        )}
      </WrapperWithError>
    );
  },
);

export default Input;
