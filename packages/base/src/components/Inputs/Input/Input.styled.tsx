import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { InputSizeVariantType } from './Input.types';
import type { HTMLInputTypeAttribute } from 'react';
import { StyledIconButton } from '../../Buttons/IconButton/IconButton.styled';

export const StyledInput = styled.input<{
  disabled?: boolean;
  minWidth?: string;
  sizeVar?: InputSizeVariantType;
}>`
  padding: ${({ sizeVar }) => (sizeVar === 'S' ? '0 8px' : '4px 12px')};
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
    appearance: textfield;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const LeftElementWrapper = styled.div<{
  sizeVar?: InputSizeVariantType;
  initialType?: HTMLInputTypeAttribute;
}>`
  padding: ${({ sizeVar }) => (sizeVar === 'S' ? '0 0 0 8px' : '0 0 0 12px')};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightElementWrapper = styled.div<{
  sizeVar?: InputSizeVariantType;
  type?: HTMLInputTypeAttribute;
  initialType?: HTMLInputTypeAttribute;
}>`
  padding: ${({ sizeVar, type, initialType }) => {
    if (initialType === 'password' || type === 'password') {
      return '0';
    }

    return sizeVar === 'S' ? '0 8px 0 0' : '0 12px 0 0';
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const ClearIconButton = styled(StyledIconButton)`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colorTokens.neutral0} !important;

  &:hover {
    background-color: ${colorTokens.neutral100} !important;
  }
`;
