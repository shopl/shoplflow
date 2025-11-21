import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { InputSizeVariantType } from './Input.types';

export const StyledInput = styled.input<{
  disabled?: boolean;
  minWidth?: string;
  sizeVar?: InputSizeVariantType;
}>`
  padding: ${({ sizeVar }) => (sizeVar === 'S' ? '0 0 0 8px' : '4px 0 4px 12px')};
  background-color: transparent;
  display: flex;
  min-width: ${({ minWidth }) => minWidth || '64px'};
  width: 100%;
  border: none;
  box-sizing: border-box;
  &::placeholder {
    color: ${colorTokens.neutral350};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colorTokens.neutral350};
      cursor: not-allowed;
    `};
  /* Firefox */
  &[type='number'] {
    padding: 4px 8px;
    text-align: center;
    -moz-appearance: textfield;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const RightElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px 0 0;
`;
