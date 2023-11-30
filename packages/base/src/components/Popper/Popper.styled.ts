import styled from '@emotion/styled';
import type { PopperTriggerProps } from './Popper.types';

export const StyledPopper = styled.div<Pick<PopperTriggerProps, 'height' | 'width'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  height: ${({ height }) => height && height};
`;
