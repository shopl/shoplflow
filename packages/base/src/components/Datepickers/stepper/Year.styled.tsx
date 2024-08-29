import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

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
  width: 60px;

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
  text-align: center;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ isActive }) => isActive && colorTokens.primary300};
  color: ${({ isActive }) => isActive && colorTokens.neutral0};

  &:hover {
    background-color: ${({ isActive }) => !isActive && colorTokens.neutral100};
  }
`;
