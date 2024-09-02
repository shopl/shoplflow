import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';
import { css } from '@emotion/react';

// 날짜 동그라미 영역 스타일
export const getEachDateStyle = (props: { isSelected?: boolean; disabled?: boolean }) => {
  const { isSelected, disabled } = props;

  if (isSelected) {
    return css`
      background-color: ${colorTokens.primary300};
      color: ${colorTokens.neutral0};
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
export const getEachYearAreaStyle = (props: { isSelected?: boolean; disabled?: boolean }) => {
  const { disabled } = props;

  if (disabled) {
    return css`
      cursor: not-allowed;
    `;
  }
};

export const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  gap: 16px;
  padding: 16px 24px 24px;
`;

export const YearArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 16px;
`;

export const EachYearArea = styled.div<{ isSelected?: boolean; disabled?: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;

  ${(props) => getEachYearAreaStyle(props)}
`;

export const EachYearDate = styled.div<{ isSelected?: boolean; disabled?: boolean }>`
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

  user-select: none;

  ${(props) => getEachDateStyle(props)}
`;
