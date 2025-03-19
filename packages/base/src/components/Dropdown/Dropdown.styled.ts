import styled from '@emotion/styled';
import type { TypographyTokens } from '../../styles';
import { boxShadowTokens, colorTokens } from '../../styles';
import type { DropdownTriggerButtonProps, DropdownContentProps, DropdownSizeVariantType } from './Dropdown.types';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import type { CSSProperties } from 'react';

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
        padding: 8px 4px 8px 12px;
      `;
    case 'M':
      return css`
        gap: 4px;
        padding: 4px 4px 4px 12px;
      `;
    case 'S':
      return css`
        padding: 4px 4px 4px 8px;
        gap: 4px;
      `;
    default:
      return css`
        padding: 4px 4px 4px 12px;
      `;
  }
};

export const getDropdownIconSizeBySizeVar = (size: DropdownSizeVariantType) => {
  switch (size) {
    case 'S':
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

export const StyledDropdown = styled.div<{ width: CSSProperties['width'] }>`
  width: ${({ width }) => width};
`;
export const StyledDropdownContent = styled.div<DropdownContentProps>`
  display: flex;
  flex-direction: column;
  background: ${colorTokens.neutral0};
  width: ${({ width }) => width ?? '240px'};
  padding: 4px;
  border-radius: 6px;
  box-shadow: ${boxShadowTokens.dropShadow};
`;

export const StyledDropdownButton = styled.button<DropdownTriggerButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  cursor: pointer;
  background-color: ${colorTokens.neutral0};
  ${({ sizeVar }) => sizeVar && getDropdownStyleBySizeVar(sizeVar)};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorTokens.neutral100};
      cursor: not-allowed;
    `}
`;
export const DropdownButtonIcon = styled(motion.div)<DropdownTriggerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ sizeVar }) => sizeVar && getDropdownIconSizeBySizeVar(sizeVar)};
`;

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

const getButtoWrapperStyleBySizeVar = (sizeVar: DropdownSizeVariantType) => {
  switch (sizeVar) {
    case 'L':
      return css`
        border-width: 2px;
        border-radius: 12px;
      `;
    default:
      return css`
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

export const StyledDropdownButtonWrapper = styled.label<
  Status & {
    height?: CSSStyleDeclaration['height'];
    width?: CSSStyleDeclaration['width'];
    gap?: CSSStyleDeclaration['gap'];
    sizeVar: DropdownSizeVariantType;
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
  ${({ height, width }) =>
    getStyleByType({
      height,
      width,
    })};
  justify-content: space-between;
  border-color: ${(props) => getBorderColorByStatus(props)};
  border-style: solid;
  ${({ sizeVar }) => getButtoWrapperStyleBySizeVar(sizeVar)};
  background-color: ${colorTokens.neutral0};
  overflow: hidden;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorTokens.neutral100};
      cursor: not-allowed;
    `};
`;
