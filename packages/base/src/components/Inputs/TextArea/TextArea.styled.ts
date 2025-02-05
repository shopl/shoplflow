import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { colorTokens } from '../../../styles';

export const BottomElementWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 8px 12px;
  gap: 8px;
  background-color: ${colorTokens.neutral0};
`;

export const StyledTextarea = styled.textarea`
  padding: 8px 12px 0 12px;
  background-color: transparent;
  resize: none;
  width: 100%;
  height: 100%;
  flex: 1;
  word-break: break-all;
  ${({ disabled }) => getDisabledStyle(disabled)};
  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
