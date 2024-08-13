import styled from '@emotion/styled';
import { colorTokens, fontWeightTokens } from '../../../styles';

export const Container = styled.div<{ modalHeight?: string }>`
  display: flex;
  width: 100%;
  height: ${({ modalHeight }) => (modalHeight === '656px' ? `calc(${modalHeight} - 184px)` : '100%')};
  flex-direction: column;
`;

export const WeekContainer = styled.div`
  flex: 1;
  padding: 16px 0 0;
`;

export const WeekArea = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 48px);
  grid-row-gap: 8px;
  /* overflow-y: auto; */
  margin: 16px 0;
  padding: 0 32px;
  height: 272px;

  & > div:nth-of-type(6n) {
    margin-right: 0;
  }
`;

export const EachWeekArea = styled.div`
  width: 48px;
  height: 48px;
  text-align: center;
  font-size: 14px;
  line-height: 48px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  &:not(.week-disabled):hover {
    background-color: ${colorTokens.primary100};
  }

  &.week-disabled {
    cursor: not-allowed;
    color: ${colorTokens.neutral200};
  }

  &.week-in-range {
    background-color: ${colorTokens.primary300};
    color: ${colorTokens.neutral0};
    position: relative;

    &:not(.week-range-start):not(.week-range-end):not(.only-week-in-range) {
      border-radius: 0;
      background-color: ${colorTokens.primary100};
      color: ${colorTokens.primary300};
    }

    &.week-range-start {
      width: 48px;
      height: 48px;
      background-color: #eaf5ff;
      margin-right: 0;
      padding-right: 36px;
      box-sizing: border-box;
      border: unset;
      border-radius: 50% 0 0 50%;
    }

    &.week-range-start:nth-of-type(6n) {
      width: 48px;
      height: 48px;
      background-color: #eaf5ff;
      margin-right: 0;
      padding-right: 36px;
      box-sizing: border-box;
      border: unset;
      border-radius: 50% 0 0 50%;
    }

    &.week-range-end {
      width: 48px;
      height: 48px;
      background-color: #eaf5ff;
      box-sizing: border-box;
      border: unset;
      border-radius: 0 50% 50% 0;
    }

    &.week-range-start .each-day,
    &.week-range-end .each-day {
      width: 48px;
      height: 48px;
      background-color: ${colorTokens.primary300};
      border-radius: 100%;
    }
  }
`;

export const DateContentWrapper = styled.div`
  display: flex;
  height: 72px;
  padding: 12px 0;
  margin-inline: 24px;
  gap: 8px;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: ${fontWeightTokens.fontWeightBold};
  text-align: center;
  line-height: 20px;
  border-top: 1px solid ${colorTokens.neutral200};
  color: ${colorTokens.primary300};
`;
