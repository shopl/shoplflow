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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    padding: 4px 8px;
    text-align: center;
    -moz-appearance: textfield;
  }
`;

export const RightElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px 0 0;
`;
