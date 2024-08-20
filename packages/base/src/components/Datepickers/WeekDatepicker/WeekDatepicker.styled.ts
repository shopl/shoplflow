import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';
import type { WeekDatepickerStyleType } from './WeekDatepicker.types';

// 날짜 동그라미 영역 스타일
export const getEachDateStyle = (props: WeekDatepickerStyleType) => {
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
export const getEachWeekAreaStyle = (props: WeekDatepickerStyleType & { isReady: boolean }) => {
  const { inRange, isStart, isEnd, isReady, disabled } = props;

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

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  gap: 16px;
  padding: 16px 24px 24px;
`;

export const WeekArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 8px;
`;

export const EachWeekArea = styled.div<WeekDatepickerStyleType & { isReady: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${(props) => getEachWeekAreaStyle(props)}
`;

export const EachWeekDate = styled.div<WeekDatepickerStyleType>`
  width: 48px;
  height: 48px;
  text-align: center;
  font-size: 14px;
  line-height: 48px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  ${(props) => getEachDateStyle(props)}
`;
