import styled from '@emotion/styled';

import type { DividerOptionProps } from './Divider.types';
import { colorTokens } from '../../styles';

export const StyledDivider = styled.div<DividerOptionProps>`
  flex-shrink: 0;
  align-self: ${({ isFull }) => (isFull ? 'stretch' : 'auto')};
  width: ${({ direction, length, thickness, isFull }) =>
    direction === 'row' ? (isFull ? 'auto' : length) : thickness};
  height: ${({ direction, length, thickness, isFull }) => (direction === 'row' ? thickness : isFull ? 'auto' : length)};
  background-color: ${({ color }) => color ?? colorTokens.neutral200};
`;
