import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 32px;
  gap: 8px;
`;

export const Month = styled.p`
  font-size: 18px;
  color: ${colorTokens.neutral700};
  cursor: pointer;
`;

export const DatePickerWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 36px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 10px 30px 0px rgba(51, 51, 51, 0.2);
  height: fit-content;
  padding: 16px 24px 24px 24px;
  background-color: ${colorTokens.neutral0};

  & .react-datepicker {
    padding: 0px !important;

    &__header--custom {
      margin-bottom: 16px;
    }

    &__month-wrapper {
      column-gap: 8px;
      margin-top: 8px;
    }
  }
`;
