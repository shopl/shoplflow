import styled from '@emotion/styled';
import type { IconButtonOptionProps, IconButtonSizeVar, IconButtonStyleVar } from './IconButton.types';
import { colorTokens } from '../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';

const getWidthAndHeightFromSizeVar = (sizeVar?: IconButtonSizeVar) => {
  switch (sizeVar) {
    case 'M':
      return css`
        width: 40px;
        height: 40px;
      `;
    case 'S':
      return css`
        width: 32px;
        height: 32px;
      `;
    default:
      return css`
        width: 40px;
        height: 40px;
      `;
  }
};

const getHoverBackgroundFromStyleVar = (styleVar?: IconButtonStyleVar) => {
  switch (styleVar) {
    case 'solid':
      return colorTokens.neutral100;
    case 'ghost':
      return colorTokens.neutral400_5;
    default:
      return colorTokens.neutral100;
  }
};

export const StyledIconButton = styled.button<IconButtonOptionProps>`
  display: flex;
  flex-shrink: 0;

  justify-content: center;
  align-items: center;
  background-color: ${colorTokens.neutral0};
  ${({ styleVar }) => {
    if (!styleVar) {
      return;
    }
    if (styleVar === 'solid') {
      return css`
        border: 1px solid ${colorTokens.neutral200};
      `;
    }
  }};

  ${({ sizeVar }) => getWidthAndHeightFromSizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};

  &:hover {
    background-color: ${({ styleVar, disabled }) => {
      if (disabled) {
        return;
      }
      return getHoverBackgroundFromStyleVar(styleVar);
    }};
  }
`;
