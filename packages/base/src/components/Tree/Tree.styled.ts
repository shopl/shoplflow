import styled from '@emotion/styled';
import type { TreeItemOptionProps } from './Tree.types';
import { css } from '@emotion/react';
import { colorTokens } from '../../styles';
import { m, motion } from 'framer-motion';

export const StyledTree = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTreeItem = styled(m.li)<TreeItemOptionProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-radius: 8px;
  background: transparent;
  cursor: initial;
  ${({ depth }) =>
    depth &&
    css`
      padding-left: ${depth * 16}px;
    `};
  &:hover {
    background: ${colorTokens.neutral400_5};
  }
`;
export const LeftElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const RightElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconWrapper = styled(m.div)`
  display: flex;
  width: fit-content;
  height: fit-content;
`;
