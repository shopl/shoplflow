import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { ColorTokens } from './index';
import { colorTokens } from './index';

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

export const ComponentStage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  border: 1px solid ${colorTokens.neutral100};
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const IconStage = styled(ComponentStage)`
  width: 100px;
  height: 100px;
`;
