import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { spacingTokens, colorTokens } from '../../../styles';
import type { Status } from '../Input/Input.styled';

const getBorderColorByStatus = ({ selected, isError }: { selected?: boolean; isError?: boolean }) => {
  if (isError) {
    return colorTokens.red300;
  }
  if (selected) {
    return colorTokens.primary300;
  }

  return colorTokens.neutral300;
};

export const TextAreaWrapper = styled.label<Status>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacingTokens.spacing04};
  padding: ${spacingTokens.spacing08} ${spacingTokens.spacing12};
  box-shadow: 0 0 0 1px ${(props) => getBorderColorByStatus(props)};
  border-radius: 6px;
  background-color: ${colorTokens.neutral0};
  cursor: text;
  ${({ disabled }) => getDisabledStyle(disabled)};
`;

export const StyledTextarea = styled.textarea<{ minHeight?: number }>`
  background-color: transparent;
  resize: none;
  width: 100%;
  height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : '300px')};
  flex: 1;
  word-break: break-all;
  &:disabled {
  }

  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
