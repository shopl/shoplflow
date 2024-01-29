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
    height?: CSSStyleDeclaration['height'];
    width?: CSSStyleDeclaration['width'];
    minHeight?: CSSStyleDeclaration['minHeight'];
    maxHeight?: CSSStyleDeclaration['maxHeight'];
    minWidth?: CSSStyleDeclaration['minWidth'];
    maxWidth?: CSSStyleDeclaration['maxWidth'];
    direction?: 'row' | 'column';
  }
>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction || 'row'};
  width: ${({ width }) => width ?? '100%'};
  min-width: ${({ minWidth }) => minWidth ?? 'initial'};
  max-width: ${({ maxWidth }) => maxWidth ?? 'initial'};
  min-height: ${({ minHeight }) => minHeight ?? 'initial'};
  max-height: ${({ maxHeight }) => maxHeight ?? 'initial'};
  height: ${({ height }) => height ?? 'initial'};
  justify-content: space-between;
  gap: 8px;
  border: 1px solid ${(props) => getBorderColorByStatus(props)};
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
