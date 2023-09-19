import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ChipProps, ChipStyleVariantType } from './Chip.types';
import { borderRadiusTokens, colorTokens, typographyTokens } from '../../styles';

export const getTypographyDefault = (styleVar: ChipStyleVariantType) => {
  switch (styleVar) {
    case 'PILL':
      return typographyTokens.body1_400;
    case 'RECTANGLE':
      return typographyTokens.body1_400;
    case 'LINE':
      return typographyTokens.body3_400;
  }
};

const pillStyle = css`
  padding: 7px 12px;
  gap: 4px;
  color: ${colorTokens.neutral400};
  background: ${colorTokens.neutral150};
  border-radius: ${borderRadiusTokens.borderRadius16};
`;
const rectangleStyle = css`
  padding: 7px 12px;
  gap: 4px;
  background: ${colorTokens.neutral150};
  border-radius: ${borderRadiusTokens.borderRadius06};
`;
const lineStyle = css`
  gap: 4px;
  padding: 8px 12px;
  color: ${colorTokens.neutral700};
`;

export const StyledChip = styled.li<ChipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${({ styleVar }) => styleVar === 'PILL' && pillStyle};
  ${({ styleVar }) => styleVar === 'RECTANGLE' && rectangleStyle};
  ${({ styleVar }) => styleVar === 'LINE' && lineStyle};
  cursor: pointer;
`;
