import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const BackDropStyled = styled(motion.div)<{ zIndex?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex || 20000};
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.6);
`;
