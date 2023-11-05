import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { colorTokens } from '../../../styles';

export type Status = {
  focused?: boolean;
  isError?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
};

const getBorderColorByStatus = ({ focused, isError, isHovered, disabled }: Status) => {
  if (!disabled) {
    if (isError) {
      return colorTokens.red300;
    }
    if (focused) {
      return colorTokens.primary300;
    }
    if (isHovered) {
      return colorTokens.neutral700;
    }
  }

  return colorTokens.neutral300;
};

export const InputWrapper = styled.label<Status>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  min-height: 40px;
  margin: 1px;
  gap: 8px;
  box-shadow: 0 0 0 1px ${(props) => getBorderColorByStatus(props)};
  border-radius: 6px;
  background-color: ${colorTokens.neutral0};
  cursor: text;
  overflow: hidden;
  padding: 4px 8px 4px 12px;
  ${({ disabled }) => getDisabledStyle(disabled)};
`;

export const StyledInput = styled.input`
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
`;
