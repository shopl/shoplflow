import styled from '@emotion/styled';
import { boxShadowTokens, colorTokens } from '../../styles';
import type { DropdownContentProps } from './Dropdown.types';
import type { CSSProperties } from 'react';

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
