import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { WeekDatepickerStyleType } from './WeekDatepicker.types';

// 날짜 동그라미 영역 스타일
export const getEachDateStyle = (props: WeekDatepickerStyleType): SerializedStyles => {
  const { inRange, isStart, isEnd, disabled } = props;

  if (isStart || isEnd) {
    return css`
      background-color: ${colorTokens.primary300};
      color: ${colorTokens.neutral0};
    `;
  }

  if (inRange) {
    return css`
      background-color: ${colorTokens.primary100};
      color: ${colorTokens.neutral700};
    `;
  }

  if (disabled) {
    return css`
      color: ${colorTokens.neutral400};
      cursor: not-allowed;
    `;
  }

  return css`
    &:hover {
      background-color: ${colorTokens.primary100};
    }
  `;
};

// 날짜 래퍼 영역
export const getEachWeekAreaStyle = (
  props: WeekDatepickerStyleType & { isReady: boolean; sizeVar: 'S' | 'M' },
): SerializedStyles | undefined => {
  const { inRange, isStart, isEnd, isReady, disabled } = props;

  if (isStart && isEnd) {
    return;
  }

  if (isStart && isReady) {
    return css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 24px;
        background: ${colorTokens.primary100};
      }
    `;
  }

  if (isEnd && !isStart) {
    return css`
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 24px;
        background: ${colorTokens.primary100};
      }
    `;
  }

  if (inRange) {
    return css`
      background-color: ${colorTokens.primary100};
      color: ${colorTokens.neutral700};
    `;
  }

  if (disabled) {
    return css`
      cursor: not-allowed;
    `;
  }
};

const getWeekContainerStyleBySizeVar = (sizeVar: 'S' | 'M') => {
  if (sizeVar === 'S') {
    return css`
      width: 280px;
      max-width: 280px;
      gap: 8px;
      padding: 16px;
    `;
  }

  return css`
    width: 400px;
    max-width: 400px;
    gap: 16px;
    padding: 16px 24px 24px;
  `;
};

const getWeekAreaStyleBySizeVar = (sizeVar: 'S' | 'M') => {
  if (sizeVar === 'S') {
    return css`
      grid-row-gap: 0;
      background-color: ${colorTokens.neutral100};
    `;
  }

  return css`
    grid-row-gap: 8px;
    background-color: ${colorTokens.neutral0};
  `;
};

const getEachWeekAreaStyleBySizeVar = (sizeVar: 'S' | 'M') => {
  if (sizeVar === 'S') {
    return css`
      height: 32px;
    `;
  }

  return css`
    height: 48px;
  `;
};

const getEachWeekDateStyleBySizeVar = (sizeVar: 'S' | 'M') => {
  if (sizeVar === 'S') {
    return css`
      width: 100%;
      height: 32px;
      font-size: 12px;
      line-height: 16px;
      border-radius: 0;
    `;
  }

  return css`
    width: 48px;
    height: 48px;
    font-size: 14px;
    line-height: 48px;
    border-radius: 50%;
  `;
};

export const WeekContainer = styled.div<{ sizeVar: 'S' | 'M' }>`
  display: flex;
  flex-direction: column;

  ${({ sizeVar }) => getWeekContainerStyleBySizeVar(sizeVar)}
`;

export const WeekArea = styled.div<{ sizeVar: 'S' | 'M' }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 4px;
  overflow: hidden;

  ${({ sizeVar }) => getWeekAreaStyleBySizeVar(sizeVar)}
`;

export const EachWeekArea = styled.div<WeekDatepickerStyleType & { isReady: boolean; sizeVar: 'S' | 'M' }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ sizeVar }) => getEachWeekAreaStyleBySizeVar(sizeVar)}
  ${(props) => getEachWeekAreaStyle(props)}
`;

export const EachWeekDate = styled.div<WeekDatepickerStyleType & { sizeVar: 'S' | 'M' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  ${({ sizeVar }) => getEachWeekDateStyleBySizeVar(sizeVar)}
  ${(props) => getEachDateStyle(props)}
`;
