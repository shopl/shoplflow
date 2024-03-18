import styled from '@emotion/styled';

import type { StackContainerOptionProps } from './StackContainer.types';
import { borderRadiusTokens, colorTokens, spacingTokens } from '../../styles';

export const StyledStackContainer = styled.div<StackContainerOptionProps>`
  display: flex;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing }) => spacing && spacingTokens[spacing]};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => (background ? colorTokens[background] : 'transparent')};
  border-radius: ${({ radius }) => radius && borderRadiusTokens[radius]};
  animation: 0.2s all ease-in-out;
`;
