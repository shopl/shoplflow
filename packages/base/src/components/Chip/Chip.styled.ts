import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ChipProps } from './Chip.types';
import type { TypographyTokens } from '../../styles';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const getLineTypographyBySizeVar = (sizeVar: ChipProps['sizeVar']): TypographyTokens => {
  switch (sizeVar) {
    case 'XS':
      return 'body3_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body2_400';
  }
};

const solidStyle = ({ isSelected, color, radius }: ChipProps) => css`
  padding: 7px 12px;
  gap: 4px;
  background: ${colorTokens.neutral150};
  border-radius: ${borderRadiusTokens.borderRadius06};
  & > span {
    color: ${colorTokens.neutral400};
  }
  &:hover {
    background: ${colorTokens.neutral200};
  }

  ${radius &&
  css`
    border-radius: ${borderRadiusTokens.borderRadius16};
  `};
  ${isSelected &&
  css`
    background: ${colorTokens[color!]};
    & > span {
      color: ${colorTokens['neutral0']};
    }
    &:hover {
      background: ${colorTokens[color!]};
    }
  `};
`;

export const StyledChip = styled.button<ChipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: fit-content;
  user-select: none;
  ${(props) => props.styleVar === 'SOLID' && solidStyle(props)};
  cursor: pointer;
`;
