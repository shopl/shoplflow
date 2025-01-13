import styled from '@emotion/styled';
import type {
  SplitButtonOptionProps,
  SplitButtonSizeVariantType,
  SplitButtonStyleVariantType,
} from './SplitButton.types';
import type { ColorTokens } from '../../../styles';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { getPopoverContentStyle } from '../../../styles/utils/getPopoverContentStyle';

const getStyleByStyleVar = (styleVar?: SplitButtonStyleVariantType, color?: ColorTokens, disabled?: boolean) => {
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
    default:
      return css`
        border: 1px solid ${colorTokens.primary400};
        background-color: ${colorTokens.primary300};
      `;
  }
};

const getStyleBySizeVar = (sizeVar?: SplitButtonSizeVariantType) => {
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

export const StyledPopoverContentWrapper = styled.div`
  ${getPopoverContentStyle()}
`;

export const StyledSplitButton = styled.button<SplitButtonOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  gap: 4px;
  padding: 0 12px;
  border-radius: 6px;
  cursor: pointer;
  ${({ styleVar, color, disabled }) => getStyleByStyleVar(styleVar, color, disabled)};
  ${({ sizeVar }) => getStyleBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)}
`;
