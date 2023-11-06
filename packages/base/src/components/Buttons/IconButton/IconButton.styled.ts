import styled from '@emotion/styled';
import type { IconButtonOptionProps, IconButtonSizeVar, IconButtonStyleVar } from './IconButton.types';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

const getWidthAndHeightFromSizeVar = (sizeVar?: IconButtonSizeVar) => {
  switch (sizeVar) {
    case 'M':
      return css`
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
      `;
    case 'S':
      return css`
        width: 32px;
        min-width: 32px;
        height: 32px;
        min-height: 32px;
      `;
    default:
      return css`
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
      `;
  }
};

const getStyleByStyleVar = (styleVar?: IconButtonStyleVar) => {
  switch (styleVar) {
    case 'SOLID':
      return css`
        border: 1px solid ${colorTokens.neutral200};
        &:hover {
          background-color: ${colorTokens.neutral100};
        }
      `;
    case 'GHOST':
      return css`
        border: 1px solid transparent;
        &:hover {
          background-color: ${colorTokens.neutral400_5};
        }
      `;
    default:
      return css`
        border: 1px solid ${colorTokens.neutral200};
        &:hover {
          background-color: ${colorTokens.neutral100};
        }
      `;
  }
};

export const StyledIconButton = styled.button<IconButtonOptionProps>`
  display: flex;
  flex-shrink: 0;
  border-radius: ${borderRadiusTokens.borderRadius06};
  justify-content: center;
  align-items: center;
  background-color: ${colorTokens.neutral0};
  cursor: pointer;
  ${({ styleVar }) => getStyleByStyleVar(styleVar)};
  ${({ sizeVar }) => getWidthAndHeightFromSizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
