import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { MenuOptionProps } from './Menu.types';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';
import { css } from '@emotion/react';

const getStylesBySizeVar = (sizeVar: MenuOptionProps['sizeVar']) => {
  switch (sizeVar) {
    case 'XS':
      return css`
        height: 28px;
      `;
    case 'S':
      return css`
        height: 36px;
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
    !leftSource &&
    css`
      background: ${colorTokens.neutral200};
      &:hover {
        background: ${colorTokens.neutral200};
      }
    `}
`;
