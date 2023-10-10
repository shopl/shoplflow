import styled from '@emotion/styled';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { spacingTokens, colorTokens, borderRadiusTokens } from '../../../styles';

const getBorderColorByStatus = ({ focused, isError }: { focused?: boolean; isError?: boolean }) => {
  if (isError) {
    return colorTokens.red300;
  }
  if (focused) {
    return colorTokens.primary300;
  }

  return colorTokens.neutral300;
};

const getPaddingByContents = ({
  withRightBackgroundBtn,
  isEmpty,
}: {
  withRightBackgroundBtn?: boolean;
  isEmpty?: boolean;
}) => {
  if (withRightBackgroundBtn) {
    return `0px 0px 0px 12px`;
  }

  if (isEmpty) {
    return `4px 12px 4px 12px`;
  }

  return `4px 4px 4px 12px`;
};

export const WrapperWithError = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacingTokens.spacing08};
`;

export const Wrapper = styled.label<{
  focused: boolean;
  isError?: boolean;
  disabled?: boolean;
  isEmpty?: boolean;
  withRightBackgroundBtn?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: ${({ isEmpty, withRightBackgroundBtn }) => getPaddingByContents({ isEmpty, withRightBackgroundBtn })};
  border: 1px solid ${({ focused, isError }) => getBorderColorByStatus({ focused, isError })};
  width: 376px;
  border-radius: ${borderRadiusTokens.borderRadius06};
  background-color: ${colorTokens.neutral0};
  cursor: pointer;
  overflow: hidden;
  ${({ disabled }) => getDisabledStyle(disabled)};
  &:hover {
    border-color: ${({ focused, isError, disabled }) =>
      !focused && !isError && !disabled && `${colorTokens.neutral700}`};
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

export const HasBackgroundBtnWrapper = styled.div`
  background-color: ${colorTokens.primary300};
  display: flex;
  width: 40px;
  height: 38px;
  justify-content: center;
  align-items: center;
`;
