import styled from '@emotion/styled';
import type { TagOptionProps } from './Tag.types';
import type { TypographyTokens } from '../../styles';
import { colorTokens } from '../../styles';
import { css } from '@emotion/react';
import { getNextColor } from '../../utils/getNextColor';

export const getTypographyBySize = (size?: TagOptionProps['sizeVar']): TypographyTokens => {
  switch (size) {
    case 'XS':
      return 'caption_400';
    case 'S':
      return 'caption_400';
    case 'M':
      return 'body2_400';
    default:
      return 'body2_400';
  }
};

const getTagStyleBySize = (size?: TagOptionProps['sizeVar']) => {
  switch (size) {
    case 'XS':
      return css`
        height: 20px;
        padding: 0 4px;
        border-radius: 4px;
      `;
    case 'S':
      return css`
        height: 24px;
        padding: 0 8px;
        border-radius: 4px;
      `;
    case 'M':
      return css`
        padding: 4px 8px;
        height: 32px;
        border-radius: 6px;
      `;
    default:
      return css`
        padding: 4px 8px;
        height: 32px;
      `;
  }
};

const getRadiusBySize = (size?: TagOptionProps['sizeVar']) => {
  switch (size) {
    case 'XS':
      return css`
        border-radius: 12px;
      `;
    case 'S':
      return css`
        border-radius: 16px;
      `;
    case 'M':
      return css`
        border-radius: 16px;
      `;
    default:
      return css`
        border-radius: 16px;
      `;
  }
};
const getColorsByStyleVariant = (
  styleVariant?: TagOptionProps['styleVar'],
  color: TagOptionProps['color'] = 'neutral700',
) => {
  switch (styleVariant) {
    case 'SOLID':
      return css`
        background: ${colorTokens[color]};
        color: ${colorTokens.neutral0};
      `;
    case 'TINT':
      return css`
        background: ${colorTokens[getNextColor(color, -2)]};
        color: ${colorTokens[color]};
      `;
    case 'LINE':
      return css`
        background: transparent;
        color: ${colorTokens[color]};
        border: 1px solid ${colorTokens[color]};
      `;
    default:
      return css`
        background: ${colorTokens[color]};
        color: ${colorTokens.neutral0};
      `;
  }
};

export const StyledTag = styled.div<TagOptionProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: default;
  gap: 2px;
  ${({ sizeVar }) => getTagStyleBySize(sizeVar)};
  ${({ color, styleVar }) => getColorsByStyleVariant(styleVar, color)};
  ${({ radius, sizeVar }) => radius && getRadiusBySize(sizeVar)};
`;
