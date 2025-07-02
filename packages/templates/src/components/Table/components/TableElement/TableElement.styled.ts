import styled from '@emotion/styled';
import { colorTokens } from '@shoplflow/base';

export const TableBtn = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid ${colorTokens.neutral200};
  border-radius: 4px;
  padding: 4px;
  background: ${colorTokens.neutral150};
  color: ${colorTokens.neutral700};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  &:hover {
    background: ${({ disabled }) => (disabled ? colorTokens.neutral150 : colorTokens.neutral200)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
