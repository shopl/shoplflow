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
  top: 3rem;

  border: 1px solid blue;

  .react-datepicker {
    border: 1px solid #eaeaea;
  }
`;
