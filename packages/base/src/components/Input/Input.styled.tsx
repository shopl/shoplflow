import styled from '@emotion/styled';
import { spacingTokens, colorTokens, borderRadiusTokens } from '../../styles';

export const Wrapper = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: ${spacingTokens.spacing04} ${spacingTokens.spacing04} ${spacingTokens.spacing04} ${spacingTokens.spacing12};
  border: 1px solid grey;
  width: 376px;
  border-radius: ${borderRadiusTokens.borderRadius06};
  background-color: ${colorTokens.neutral0};
  cursor: pointer;

  &:hover {
    border-color: ${colorTokens.neutral700};
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  flex: 1;
  &:disabled {
  }

  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
