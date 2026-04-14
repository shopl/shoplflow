import styled from '@emotion/styled';
import type { TypographyTokens } from '../../styles';
import { colorTokens } from '../../styles';
import type { DropdownTriggerButtonProps, DropdownSizeVariantType, DropdownStyleVariantType } from './Dropdown.types';
import { css } from '@emotion/react';

export const getDropdownHeightBySizeVar = (size: DropdownSizeVariantType) => {
  switch (size) {
    case 'XS':
      return '24px';
    case 'M':
    case 'L':
      return '40px';
    case 'S':
      return '32px';
    default:
      return '40px';
  }
};

export const getDropdownFontSizeBySizeVar = (size: DropdownSizeVariantType): TypographyTokens => {
  switch (size) {
    case 'XS':
      return 'caption_400';
    case 'L':
      return 'body2_700';
    case 'M':
      return 'body1_400';
    case 'S':
      return 'body1_400';
    default:
      return 'body1_400';
  }
};

export const getDropdownStyleBySizeVar = (size: DropdownSizeVariantType, styleVar?: DropdownStyleVariantType) => {
  if (styleVar === 'GHOST' && size === 'S') {
    return css`
      padding-left: 8px;
      padding-right: 4px;
    `;
  }

  switch (size) {
    case 'XS':
      return css`
        padding: 0 2px 0 6px;
      `;
    case 'S':
      return css`
        padding: 0 8px;
      `;
    case 'M':
      return css`
        padding: 0 12px;
      `;
    case 'L':
      return css`
        background-color: transparent;
        padding-left: 12px;
        padding-right: 6px;
      `;
    default:
      return css`
        background-color: ${colorTokens.neutral0};
        padding: 0 8px;
      `;
  }
};

export const getDisabledStyle = ({
  disabled,
  styleVar,
}: {
  disabled?: boolean;
  styleVar?: DropdownStyleVariantType;
}) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      background: ${styleVar === 'GHOST' ? 'transparent' : colorTokens.neutral100};
      svg > path {
        fill: ${colorTokens.neutral350} !important;
      }
    `;
  }
};

export type Status = {
  isFocused?: boolean;
  isError?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
  sizeVar: DropdownSizeVariantType;
  styleVar?: DropdownStyleVariantType;
};

const getBorderColorByStatus = ({ isFocused, isError, isHovered, disabled, sizeVar, styleVar }: Status) => {
  if (styleVar === 'GHOST') {
    return 'transparent';
  }
  if (!disabled) {
    if (isError) {
      return colorTokens.red300;
    }
    if (isFocused) {
      if (sizeVar === 'L') {
        return colorTokens.neutral700;
      }
      return colorTokens.primary300;
    }
    if (isHovered) {
      return colorTokens.neutral700;
    }
  }

  return colorTokens.neutral300;
};

const getButtonWrapperStyleBySizeVar = ({ sizeVar, isFocused, isHovered, styleVar }: Status) => {
  if (styleVar === 'GHOST') {
    return css`
      background-color: ${isHovered || isFocused ? colorTokens.neutral400_5 : 'transparent'};
      border-width: 0;
      border-radius: 6px;
    `;
  }

  switch (sizeVar) {
    case 'L':
      return css`
        background-color: transparent;
        border-width: ${isFocused ? '2px' : '1px'};
        transition: border-width 0.2s ease-in-out;
        border-radius: 12px;
        border-width: 1.5px;
      `;
    default:
      return css`
        background-color: ${colorTokens.neutral0};
        border-width: 1px;
        border-radius: 6px;
      `;
  }
};

export const getStyleByType = ({
  height,
  width,
}: {
  width?: CSSStyleDeclaration['width'];
  height?: CSSStyleDeclaration['height'];
}) => {
  return css`
    width: ${width || '100%'};
    height: ${height || 'initial'};
  `;
};

export const getClearIconHoverStyle = (hasValue: boolean) => {
  if (!hasValue) {
    return;
  }

  return css`
    &:hover .dropdown-clear-icon {
      display: flex;
    }
  `;
};

export const StyledDropdownButtonWrapper = styled.div<
  Status & {
    height?: CSSStyleDeclaration['height'];
    width?: CSSStyleDeclaration['width'];
    gap?: CSSStyleDeclaration['gap'];
    sizeVar: DropdownSizeVariantType;
    hasValue: boolean;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: initial;
  max-height: initial;
  min-width: initial;
  max-width: initial;
  justify-content: space-between;
  border-style: solid;
  overflow: hidden;
  border-color: ${(props) => getBorderColorByStatus(props)};
  ${({ height, width }) =>
    getStyleByType({
      height,
      width,
    })};
  ${(props) => getButtonWrapperStyleBySizeVar(props)};
  ${({ disabled, styleVar }) => getDisabledStyle({ disabled, styleVar })};

  ${({ hasValue }) => getClearIconHoverStyle(hasValue)}
`;

export const StyledDropdownButton = styled.button<DropdownTriggerButtonProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${({ sizeVar, styleVar }) => sizeVar && getDropdownStyleBySizeVar(sizeVar, styleVar)};
  ${({ disabled, styleVar }) => getDisabledStyle({ disabled, styleVar })};

  .dropdown-clear-icon {
    display: none;
    position: absolute;
    right: 0;
  }
`;
export const DropdownButtonIcon = styled.div<DropdownTriggerButtonProps>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ${({ sizeVar, styleVar }) =>
    styleVar === 'GHOST'
      ? css`
          width: 18px;
          min-width: 18px;
        `
      : css`
          min-width: ${sizeVar === 'XS' ? '18px' : '22px'};
        `}
  height: 100%;

  ${({ disabled, styleVar }) => getDisabledStyle({ disabled, styleVar })};
`;
