import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colorTokens } from '../../../styles';

export const StyledInputButton = styled.button`
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
      cursor: not-allowed;
    `}
`;
