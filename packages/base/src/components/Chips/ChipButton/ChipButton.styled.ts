import styled from '@emotion/styled';
import type { TypographyTokens } from '../../../styles';
import type { ChipButtonProps } from './ChipButton.types';
import { css } from '@emotion/react';
import { colorTokens } from '../../../styles';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

export const getLineTypographyBySizeVar = (sizeVar: ChipButtonProps['sizeVar']): TypographyTokens => {
  switch (sizeVar) {
    case 'XS':
      return 'caption_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body2_400';
  }
};

type ChipButtonStyledProps = ChipButtonProps & {
  $isSelected?: boolean;
  $selectedBackground?: ChipButtonProps['selectedBackground'];
  $selectedBorderColor?: ChipButtonProps['selectedBorderColor'];
};

const defaultSelectedBackground = (sizeVar: ChipButtonProps['sizeVar']) =>
  sizeVar === 'XS' ? colorTokens.neutral400_5 : colorTokens.neutral150;

const lineStyle = ({ sizeVar, $isSelected, $selectedBackground, $selectedBorderColor }: ChipButtonStyledProps) => {
  const selectedBg = $selectedBackground ? colorTokens[$selectedBackground] : defaultSelectedBackground(sizeVar);
  const selectedBorder = $selectedBorderColor ? colorTokens[$selectedBorderColor] : colorTokens.neutral300;

  return css`
    border: 1px solid ${colorTokens.neutral300};
    border-radius: 999px;
    background: ${colorTokens.neutral0};

    & > span {
      color: ${colorTokens.neutral400};
    }

    &:hover {
      background: ${colorTokens.neutral400_5};
    }

    ${$isSelected &&
    css`
      background: ${selectedBg};
      border-color: ${selectedBorder};

      & > span {
        color: ${colorTokens.neutral700};
      }

      &:hover {
        background: ${selectedBg};
        border-color: ${selectedBorder};
      }
    `}
  `;
};

const getStyleBySizeVar = (sizeVar: ChipButtonProps['sizeVar']) => {
  switch (sizeVar) {
    case 'XS':
      return css`
        padding: 4px 6px;
      `;
    case 'S':
      return css`
        min-height: 32px;
        padding: 6px 10px;
      `;
    default:
      return css`
        min-height: 32px;
        padding: 6px 10px;
      `;
  }
};

export const StyledChipButton = styled.button<ChipButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: fit-content;
  width: fit-content;
  gap: 2px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  ${({ sizeVar }) => getStyleBySizeVar(sizeVar)};
  ${(props) => props.styleVar === 'LINE' && lineStyle(props)};
  ${({ disabled }) => getDisabledStyle(disabled)};
  ${({ background }) =>
    background &&
    css`
      background: ${colorTokens[background]};
    `}
`;
