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

  border: 1px solid #eaeaea;
  box-shadow: 0px 10px 30px 0px rgba(51, 51, 51, 0.2);
  .react-datepicker {
    border: 1px solid #eaeaea;
  }
`;

// Select styles
export const Container = styled.div`
  border-radius: 4px;
  background-color: ${colorTokens.neutral0};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  padding: 4px;
  z-index: 10;
  position: relative;
  top: 0px;
  left: 0px;

  & .simplebar-placeholder {
    height: 0px !important;
  }
`;

export const OptionList = styled.ul<{ maxHeight?: string }>`
  height: fit-content;

  ${({ maxHeight }) => {
    if (maxHeight) {
      return `
                max-height: ${maxHeight};
                overflow: auto;
                overflow-y: scroll;        

                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */

                &::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera*/
                }
            `;
    }
  }}
`;

export const OptionListItem = styled.li<{ isActive?: boolean }>`
  padding: 7px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  white-space: break-spaces;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ isActive }) => isActive && colorTokens.primary300};
  color: ${({ isActive }) => isActive && colorTokens.neutral0};

  &:hover {
    background-color: ${({ isActive }) => !isActive && colorTokens.neutral100};
  }
`;
