import styled from '@emotion/styled';
import { Text } from '../Text';
import type { TabsLevel } from './Tabs.types';
import { css } from '@emotion/react';
import { colorTokens } from '../../styles';

export const getHoverTriggerStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level2': {
      return css`
        color: red;
      `;
    }
    case 'level3': {
      return css`
        color: red;
      `;
    }
    default: {
      return null;
    }
  }
};

export const getWrapperStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level3': {
      return css`
        padding-inline: 16px;
        height: 48px;
        ::after {
          content: ''; /* 가상 요소에는 content 속성이 필수 */
          position: absolute; /* 부모 요소를 기준으로 위치 지정 */
          left: 0;
          right: 0;
          bottom: 0px; /* 아래에서 시작 */
          height: 0px; /* 가상 요소의 높이 */
          background: #000; /* 배경 색상 */
          transition: transform 0.3s; /* 부드러운 애니메이션 효과 */
        }
      `;
    }
    default: {
      return css`
        padding-inline: 0px;
        height: 40px;
      `;
    }
  }
};

export const getActiveTriggerStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level2': {
      return css`
        color: red;
      `;
    }
    case 'level3': {
      return css`
        ::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 3px;
          height: 3px;
          background: #000;
          transition: height 0.3s ease;
        }
      `;
    }
    default: {
      return null;
    }
  }
};

export const StyledTab = styled.div<{ isActive: boolean; isHover: boolean; levelVar: TabsLevel }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  ${({ levelVar }) => getWrapperStyleByLevel(levelVar)};

  /* hover style */
  ${({ levelVar, isActive, isHover }) => !isActive && isHover && getHoverTriggerStyleByLevel(levelVar)}

  /* active style */
  ${({ isActive, levelVar }) => isActive && getActiveTriggerStyleByLevel(levelVar)}
`;

export const getTextStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level1': {
      return css`
        color: ${colorTokens.neutral500};
      `;
    }
    case 'level2': {
      return css`
        color: ${colorTokens.neutral350};
      `;
    }
    case 'level3': {
      return css`
        color: ${colorTokens.neutral500};
      `;
    }
  }
};

const getHoverTextStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level2': {
      return css`
        color: ${colorTokens.neutral500};
      `;
    }
    case 'level3': {
      return css`
        color: ${colorTokens.neutral700};
      `;
    }
    default: {
      return null;
    }
  }
};

export const getActiveTextStyleByLevel = (levelVar: TabsLevel) => {
  switch (levelVar) {
    case 'level2':
    case 'level3': {
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

export const StyledTabText = styled(Text)<{ levelVar: TabsLevel; isHover: boolean; isActive: boolean }>`
  cursor: pointer;
  transition: all 200ms ease;

  ${({ levelVar }) => getTextStyleByLevel(levelVar)};

  /* hover style */
  ${({ isHover, levelVar, isActive }) => !isActive && isHover && getHoverTextStyleByLevel(levelVar)}

  /* active style */
  ${({ isActive, levelVar }) => isActive && getActiveTextStyleByLevel(levelVar)}
`;

export const StyledTabPanel = styled.div``;
