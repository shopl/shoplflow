import styled from '@emotion/styled';
import type { PopperOptionProps } from './Popper.types';

export const StyledPopper = styled.div<Pick<PopperOptionProps, 'height' | 'width'>>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => width ?? 'fit-content'};
  height: ${({ height }) => height ?? 'fit-content'};
`;
