import styled from '@emotion/styled';
import type { ButtonOptionProps, ButtonSizeVariantType, ButtonStyleVariantType } from './Button.types';
import type { ColorTokens } from '../../../styles';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getNextColor } from '../../../utils/getNextColor';
import { getDomain } from '../../../hooks';

const getStyleByStyleVar = (styleVar?: ButtonStyleVariantType, color?: ColorTokens, disabled?: boolean) => {
  const domain = getDomain();
  const secondaryBorderColor = domain === 'hada' ? colorTokens.hada150 : colorTokens.neutral350;
  const secondaryBackgroundColor = domain === 'hada' ? colorTokens.hada100 : colorTokens.neutral0;
  const secondaryHoverBackgroundColor = domain === 'hada' ? colorTokens.hada150 : colorTokens.neutral100;

  switch (styleVar) {
    case 'PRIMARY':
      return css`
        border: 1px solid ${colorTokens.primary400};
        background-color: ${colorTokens.primary300};
        :hover {
          background-color: ${!disabled && colorTokens.primary400};
        }
      `;
    case 'SECONDARY':
      return css`
        border: 1px solid ${secondaryBorderColor};
        background-color: ${secondaryBackgroundColor};
        :hover {
          background-color: ${!disabled && secondaryHoverBackgroundColor};
        }
      `;
    case 'SOLID':
      if (!color) {
        throw new Error('Button의 SOLID 속성은 color를 필수로 받습니다.');
      }
      return css`
        border: 1px solid ${colorTokens[getNextColor(color)]};
        background-color: ${colorTokens[color]};
        :hover {
          background-color: ${colorTokens[getNextColor(color)]};
        }
      `;
    case 'GHOST':
      return css`
        border: 1px solid transparent;
        background-color: transparent;
        :hover {
          background-color: ${!disabled && colorTokens.neutral400_5};
        }
      `;
    default:
      return css`
        border: 1px solid ${colorTokens.primary400};
        background-color: ${colorTokens.primary300};
      `;
  }
};

const getStyleBySizeVar = (sizeVar?: ButtonSizeVariantType) => {
  switch (sizeVar) {
    case 'M':
      return css`
        gap: 4px;
        min-width: 72px;
        min-height: 40px;
      `;
    case 'S':
      return css`
        gap: 2px;
        min-width: 54px;
        min-height: 32px;
      `;
    default:
      return css`
        gap: 4px;
        min-width: 72px;
        min-height: 40px;
      `;
  }
};

const getDisabledButtonStyle = (disabled?: boolean) => {
  if (!disabled) {
    return;
  }
  return css`
    opacity: 0.3;
    cursor: not-allowed;
  `;
};

export const StyledButton = styled.button<ButtonOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  /* gap: 4px; */
  padding: 0 12px;
  border-radius: 6px;
  cursor: pointer;
  ${({ styleVar, color, disabled }) => getStyleByStyleVar(styleVar, color, disabled)};
  ${({ sizeVar }) => getStyleBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledButtonStyle(disabled)};
`;
