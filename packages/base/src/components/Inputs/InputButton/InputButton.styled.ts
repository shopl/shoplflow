import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colorTokens } from '../../../styles';

export const StyledInputButton = styled.div<{
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${colorTokens.neutral0};
  gap: 4px;
  padding: 4px 4px 4px 12px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorTokens.neutral100};
      cursor: not-allowed;
      color: ${colorTokens.neutral350};
    `}
`;

export const StyledInputButtonContent = styled.input`
  display: flex;
  width: 100%;
  border: none;
  box-sizing: border-box;
  caret-color: transparent;
  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
