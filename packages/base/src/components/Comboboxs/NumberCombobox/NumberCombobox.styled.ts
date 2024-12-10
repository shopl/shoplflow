import styled from '@emotion/styled';
import type { NumberComboboxOptionProps } from './NumberCombobox.types';
import { motion } from 'framer-motion';

export const StyledNumberCombobox = styled.div<NumberComboboxOptionProps>``;

export const IconWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  height: fit-content;
`;
