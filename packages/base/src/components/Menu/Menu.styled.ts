import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { MenuOptionProps } from './Menu.types';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';
import { css } from '@emotion/react';
import { CHECKBOX_SYMBOL_KEY, RADIO_SYMBOL_KEY } from '../ControlButtons';
import { MUNUS_BUTTON_SYMBOL_KEY } from '../ControlButtons/MinusButton/MinusButton';

const getStylesBySizeVar = (sizeVar: MenuOptionProps['sizeVar']) => {
  switch (sizeVar) {
    case 'XS':
      return css`
        min-height: 28px;
      `;
    case 'S':
      return css`
        min-height: 36px;
      `;
    case 'M':
      return css`
        height: 48px;
      `;
    default:
      return css`
        height: 48px;
      `;
  }
};

export const getFontStylesBySizeVar = (sizeVar: MenuOptionProps['sizeVar']) => {
  switch (sizeVar) {
    case 'XS':
      return 'body2_400';
    case 'S':
      return 'body1_400';
    case 'M':
      return 'body1_400';
    default:
      return 'body1_400';
  }
};

export const StyledMenu = styled.li<MenuOptionProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  gap: 4px;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  ${({ sizeVar }) => getStylesBySizeVar(sizeVar)};
  &:hover {
    background: ${colorTokens.neutral400_5};
  }
  ${({ disabled }) => disabled && getDisabledStyle(disabled)}
  ${({ isSelected, leftSource }) =>
    isSelected === true &&
    (!leftSource ||
      (leftSource &&
        !leftSource.type[RADIO_SYMBOL_KEY] &&
        !leftSource.type[CHECKBOX_SYMBOL_KEY] &&
        !leftSource.type[MUNUS_BUTTON_SYMBOL_KEY])) &&
    css`
      background: ${colorTokens.neutral200};
      &:hover {
        background: ${colorTokens.neutral200};
      }
    `}
`;
