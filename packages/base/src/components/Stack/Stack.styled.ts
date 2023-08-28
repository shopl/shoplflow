import styled from '@emotion/styled';

import type { StackOptionProps } from './Stack.types';
import { borderRadiusTokens, colorTokens, spacingTokens } from '../../styles';

export const StyledStack = styled.div<StackOptionProps>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing }) => spacing && spacingTokens[spacing]};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
  background: ${({ background }) => (background ? colorTokens[background] : 'transparent')};
  border-radius: ${({ radius }) => radius && borderRadiusTokens[radius]};
  animation: 0.2s all ease-in-out;
`;
