import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getPopoverContentStyle } from '../../../styles/utils/getPopoverContentStyle';

export const StyledPopoverContentWrapper = styled.div`
  ${getPopoverContentStyle()}
`;

export const StyledArrowIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
