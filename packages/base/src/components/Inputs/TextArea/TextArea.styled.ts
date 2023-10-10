import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { spacingTokens, colorTokens, borderRadiusTokens } from '../../../styles';

const getBorderColorByStatus = ({ selected, isError }: { selected?: boolean; isError?: boolean }) => {
  if (isError) {
    return colorTokens.red300;
  }
  if (selected) {
    return colorTokens.primary300;
  }

  return colorTokens.neutral300;
};

export const Wrapper = styled.label<{ selected: boolean; isError?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacingTokens.spacing04};
  padding: ${spacingTokens.spacing08} ${spacingTokens.spacing12};
  border: 1px solid ${({ selected, isError }) => getBorderColorByStatus({ selected, isError })};
  width: 376px;
  border-radius: ${borderRadiusTokens.borderRadius06};
  background-color: ${colorTokens.neutral0};
  cursor: pointer;
  ${({ disabled }) => getDisabledStyle(disabled)};
  &:hover {
    border-color: ${({ selected, isError, disabled }) =>
      !selected && !isError && !disabled && `${colorTokens.neutral700}`};
  }
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
