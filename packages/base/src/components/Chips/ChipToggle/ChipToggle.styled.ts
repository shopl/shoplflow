import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ChipToggleProps } from './ChipToggle.types';
import type { TypographyTokens } from '../../../styles';
import { borderRadiusTokens, colorTokens } from '../../../styles';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';

export const getLineTypographyBySizeVar = (sizeVar: ChipToggleProps['sizeVar']): TypographyTokens => {
  switch (sizeVar) {
    case 'XS':
      return 'body3_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body2_400';
  }
};

const solidStyle = ({
  isSelected,
  color,
  $radius,
}: ChipToggleProps & {
  $radius?: boolean;
}) => css`
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

  ${$radius &&
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

export const StyledChip = styled.button<
  ChipToggleProps & {
    $radius?: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: fit-content;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  ${(props) => props.styleVar === 'SOLID' && solidStyle(props)};
  ${({ disabled }) => getDisabledStyle(disabled)};
`;
