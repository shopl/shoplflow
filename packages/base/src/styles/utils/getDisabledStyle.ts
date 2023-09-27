import { css } from '@emotion/react';

export const getDisabledStyle = (disabled?: boolean) => {
  if (!disabled) {
    return;
  }

  return css`
    opacity: 50%;
    cursor: not-allowed;
  `;
};
