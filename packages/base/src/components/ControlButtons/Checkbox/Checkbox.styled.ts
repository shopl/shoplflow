import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import type { CheckboxOptionProps } from './Checkbox.types';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

const getStylesByStyleVariant = (
  styleVariant?: CheckboxOptionProps['styleVar'],
  isSelected?: CheckboxOptionProps['isSelected'],
) => {
  switch (styleVariant) {
    case 'PRIMARY':
      if (isSelected) {
        return css`
          background: ${colorTokens.primary300};
          border: 1.5px solid ${colorTokens.primary300};
          & > svg > path {
            fill: ${colorTokens.neutral0};
          }
          &:hover {
            background: ${colorTokens.primary400};
          }
        `;
      }
      return css`
        background: ${colorTokens.neutral200};
        border: 1.5px solid ${colorTokens.neutral200};
        border-radius: 4px;
        &:hover {
          background: ${colorTokens.neutral300};
        }
        & > svg > path {
          fill: ${colorTokens.neutral0};
        }
      `;
    case 'LINE':
      if (isSelected) {
        return css`
          border: 1.5px solid ${colorTokens.primary300};
          background: transparent;
          border-radius: 4px;
          & > svg > path {
            fill: ${colorTokens.primary300};
          }
          &:hover {
            border: 1.5px solid ${colorTokens.primary400};
            & > svg > path {
              fill: ${colorTokens.primary400};
            }
          }
        `;
      }
      return css`
        background: transparent;
        border: 1.5px solid ${colorTokens.neutral200};
        border-radius: 4px;
        & > svg > path {
          fill: ${colorTokens.neutral200};
        }
        &:hover {
          border: 1.5px solid ${colorTokens.neutral300};
          & > svg > path {
            fill: ${colorTokens.neutral300};
          }
        }
      `;
    default:
      return '';
  }
};

export const StyledCheckbox = styled.button<CheckboxOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background: ${colorTokens.neutral200};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  ${({ styleVar, isSelected }) => getStylesByStyleVariant(styleVar, isSelected)};
  ${({ disabled }) => disabled && getDisabledStyle(disabled)};
`;

export const Container = styled.button`
  padding: 4px;
  width: fit-content;
  height: fit-content;
`;
