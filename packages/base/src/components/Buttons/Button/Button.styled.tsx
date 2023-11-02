import styled from '@emotion/styled';
import type { ButtonOptionProps, ButtonSizeVar, ButtonStyleVar } from './Button.types';
import { borderRadiusTokens, spacingTokens, colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

const getStyleByStyleVar = (styleVar?: ButtonStyleVar, disabled?: boolean) => {
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
        border: 1px solid ${colorTokens.neutral350};
        background-color: ${colorTokens.neutral0};
        :hover {
          background-color: ${!disabled && colorTokens.neutral100};
        }
      `;
    case 'SOLID':
      return css`
        border: 1px solid ${colorTokens.coolgray100};
        background-color: ${colorTokens.coolgray50};
        :hover {
          background-color: ${!disabled && colorTokens.coolgray100};
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

const getStyleBySizeVar = (sizeVar?: ButtonSizeVar) => {
  switch (sizeVar) {
    case 'M':
      return css`
        min-width: 72px;
        min-height: 40px;
      `;
    case 'S':
      return css`
        min-width: 54px;
        min-height: 32px;
      `;
    default:
      return css`
        min-width: 72px;
        min-height: 40px;
      `;
  }
};

export const StyledButton = styled.button<ButtonOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacingTokens.spacing04};
  border-radius: ${borderRadiusTokens.borderRadius06};
  padding: 0px ${spacingTokens.spacing12};
  border-radius: ${borderRadiusTokens.borderRadius12};
  cursor: pointer;
  ${({ styleVar, disabled }) => getStyleByStyleVar(styleVar, disabled)};
  ${({ sizeVar }) => getStyleBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
