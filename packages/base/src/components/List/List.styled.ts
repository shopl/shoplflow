import styled from '@emotion/styled';
import type { ListOptionProps } from './List.types';
import { colorTokens } from '../../styles';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';

export const StyledList = styled.li<ListOptionProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  ${({ disabled }) => disabled && getDisabledStyle(disabled)}
  &:hover {
    background: ${colorTokens.neutral400_5};
  }
`;

export const StyledText2Rows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;
