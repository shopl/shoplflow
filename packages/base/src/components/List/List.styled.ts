import styled from '@emotion/styled';
import type { ListSizeVariantType, ListOptionProps } from './List.types';
import { css } from '@emotion/react';

const getListStyleBySizeVar = (size: ListSizeVariantType) => {
  switch (size) {
    case 'SX':
      return css`
        padding: 6px 12px;
      `;
    case 'S':
      return css`
        padding: 6px 12px;
      `;
    case 'M':
      return css`
        padding: 6px 12px;
      `;
    case 'L':
      return css`
        padding: 6px 12px;
      `;
    default:
      return css`
        padding: 6px 12px;
      `;
  }
};

export const StyledList = styled.div<ListOptionProps>`
  padding: 6px 8px;
  border-radius: 8px;
  ${({ sizeVar }) => sizeVar && getListStyleBySizeVar(sizeVar)}
`;
