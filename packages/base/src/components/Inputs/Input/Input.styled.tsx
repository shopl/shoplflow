import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

export const StyledInput = styled.input`
  padding: 4px 0 4px 12px;
  background-color: transparent;
  width: 100%;
  border: none;
  box-sizing: border-box;
  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;

export const RightElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px 0 0;
`;
