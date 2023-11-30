import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';

export type Status = {
  isFocused?: boolean;
  isError?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
};

const getBorderColorByStatus = ({ isFocused, isError, isHovered, disabled }: Status) => {
  if (!disabled) {
    if (isError) {
      return colorTokens.red300;
    }
    if (isFocused) {
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
    height?: string;
    width?: string;
    direction?: 'row' | 'column';
  }
>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  height: fit-content;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: space-between;
  min-height: ${({ height }) => height ?? '40px'};
  margin: 1px;
  gap: 8px;
  box-shadow: 0 0 0 1px ${(props) => getBorderColorByStatus(props)};
  border-radius: 6px;
  background-color: ${colorTokens.neutral0};
  overflow: hidden;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorTokens.neutral100};
      cursor: not-allowed;
    `};
`;
