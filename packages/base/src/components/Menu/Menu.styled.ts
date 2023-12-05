import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { MenuOptionProps } from './Menu.types';
import { getDisabledStyle } from '../../styles/utils/getDisabledStyle';
import { css } from '@emotion/react';

export const StyledMenu = styled.li<MenuOptionProps>`
  display: flex;
  flex-direction: row;
  padding: 6px;
  width: 100%;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 4px;
  background: ${colorTokens.neutral0};
  &:hover {
    background: ${colorTokens.neutral100};
  }
  ${({ disabled }) => disabled && getDisabledStyle(disabled)}
  ${({ isSelected, leftSource }) =>
    isSelected &&
    !leftSource &&
    css`
      background: ${colorTokens.neutral200};
      &:hover {
        background: ${colorTokens.neutral200};
      }
    `}
`;
