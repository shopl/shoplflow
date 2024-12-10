import styled from '@emotion/styled';
import type { IconButtonOptionProps, IconButtonSizeVariantType, IconButtonStyleVariantType } from './IconButton.types';
import type { ColorTokens } from '../../../styles';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { getNextColor } from '../../../utils/getNextColor';

const getWidthAndHeightFromSizeVar = (sizeVar?: IconButtonSizeVariantType) => {
  switch (sizeVar) {
    case 'M':
      return css`
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
        & > svg {
          width: 24px;
          height: 24px;
        }
      `;
    case 'S':
      return css`
        width: 32px;
        min-width: 32px;
        height: 32px;
        min-height: 32px;
        & > svg {
          width: 20px;
          height: 20px;
        }
      `;
    case 'XS':
      return css`
        width: 24px;
        min-width: 24px;
        height: 24px;
        min-height: 24px;
        & > svg {
          width: 12px;
          height: 12px;
        }
      `;
    default:
      return css`
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
        & > svg {
          width: 20px;
          height: 20px;
        }
      `;
  }
};

const getStyleByStyleVar = (styleVar?: IconButtonStyleVariantType, color?: ColorTokens, isHovered?: boolean) => {
  switch (styleVar) {
    case 'PRIMARY':
      return css`
        background: ${colorTokens.primary300};
        border: 1px solid ${colorTokens.primary400};
        ${isHovered &&
        css`
          background: ${colorTokens.primary400};
        `}
      `;
    case 'SECONDARY':
      return css`
        background: ${colorTokens.neutral0};
        border: 1px solid ${colorTokens.neutral350};
        ${isHovered &&
        css`
          background: ${colorTokens.neutral100};
        `}
      `;
    case 'SOLID':
      if (!color) {
        throw new Error('IconButton의 SOLID 속성은 color를 필수로 받습니다.');
      }
      return css`
        border: 1px solid ${colorTokens[getNextColor(color)]};
        background: ${colorTokens[color]};

        ${isHovered &&
        css`
          background: ${colorTokens[getNextColor(color)]};
        `}
      `;
    case 'GHOST':
      return css`
        border: 1px solid transparent;
        background: transparent;
        ${isHovered &&
        css`
          background: ${colorTokens.neutral400_5};
        `}
      `;
    default:
      return css`
        border: 1px solid ${colorTokens.neutral200};
        ${isHovered &&
        css`
          background: ${colorTokens.neutral100};
        `}
      `;
  }
};

export const StyledIconButton = styled.button<
  IconButtonOptionProps & {
    isHovered: boolean;
  }
>`
  display: flex;
  flex-shrink: 0;
  border-radius: ${borderRadiusTokens.borderRadius06};
  justify-content: center;
  align-items: center;
  background: ${colorTokens.neutral0};
  cursor: pointer;
  ${({ styleVar, color, isHovered }) => getStyleByStyleVar(styleVar, color, isHovered)};
  ${({ sizeVar }) => getWidthAndHeightFromSizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
