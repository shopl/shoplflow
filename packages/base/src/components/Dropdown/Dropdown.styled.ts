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
  padding: 4px 4px 4px 12px;
  gap: 8px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
export const DropdownButtonIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  min-width: 32px;
  min-height: 32px;
`;
