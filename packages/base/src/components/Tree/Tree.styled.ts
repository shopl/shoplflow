import styled from '@emotion/styled';
import type { TreeItemOptionProps } from './Tree.types';
import { css } from '@emotion/react';
import { colorTokens } from '../../styles';
import { motion } from 'framer-motion';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';

export const StyledTree = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTreeItem = styled(motion.li)<TreeItemOptionProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 0px;
  border-radius: 8px;
  background: transparent;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
  ${({ depth }) =>
    depth &&
    css`
      padding-left: ${(depth - 1) * 24 + 12}px;
    `};
  &:hover {
    background: ${colorTokens.neutral400_5};
  }
  ${({ disabled }) => disabled && getDisabledStyle(disabled)}
`;
export const LeftElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RightElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  height: fit-content;
`;
