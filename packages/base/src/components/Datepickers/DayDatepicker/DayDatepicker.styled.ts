import styled from '@emotion/styled';
import { colorTokens, fontWeightTokens } from '../../../styles';

export const StyledDayDatepicker = styled.div<{
  modalHeight?: string;
  height?: string;
  isInitSelectedStyle?: boolean;
}>`
  display: flex;
  width: 100%;
  height: ${({ height, modalHeight }) =>
    height ? (modalHeight === '656px' ? `calc(${modalHeight} - 184px)` : '100%') : '100%'};
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
      gap: 1.75rem;
    }

    &__month-text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      font-size: 16px;
      color: #333;

      :hover {
        background-color: #eaf5fe;
        color: ${colorTokens.primary300};
      }

      &--selected {
        background-color: ${colorTokens.primary300};
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
      width: 2.5rem;
      margin: 0 0.625rem 0 0;
      color: ${colorTokens.navy300};
      font-size: 13px;
      font-weight: 500;
      line-height: 1rem;

      :last-of-type {
        margin: 0;
      }
    }

    &__day {
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      margin: 0 0.625rem 0 0;
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

      &--keyboard-selected {
        background-color: ${({ isInitSelectedStyle }) => (isInitSelectedStyle ? colorTokens.neutral0 : 'transparent')};
        color: ${colorTokens.neutral700};
      }

      &--in-selecting-range:not(
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--in-range,
          .react-datepicker__quarter-text--in-range,
          .react-datepicker__year-text--in-range,
          .react-datepicker__day--selecting-range-start
        ) {
        background-color: ${colorTokens.shopl100};
      }

      &--in-range {
        background-color: ${colorTokens.primary300};
        color: ${colorTokens.neutral0};
        position: relative;

        &:not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end) {
          border-radius: 0;
          background-color: ${colorTokens.shopl100};
          color: ${colorTokens.primary300};
        }

        &:not(.react-datepicker__day--range-end):not(.react-datepicker__day--range-start):after {
          width: 0.625rem;
          height: 100%;
          background-color: ${colorTokens.shopl100};
          position: absolute;
          content: '';
          right: -0.625rem;
          top: 0;
          z-index: 1;
        }

        &.react-datepicker__day--range-start {
          width: 50px;
          height: 40px;
          background-color: #eaf5ff;
          margin-right: 0;
          padding-right: 0.625rem;
          box-sizing: border-box;
          border: unset;
          border-radius: 50% 0 0 50%;
        }

        &.react-datepicker__day--range-end {
          width: 40px;
          height: 40px;
          background-color: #eaf5ff;
          box-sizing: border-box;
          border: unset;
          border-radius: 0 50% 50% 0;
        }
        &.react-datepicker__day--range-end.react-datepicker__day--range-start {
          width: 40px;
          height: 40px;
          background-color: #eaf5ff;
          box-sizing: border-box;
          border: unset;
          border-radius: 50%;
          margin-right: 0.625rem;
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
        background-color: ${colorTokens.shopl100};
      }
    }

    &__year {
      &-wrapper {
        justify-content: center;
      }
    }
  }
`;
