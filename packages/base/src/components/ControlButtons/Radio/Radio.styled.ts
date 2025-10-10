import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colorTokens } from '../../../styles';
import type { RadioOptionProps } from './Radio.types';
import { getDisabledStyle } from '../../../styles/utils/getDisabledStyle';
import { getDomain } from '../../../hooks';

const getSelectedStyle = (isHovered: boolean) => {
  const domain = getDomain();
  const selectedStrokeColor = domain === 'hada' ? colorTokens.neutral700 : colorTokens.primary300;

  return css`
    & > svg > circle {
      stroke: ${selectedStrokeColor};
    }
    ${isHovered &&
    css`
      & > svg > circle {
        stroke: ${colorTokens.primary400};
      }
    `}
  `;
};

export const StyledRadio = styled.div<
  RadioOptionProps & {
    isHovered: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  ${({ isHovered }) => css`
    & > svg > circle {
      stroke: ${colorTokens.neutral200};
    }
    ${isHovered &&
    css`
      & > svg > circle {
        stroke: ${colorTokens.neutral300};
      }
    `}
  `}
  cursor: pointer;
  ${({ isSelected, isHovered }) => isSelected && getSelectedStyle(isHovered)}
  ${({ disabled }) => getDisabledStyle(disabled)}
`;
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 4px;
  width: fit-content;
  height: fit-content;
`;
