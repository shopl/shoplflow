import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

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

export const InputWrapper = styled.label<
  Status & {
    direction?: 'row' | 'column';
  }
>`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: space-between;
  min-height: 40px;
  margin: 1px;
  gap: 8px;
  box-shadow: 0 0 0 1px ${(props) => getBorderColorByStatus(props)};
  border-radius: 6px;
  background-color: ${colorTokens.neutral0};
  overflow: hidden;
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
