import styled from '@emotion/styled';

import type { StackOptionProps } from './Stack.types';

export const StyledStack = styled.div<StackOptionProps>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap && gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
  background: ${({ theme, background }) => (background ? theme.colors[background] : 'transparent')};
  animation: 0.2s all ease-in-out;
`;
