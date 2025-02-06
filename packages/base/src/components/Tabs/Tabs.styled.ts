import styled from '@emotion/styled';
import { Text } from '../Text';
import { css } from '@emotion/react';
import type { ColorTokens } from '../../styles';
import { colorTokens } from '../../styles';
import type { TabStyleVariantType, TabStyledProps, TabTextStyledProps } from './Tabs.types';

export const getHoverTabStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'INFO': {
      return css`
        ::after {
          content: '';
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: -2px;
          height: 2px;
          background: ${colorTokens.neutral500};
        }
      `;
    }
    default: {
      return null;
    }
  }
};

export const getWrapperStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'INFO': {
      return css`
        padding-inline: 16px;
      `;
    }
    default: {
      return null;
    }
  }
};

export const getActiveTriggerStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'INFO': {
      return css`
        ::after {
          content: '';
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: -2px;
          height: 2px;
          background: #000;
        }
      `;
    }
    default: {
      return null;
    }
  }
};

export const getPaddingStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'NORMAL': {
      return css`
        padding: 12px 16px;
      `;
    }
    case 'INFO': {
      return css`
        padding: 12px;
      `;
    }
  }
};

export const StyledTab = styled.div<TabStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  position: relative;
  user-select: none;

  ${({ styleVar }) => styleVar && getWrapperStyleByStyleVar(styleVar)};
  ${({ styleVar }) => styleVar && getPaddingStyleByStyleVar(styleVar)};

  /* hover style */
  ${({ isActive, isHover, styleVar }) => !isActive && isHover && styleVar && getHoverTabStyleByStyleVar(styleVar)}

  /* active style */
  ${({ isActive, styleVar }) => isActive && styleVar && getActiveTriggerStyleByStyleVar(styleVar)}
`;

export const getTextStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'NORMAL': {
      return css`
        color: ${colorTokens.neutral400};
      `;
    }
    case 'INFO': {
      return css`
        color: ${colorTokens.neutral500};
      `;
    }
  }
};

const getHoverTextStyleByStyleVar = (styleVar: TabStyleVariantType) => {
  switch (styleVar) {
    case 'NORMAL': {
      return css`
        color: ${colorTokens.neutral500};
      `;
    }
    case 'INFO': {
      return css`
        color: ${colorTokens.neutral700};
      `;
    }
    default: {
      return null;
    }
  }
};

export const getActiveTextStyleByStyleVar = (styleVar: TabStyleVariantType, activeColor?: ColorTokens) => {
  switch (styleVar) {
    case 'NORMAL': {
      return css`
        color: ${activeColor ? colorTokens[activeColor] : colorTokens.neutral700};
      `;
    }
    case 'INFO': {
      return css`
        color: ${colorTokens.neutral700};
      `;
    }
    default: {
      return css`
        color: ${colorTokens.primary300};
      `;
    }
  }
};

export const StyledTabText = styled(Text)<TabTextStyledProps>`
  cursor: pointer;

  ${({ styleVar }) => styleVar && getTextStyleByStyleVar(styleVar)};

  /* hover style */
  ${({ isHover, styleVar, isActive }) => !isActive && isHover && styleVar && getHoverTextStyleByStyleVar(styleVar)}

  /* active style */
  ${({ isActive, styleVar, activeColor }) =>
    isActive && styleVar && getActiveTextStyleByStyleVar(styleVar, activeColor)}
`;
