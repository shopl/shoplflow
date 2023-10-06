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
  align-items: center;
  min-height: 40px;
  padding: ${spacingTokens.spacing04} ${spacingTokens.spacing04} ${spacingTokens.spacing04} ${spacingTokens.spacing12};
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

export const StyledInput = styled.input`
  background-color: transparent;
  flex: 1;
  &:disabled {
  }

  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
