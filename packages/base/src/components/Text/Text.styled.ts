import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { TextOptionProps } from './Text.types';
import { colorTokens } from '../../styles';

const setEllipsis = (maxLines: number) => {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const StyledText = styled.span<TextOptionProps>`
  display: ${({ display }) => display && display};
  align-items: center;
  color: ${({ color }) => color && colorTokens[color]};
  ${({ maxLines }) => maxLines && setEllipsis(maxLines)};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
  ${({ textDecorations }) =>
    textDecorations &&
    css`
      text-decoration: ${textDecorations};
    `};
  ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `}
  ${({ wordBreak }) =>
    wordBreak &&
    css`
      word-break: ${wordBreak};
    `};
`;
