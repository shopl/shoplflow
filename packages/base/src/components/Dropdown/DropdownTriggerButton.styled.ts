import styled from '@emotion/styled';
import type { TypographyTokens } from '../../styles';
import { colorTokens } from '../../styles';
import type { DropdownTriggerButtonProps, DropdownSizeVariantType } from './Dropdown.types';
import { css } from '@emotion/react';

export const getDropdownHeightBySizeVar = (size: DropdownSizeVariantType) => {
  switch (size) {
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
    case 'L':
      return 'body2_700';
    case 'M':
      return 'body1_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body1_400';
  }
};

export const getDropdownStyleBySizeVar = (size: DropdownSizeVariantType) => {
  switch (size) {
    case 'L':
      return css`
        background-color: transparent;
        padding: 8px 0 8px 12px;
      `;
    case 'M':
      return css`
        background-color: ${colorTokens.neutral0};
        gap: 4px;
        padding: 4px 0 4px 12px;
      `;
    case 'S':
      return css`
        background-color: ${colorTokens.neutral0};
        padding: 4px 0 4px 8px;
      `;
    default:
      return css`
        padding: 4px 4px 4px 12px;
      `;
  }
};

export const getDisabledStyle = (disabled?: boolean) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      background: ${colorTokens.neutral100};
    `;
  }
};

export const getDropdownIconSizeBySizeVar = (size: DropdownSizeVariantType) => {
  switch (size) {
    case 'S':
      return css`
        height: 32px;
        width: 22px;
        min-height: 32px;
        min-width: 22px;
        justify-content: flex-start;
      `;
    case 'L':
      return css`
        height: 24px;
        width: 24px;
        min-width: 24px;
        min-height: 24px;
      `;
    default:
      return css`
        height: 32px;
        width: 32px;
        min-width: 32px;
        min-height: 32px;
      `;
  }
};

export type Status = {
  isFocused?: boolean;
  isError?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
  sizeVar: DropdownSizeVariantType;
};

const getBorderColorByStatus = ({ isFocused, isError, isHovered, disabled, sizeVar }: Status) => {
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

const getButtonWrapperStyleBySizeVar = ({ sizeVar, isFocused }: Status) => {
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
  ${({ disabled }) => getDisabledStyle(disabled)};
  ${({ sizeVar }) =>
    sizeVar === 'M' &&
    css`
      gap: 4px;
    `}

  .dropdown-clear-icon {
    display: none;
  }

  ${({ hasValue }) => getClearIconHoverStyle(hasValue)}
`;

export const StyledDropdownButton = styled.button<DropdownTriggerButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  cursor: pointer;
  ${({ sizeVar }) => sizeVar && getDropdownStyleBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
export const DropdownButtonIcon = styled.div<DropdownTriggerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ sizeVar }) => sizeVar && getDropdownIconSizeBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
