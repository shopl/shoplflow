import styled from '@emotion/styled';
import type { BorderRadiusTokens, ColorTokens } from '../../../styles';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { HTMLInputTypeAttribute } from 'react';

export type Status = {
  isFocused?: boolean;
  isError?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
  focusedBorderColor?: ColorTokens;
};

const getBorderColorByStatus = ({ isFocused, isError, isHovered, disabled, focusedBorderColor }: Status) => {
  if (!disabled) {
    if (isError) {
      return colorTokens.red300;
    }
    if (isFocused) {
      if (focusedBorderColor) {
        return colorTokens[focusedBorderColor];
      }
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
  borderRadius,
  customNumberInputHeight,
}: {
  type?: HTMLInputTypeAttribute;
  width?: CSSStyleDeclaration['width'];
  minWidth?: CSSStyleDeclaration['minWidth'];
  maxWidth?: CSSStyleDeclaration['maxWidth'];
  height?: CSSStyleDeclaration['height'];
  minHeight?: CSSStyleDeclaration['minHeight'];
  maxHeight?: CSSStyleDeclaration['maxHeight'];
  borderRadius?: BorderRadiusTokens;
  customNumberInputHeight?: string;
}): ReturnType<typeof css> => {
  if (type === 'number') {
    return css`
      width: ${width || '64px'};
      height: ${customNumberInputHeight || '32px'};
      border-radius: ${borderRadius ? borderRadiusTokens[borderRadius] : '6px'};
    `;
  }

  return css`
    width: ${width || '100%'};
    min-width: ${minWidth || 'initial'};
    max-width: ${maxWidth || 'initial'};
    height: ${height || 'initial'};
    min-height: ${minHeight || 'initial'};
    max-height: ${maxHeight || 'initial'};
    border-radius: ${borderRadius ? borderRadiusTokens[borderRadius] : '6px'};
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
    borderRadius?: BorderRadiusTokens;
    direction?: 'row' | 'column';
    customNumberInputHeight?: string;
    gap?: CSSStyleDeclaration['gap'];
    type?: HTMLInputTypeAttribute;
    focusedBorderColor?: ColorTokens;
    sizeVar?: 'S' | 'M';
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 6px;
  flex-direction: ${({ direction }) => direction || 'row'};
  ${({ type, height, minHeight, maxHeight, width, maxWidth, minWidth, borderRadius, customNumberInputHeight }) =>
    getStyleByType({
      customNumberInputHeight,
      type,
      height,
      minHeight,
      maxHeight,
      width,
      maxWidth,
      minWidth,
      borderRadius,
    })};
  justify-content: space-between;
  border: 1px solid ${(props) => getBorderColorByStatus(props)};
  background-color: ${colorTokens.neutral0};
  overflow: hidden;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorTokens.neutral100};
      cursor: not-allowed;
    `};
`;
