import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { colorTokens, borderRadiusTokens } from '../../../styles';

const getBorderColorByStatus = ({ focused, isError }: { focused?: boolean; isError?: boolean }) => {
  if (isError) {
    return colorTokens.red300;
  }
  if (focused) {
    return colorTokens.primary300;
  }

  return colorTokens.neutral300;
};

export const InputWrapper = styled.label<{
  focused: boolean;
  isError?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  margin: 1px;
  box-shadow: 0 0 0 1px ${({ focused, isError }) => getBorderColorByStatus({ focused, isError })};
  width: 376px;
  border-radius: ${borderRadiusTokens.borderRadius06};
  background-color: ${colorTokens.neutral0};
  cursor: text;
  overflow: hidden;
  padding: 4px 4px 4px 12px;
  ${({ disabled }) => getDisabledStyle(disabled)};
  &:hover {
    box-shadow: 0 0 0 1px ${colorTokens.neutral700};
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  &::placeholder {
    color: ${colorTokens.neutral350};
  }
`;
