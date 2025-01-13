import { css } from '@emotion/react';
import { colorTokens } from '../tokens';

export const getPopoverContentStyle = () => {
  return css`
    min-width: 112px;
    padding: 4px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: ${colorTokens.neutral0};
  `;
};
