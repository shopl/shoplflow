import styled from '@emotion/styled';
import { boxShadowTokens } from '../../styles';
import type { DropdownButtonProps, DropdownContentProps, DropdownSizeVar } from './Dropdown.types';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

export const getDropdownHeightBySizeVar = (size: DropdownSizeVar) => {
  switch (size) {
    case 'M':
      return '40px';
    case 'S':
      return '32px';
    default:
      return '40px';
  }
};

export const getDropdownFontSizeBySizeVar = (size: DropdownSizeVar) => {
  switch (size) {
    case 'M':
      return 'body1_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body1_400';
  }
};

export const getDropdownStyleBySizeVar = (size: DropdownSizeVar) => {
  switch (size) {
    case 'M':
      return css`
        padding: 4px 4px 4px 12px;
      `;
    case 'S':
      return css`
        padding: 4px 4px 4px 8px;
      `;
    default:
      return css`
        padding: 4px 4px 4px 12px;
      `;
  }
};

export const getDropdownIconSizeBySizeVar = (size: DropdownSizeVar) => {
  switch (size) {
    case 'S':
      return css`
        height: 24px;
        width: 24px;
        min-width: 24px;
        min-height: 24px;
      `;
    case 'M':
      return css`
        height: 32px;
        width: 32px;
        min-width: 32px;
        min-height: 32px;
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

export const StyledDropdown = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: row;
`;
export const StyledDropdownContent = styled.div<DropdownContentProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? '240px'};
  padding: 4px;
  border-radius: 6px;
  box-shadow: ${boxShadowTokens.dropShadow};
`;

export const StyledDropdownButton = styled.button<DropdownButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 8px;
  cursor: pointer;
  ${({ sizeVar }) => sizeVar && getDropdownStyleBySizeVar(sizeVar)};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
export const DropdownButtonIcon = styled(motion.div)<DropdownButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ sizeVar }) => sizeVar && getDropdownIconSizeBySizeVar(sizeVar)};
`;
