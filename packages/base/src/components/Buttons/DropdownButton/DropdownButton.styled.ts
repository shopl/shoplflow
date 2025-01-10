import styled from '@emotion/styled';
import { colorTokens } from '../../..//styles';
import { motion } from 'framer-motion';

export const StyledPopoverContentWrapper = styled.div`
  width: 102px;
  padding: 4px;
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.12));
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: ${colorTokens.neutral0};
`;

export const StyledArrowIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
