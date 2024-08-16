import styled from '@emotion/styled';
import { colorTokens, fontWeightTokens } from '../../../styles';

export const SmallStyledDayDatepickerWrapper = styled.div`
  display: flex;
  width: 280px;
  height: 100%;
  flex-direction: column;

  & .dayDatepickerArea .react-datepicker {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 16px;
    box-sizing: border-box;
    font-family: 'Pretendard', 'Pretendard JP', sans-serif !important;

    & .highlighted-sundays {
      color: ${colorTokens.red300};
    }

    &__month-text--selected {
      color: #fff;
    }

    &-popper {
      width: 432px;
      padding-top: 0;
    }

    &__month-container {
      width: 100%;
    }

    &__month {
      margin: 0;
    }

    &__header {
      border: none;
      background-color: transparent;
      padding: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
    }

    &__month-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* gap: 1.75rem; */
    }

    &__month-text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      font-size: 16px;
      color: #333;
      font-weight: 400;

      :hover {
        background-color: ${colorTokens.primary100};
        color: ${colorTokens.primary300};
      }

      /* &--keyboard-selected {
        background-color: ${colorTokens.primary100};
        color: ${colorTokens.neutral700};
      } */

      &--selected:not(.react-datepicker--keyboard-selected) {
        background-color: ${colorTokens.primary300};
        color: ${colorTokens.neutral0};
      }
    }

    &__week {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &__day-names {
      width: 100%;
      height: 18px;
      margin: 8px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__day-name {
      color: ${colorTokens.neutral400};
      width: 32px;
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      line-height: 1rem;

      :last-of-type {
        margin: 0;
      }
    }

    &__day {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 32px;
      color: ${colorTokens.neutral700};
      border-radius: 50%;
      font-size: 14px;
      font-weight: 500;
      margin: 0px;

      &--outside-month {
        color: ${colorTokens.neutral400};
      }

      &--today {
        color: ${colorTokens.primary300};
        font-weight: ${fontWeightTokens.fontWeightRegular};
      }

      &--in-selecting-range:not(
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--in-range,
          .react-datepicker__quarter-text--in-range,
          .react-datepicker__year-text--in-range,
          .react-datepicker__day--selecting-range-start
        ) {
        background-color: ${colorTokens.primary100};
      }

      &--in-range {
        background-color: ${colorTokens.primary300};
        color: ${colorTokens.neutral0};
        position: relative;

        &:not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end) {
          border-radius: 0;
          background-color: ${colorTokens.primary100};
          color: ${colorTokens.primary300};
        }

        &:not(.react-datepicker__day--range-end):after {
          width: 4px;
          height: 100%;
          background-color: ${colorTokens.primary100};
          position: absolute;
          content: '';
          right: -4px;
          top: 0;
          z-index: 1;
        }

        &.react-datepicker__day--range-start {
          width: 32px;
          height: 32px;
          background-color: ${colorTokens.primary100};
          margin-right: 0;
          box-sizing: border-box;
          border: unset;
          border-radius: 50% 0 0 50%;
        }

        &.react-datepicker__day--range-end {
          width: 32px;
          height: 32px;
          background-color: ${colorTokens.primary100};
          box-sizing: border-box;
          border: unset;
          border-radius: 0 50% 50% 0;
        }
        &.react-datepicker__day--range-end.react-datepicker__day--range-start {
          width: 32px;
          height: 32px;
          background-color: ${colorTokens.primary100};
          box-sizing: border-box;
          border: unset;
          border-radius: 50%;
        }
        &.react-datepicker__day--range-start .each-day {
          width: 32px;
          height: 32px;
          background-color: ${colorTokens.primary300};
          border-radius: 100%;
        }

        &.react-datepicker__day--range-end .each-day {
          width: 32px;
          height: 32px;
          background-color: ${colorTokens.primary300};
          border-radius: 100%;
        }
      }

      &--selected {
        color: ${colorTokens.neutral0};
        background-color: ${colorTokens.primary300};
      }

      &--highlighted {
        color: ${colorTokens.neutral0};
        background-color: ${colorTokens.primary300};
      }

      &--disabled {
        cursor: not-allowed;
        opacity: 0.3;
        color: ${colorTokens.neutral700};

        &.react-datepicker__day--keyboard-selected {
          background-color: ${colorTokens.neutral200};
        }
        &.react-datepicker__day--excluded {
          color: ${colorTokens.neutral0};
        }
      }

      &:not(&--disabled):not(&--selected):not(&--highlighted):not(&--range-end):hover {
        color: ${colorTokens.primary300};
        background-color: ${colorTokens.primary100};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__year {
      &-wrapper {
        justify-content: center;
      }
    }
  }
`;

export const StyledDayDatepicker = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  & .dayDatepickerArea .react-datepicker {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 16px 30px 16px;
    box-sizing: border-box;
    font-family: 'Pretendard', 'Pretendard JP', sans-serif !important;

    & .highlighted-sundays {
      color: ${colorTokens.red300};
    }

    &__month-text--selected {
      color: #fff;
    }

    &-popper {
      width: 432px;
      padding-top: 0;
    }

    &__month-container {
      width: 100%;
    }

    &__month {
      margin: 12px 0 0;
    }

    &__header {
      border: none;
      background-color: transparent;
      padding: 0;
    }

    &__month-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* gap: 1.75rem; */
    }

    &__month-text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      font-size: 16px;
      color: #333;

      :hover {
        background-color: ${colorTokens.primary100};
        color: ${colorTokens.primary300};
      }

      /* &--keyboard-selected {
        background-color: ${colorTokens.primary100};
        color: ${colorTokens.neutral700};
      } */

      &--selected:not(.react-datepicker--keyboard-selected) {
        background-color: ${colorTokens.primary300};
        color: ${colorTokens.neutral0};
      }
    }

    &__week {
      margin-top: 8px;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &__day-names {
      height: 18px;
      margin: 12px 0 0;
    }

    &__day-name {
      width: 40px;
      margin: 0 10px 0 0;
      color: ${colorTokens.navy300};
      font-size: 13px;
      font-weight: 500;
      line-height: 1rem;

      :last-of-type {
        margin: 0;
      }
    }

    &__day {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin: 0 10px 0 0;
      color: ${colorTokens.neutral700};
      border-radius: 50%;
      font-size: 14px;
      font-weight: 500;

      &--outside-month {
        color: ${colorTokens.neutral400};
      }

      &--today {
        color: ${colorTokens.primary300};
        font-weight: ${fontWeightTokens.fontWeightRegular};
      }

      &--in-selecting-range:not(
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--in-range,
          .react-datepicker__quarter-text--in-range,
          .react-datepicker__year-text--in-range,
          .react-datepicker__day--selecting-range-start
        ) {
        background-color: ${colorTokens.primary100};
      }

      &--in-range {
        background-color: ${colorTokens.primary300};
        color: ${colorTokens.neutral0};
        position: relative;

        &:not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end) {
          border-radius: 0;
          background-color: ${colorTokens.primary100};
          color: ${colorTokens.primary300};
        }

        &:not(.react-datepicker__day--range-end):not(.react-datepicker__day--range-start):after {
          width: 10px;
          height: 100%;
          background-color: ${colorTokens.primary100};
          position: absolute;
          content: '';
          right: -10px;
          top: 0;
          z-index: 1;
        }

        &.react-datepicker__day--range-start {
          width: 50px;
          height: 40px;
          background-color: ${colorTokens.primary100};
          margin-right: 0;
          padding-right: 10px;
          box-sizing: border-box;
          border: unset;
          border-radius: 50% 0 0 50%;
        }

        &.react-datepicker__day--range-end {
          width: 40px;
          height: 40px;
          background-color: ${colorTokens.primary100};
          box-sizing: border-box;
          border: unset;
          border-radius: 0 50% 50% 0;
        }
        &.react-datepicker__day--range-end.react-datepicker__day--range-start {
          width: 40px;
          height: 40px;
          background-color: ${colorTokens.primary100};
          box-sizing: border-box;
          border: unset;
          border-radius: 50%;
          margin-right: 10px;
        }
        &.react-datepicker__day--range-start .each-day {
          width: 40px;
          height: 40px;
          background-color: ${colorTokens.primary300};
          border-radius: 100%;
        }

        &.react-datepicker__day--range-end .each-day {
          width: 40px;
          height: 40px;
          background-color: ${colorTokens.primary300};
          border-radius: 100%;
        }
      }

      &--selected {
        color: ${colorTokens.neutral0};
        background-color: ${colorTokens.primary300};
      }

      &--highlighted {
        color: ${colorTokens.neutral0};
        background-color: ${colorTokens.primary300};
      }

      &--disabled {
        cursor: not-allowed;
        opacity: 0.3;
        color: ${colorTokens.neutral700};

        &.react-datepicker__day--keyboard-selected {
          background-color: ${colorTokens.neutral200};
        }
        &.react-datepicker__day--excluded {
          color: ${colorTokens.neutral0};
        }
      }

      &:not(&--disabled):not(&--selected):not(&--highlighted):not(&--range-end):hover {
        color: ${colorTokens.primary300};
        background-color: ${colorTokens.primary100};
      }
    }

    &__year {
      &-wrapper {
        justify-content: center;
      }
    }
  }
`;
