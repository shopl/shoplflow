import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { ColorTokens } from '@shoplflow/base';
import { colorTokens } from '@shoplflow/base';
export const Box = styled(motion.div)<{
  height?: string;
  width?: string;
  background?: ColorTokens;
}>`
  display: flex;
  height: ${({ height }) => height ?? '60px'};
  min-height: ${({ height }) => height ?? '60px'};
  width: ${({ width }) => width ?? '200px'};
  background: ${({ background }) => background && colorTokens[background]};
  border-radius: 12px;
  cursor: pointer;
`;
