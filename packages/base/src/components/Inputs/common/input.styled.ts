import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { HTMLInputTypeAttribute } from 'react';

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

export const getStyleByType = ({
  type,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
}: {
  type?: HTMLInputTypeAttribute;
  width?: CSSStyleDeclaration['width'];
  minWidth?: CSSStyleDeclaration['minWidth'];
  maxWidth?: CSSStyleDeclaration['maxWidth'];
  height?: CSSStyleDeclaration['height'];
  minHeight?: CSSStyleDeclaration['minHeight'];
  maxHeight?: CSSStyleDeclaration['maxHeight'];
}) => {
  if (type === 'number') {
    return css`
      width: 64px;
      height: 32px;
    `;
  }

  return css`
    width: ${width ?? '100%'};
    min-width: ${minWidth ?? 'initial'};
    max-width: ${maxWidth ?? 'initial'};
    height: ${height ?? 'initial'};
    min-height: ${minHeight ?? 'initial'};
    max-height: ${maxHeight ?? 'initial'};
  `;
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
    type?: HTMLInputTypeAttribute;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction || 'row'};
  ${({ type, height, minHeight, maxHeight, width, maxWidth, minWidth }) =>
    getStyleByType({ type, height, minHeight, maxHeight, width, maxWidth, minWidth })};
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
