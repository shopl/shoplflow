import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { ColorTokens } from './index';
import { colorTokens } from './index';
import type { CSSProperties } from 'react';

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

export const ComponentStage = styled(motion.div)<{
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}>`
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  flex-direction: column;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'center'};
  padding: 20px 20px;
  border: 1px solid ${colorTokens.neutral100};
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const IconStage = styled(ComponentStage)`
  width: 100px;
  height: 100px;
`;

export const Code = styled(motion.pre)`
  margin: 0;
  padding: 4px 8px;
  width: 100%;
  border-radius: 6px;
  box-sizing: border-box;
  &:hover {
    background: ${colorTokens.neutral100};
  }
`;
