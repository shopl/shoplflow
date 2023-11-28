import styled from '@emotion/styled';
import type { TypographyTokens } from '../../../styles';
import type { ChipButtonProps } from './ChipButton.types';
import { css } from '@emotion/react';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { getNextColor } from '../../../utils/getNextColor';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

export const getLineTypographyBySizeVar = (sizeVar: ChipButtonProps['sizeVar']): TypographyTokens => {
  switch (sizeVar) {
    case 'XS':
      return 'caption_400';
    case 'S':
      return 'body3_400';
    default:
      return 'body3_400';
  }
};

const lineStyle = ({ color }: ChipButtonProps) => css`
  background: ${colorTokens.neutral0};
  border: 1px solid ${colorTokens[color!]};
  border-radius: ${borderRadiusTokens.borderRadius20};
  &:hover {
    border: 1px solid ${colorTokens[getNextColor(color!, 2)]};
  }
  & > span {
    color: ${colorTokens[getNextColor(color!, 4)]};
  }
`;

const getStyleBySizeVar = (sizeVar: ChipButtonProps['sizeVar']) => {
  switch (sizeVar) {
    case 'XS':
      return css`
        padding: 4px 8px;
      `;
    case 'S':
      return css`
        padding: 7px 12px;
      `;
    default:
      return css`
        padding: 7px 12px;
      `;
  }
};
export const StyledChipButton = styled.button<ChipButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: fit-content;
  width: fit-content;
  gap: 4px;
  cursor: pointer;
  ${(props) => props.styleVar === 'LINE' && lineStyle(props)};
  background: ${({ background }) => background && colorTokens[background]};
  ${({ sizeVar }) => getStyleBySizeVar(sizeVar)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
