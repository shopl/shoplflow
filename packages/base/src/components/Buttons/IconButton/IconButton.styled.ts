import styled from '@emotion/styled';
import type { IconButtonOptionProps, IconButtonSizeVar, IconButtonStyleVar } from './IconButton.types';
import type { ColorTokens } from '../../../styles';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { getNextColor } from '../../../utils/getNextColor';

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

const getStyleByStyleVar = (styleVar?: IconButtonStyleVar, color?: ColorTokens) => {
  switch (styleVar) {
    case 'PRIMARY':
      return css`
        background: ${colorTokens.primary300};
        border: 1px solid ${colorTokens.primary400};
        &:hover {
          background: ${colorTokens.primary400};
        }
      `;
    case 'SECONDARY':
      return css`
        background: ${colorTokens.neutral0};
        border: 1px solid ${colorTokens.neutral350};
        &:hover {
          background: ${colorTokens.neutral350};
        }
      `;
    case 'SOLID':
      if (!color) {
        throw new Error('IconButton의 SOLID 속성은 color를 필수로 받습니다.');
      }
      return css`
        border: 1px solid ${colorTokens[getNextColor(color) as keyof ColorTokens]};
        background: ${colorTokens[color]};
        &:hover {
          background: ${colorTokens.neutral400_5};
        }
      `;
    case 'GHOST':
      return css`
        border: 1px solid transparent;
        &:hover {
          background: ${colorTokens.neutral400_5};
        }
      `;
    default:
      return css`
        border: 1px solid ${colorTokens.neutral200};
        &:hover {
          background: ${colorTokens.neutral100};
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
  background: ${colorTokens.neutral0};
  cursor: pointer;
  ${({ styleVar, color }) => getStyleByStyleVar(styleVar, color)};
  ${({ sizeVar }) => getWidthAndHeightFromSizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
