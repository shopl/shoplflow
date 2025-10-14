import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import type { CheckboxOptionProps } from './Checkbox.types';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { getDomain } from '../../../hooks';

const getStylesByStyleVariant = (
  styleVariant?: CheckboxOptionProps['styleVar'],
  isSelected?: CheckboxOptionProps['isSelected'],
  isHovered?: boolean,
  readOnly?: boolean,
) => {
  const domain = getDomain();
  const primaryColor = domain === 'hada' ? colorTokens.neutral700 : colorTokens.primary300;
  const primaryHoverColor = domain === 'hada' ? colorTokens.neutral700 : colorTokens.primary400;

  switch (styleVariant) {
    case 'PRIMARY':
      if (isSelected) {
        return css`
          background: ${primaryColor};
          border: 1.5px solid ${primaryColor};
          & > svg > path {
            fill: ${colorTokens.neutral0};
          }
          ${isHovered &&
          !readOnly &&
          css`
            border: 1.5px solid ${primaryHoverColor};
            background: ${primaryHoverColor};
          `}
        `;
      }
      return css`
        background: ${colorTokens.neutral200};
        border: 1.5px solid ${colorTokens.neutral200};
        border-radius: 4px;
        ${isHovered &&
        !readOnly &&
        css`
          border: 1.5px solid ${colorTokens.neutral300};
          background: ${colorTokens.neutral300};
        `}

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
          ${isHovered &&
          !readOnly &&
          css`
            border: 1.5px solid ${colorTokens.primary400};
            & > svg > path {
              fill: ${colorTokens.primary400};
            }
          `}
        `;
      }
      return css`
        background: transparent;
        border: 1.5px solid ${colorTokens.neutral200};
        border-radius: 4px;
        & > svg > path {
          fill: ${colorTokens.neutral200};
        }
        ${isHovered &&
        !readOnly &&
        css`
          border: 1.5px solid ${colorTokens.neutral300};
          & > svg > path {
            fill: ${colorTokens.neutral300};
          }
        `}
      `;
    default:
      return '';
  }
};

export const StyledCheckHiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`;

export const StyledCheckbox = styled.label<
  CheckboxOptionProps & {
    isHovered: boolean;
    readOnly?: boolean;
  }
>`
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
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'pointer')};
  ${({ styleVar, isSelected, isHovered, readOnly }) =>
    getStylesByStyleVariant(styleVar, isSelected, isHovered, readOnly)};
  ${({ disabled }) => getDisabledStyle(disabled)}
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
`;
