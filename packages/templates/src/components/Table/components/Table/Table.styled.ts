import styled from '@emotion/styled';
import { colorTokens, IconButton } from '@shoplflow/base';
import type { CSSProperties } from 'react';

export const TableContainer = styled.div<{
  hasToolbar?: boolean;
}>`
  border: ${({ hasToolbar }) => !hasToolbar && `1px solid ${colorTokens.neutral200}`};
  border-radius: 8px;
  background-color: ${colorTokens.neutral0};
  width: 100%;
  max-width: 100%;

  .resizer {
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    width: 2px;
    background: ${colorTokens.neutral700};
    cursor: col-resize;
    user-select: none;
    touch-action: none;
  }

  .resizer.isResizing {
    background: ${colorTokens.neutral700};
    opacity: 1;
  }

  @media (hover: hover) {
    .resizer {
      opacity: 0;
    }

    *:hover > .resizer {
      opacity: 1;
    }
  }
`;

export const TableHeader = styled.thead`
  color: ${colorTokens.neutral400};
  background-color: ${colorTokens.neutral100};
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;

  tr {
    border-radius: 8px 8px 0 0;
  }

  th {
    position: relative;
    padding: 8px;
    height: 48px;
    min-height: 48px;
    background-color: ${colorTokens.neutral100};
    vertical-align: middle;
    // 일반 컬럼의 border를 가상 요소로 처리
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background-color: ${colorTokens.neutral200};
      pointer-events: none;
    }

    // Fixed border for multi-column headers (colspan)
    &[colspan] {
      position: relative;

      // Ensure the right border is visible for colspan cells
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background-color: ${colorTokens.neutral200};
        pointer-events: none;
        display: block;
      }

      // Add bottom border for spanning headers to make them visually distinct
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${colorTokens.neutral200};
        pointer-events: none;
      }
    }

    // fixed 컬럼의 border를 별도의 가상 요소로 처리
    &[data-pinned='left']::before,
    &[data-pinned='right']::before {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 1px;
      background-color: ${colorTokens.neutral200};
      pointer-events: none;
      z-index: 5;
    }

    &[data-pinned='left']::before {
      right: 0;
    }

    &[data-pinned='right']::before {
      left: 0;
    }
    &:last-child {
      border-right: none;
    }

    &[data-last-left-pinned='true'] {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -4px; // border 바깥으로 이동
        height: 100%;
        width: 4px;
        pointer-events: none;
        z-index: 11;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
      }
    }

    &[data-first-right-pinned='true'] {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -5px; // border 바깥으로 이동
        height: 100%;
        width: 4px;
        pointer-events: none;
        z-index: 11;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
      }
    }
  }

  th:last-of-type::after {
    display: none;
  }
`;

export const TableRow = styled.tr`
  &.clickable:hover td {
    background-color: ${colorTokens.neutral400_5};
    cursor: pointer;
  }

  &:hover td[data-no-hover='true'] {
    background-color: ${colorTokens.neutral400_5};
  }
`;

export const TableHead = styled.th`
  .table-head[data-filter-open='true'] {
    background-color: black;
  }
  & span {
    color: ${colorTokens.neutral400};
  }
`;

export const TableRootContainer = styled.div<{ hasFilterBar?: boolean; hasToolbar?: boolean }>`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  border: ${({ hasFilterBar, hasToolbar }) => hasFilterBar && !hasToolbar && `1px solid ${colorTokens.neutral200}`};
  border-radius: ${({ hasFilterBar, hasToolbar }) => (hasFilterBar && !hasToolbar ? '8px 8px 0 0' : '8px')};

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const HeaderTableContainer = styled.div<{
  stickyHeaderMarginTop?: number;
  isSticky?: boolean;
  hasHeader?: boolean;
}>`
  width: 100%;
  z-index: 15;
  position: ${({ isSticky }) => (isSticky ? 'sticky' : '')};
  top: ${({ stickyHeaderMarginTop }) => stickyHeaderMarginTop}px;
  overflow-x: hidden;
  border-radius: ${({ hasHeader }) => (!hasHeader ? '8px 8px 0 0' : '0')};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const BodyTableContainer = styled.div<{
  isFetching?: boolean;
  hasPagination?: boolean;
}>`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  border-radius: ${({ hasPagination }) => (hasPagination ? '0 0 8px 8px' : '0')};

  opacity: ${({ isFetching }) => isFetching && 0.7};
  pointer-events: ${({ isFetching }) => isFetching && 'none'};
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const TableCell = styled.td`
  position: relative;
  padding: 8px;
  vertical-align: middle;
  background-color: ${colorTokens.neutral0};

  &:has(li) {
    padding: 0;
  }

  &[data-last-left-pinned='true'] {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -4px; // border 바깥으로 이동
      height: 100%;
      width: 4px;
      pointer-events: none;
      z-index: 11;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
    }
  }

  &[data-first-right-pinned='true'] {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -4px; // border 바깥으로 이동
      height: 100%;
      width: 4px;
      pointer-events: none;
      z-index: 11;
      background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
    }
  }
`;

export const TableBody = styled.tbody<{
  isEmpty?: boolean;
  isClickable?: boolean;
  innerBorder?: CSSProperties['border'];
}>`
  color: ${colorTokens.neutral700};
  font-size: 14px;
  position: relative;

  tr {
    height: 60px;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

    &:not(:last-of-type) {
      border-bottom: ${({ innerBorder }) => innerBorder ?? '1px solid #eaeaea'};
    }

    &:hover {
      background-color: ${colorTokens.neutral100};
    }

    // 데이터가 minRows 이하여서 빈칸을 채워준 경우 호버 액션, 커서 액션 모두 OFF
    &[data-empty='true'] {
      border: none; /* 테두리 제거 */
      background-color: transparent; /* 배경색도 투명 처리 (선택 사항) */
      cursor: default;

      &:hover {
        background-color: unset;
      }

      td {
        cursor: default;
      }
    }
  }

  td {
    padding: 8px;
    vertical-align: middle;
    background-color: ${colorTokens.neutral0};
    &:not(:first-of-type) {
      border-left: ${({ innerBorder }) => innerBorder ?? 'none'};
    }
  }
`;

export const PaginationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  border-top: ${`1px solid ${colorTokens.neutral200}`};

  .table-pagination {
    border-top: none;
  }
`;

export const BottomContainer = styled.div<{ isEndOfPage: boolean; hasFilterBar?: boolean; hasToolbar?: boolean }>`
  position: sticky;
  width: 100%;
  bottom: 0;
  background-color: ${colorTokens.neutral0};
  z-index: 11;
  border-radius: ${({ isEndOfPage }) => isEndOfPage && '0 0 12px 12px'};
  border: ${({ hasFilterBar, hasToolbar }) => hasFilterBar && !hasToolbar && `1px solid ${colorTokens.neutral200}`};
  border-top: none;
`;

export const ScrollContainer = styled.div<{ isPagination?: boolean }>`
  height: 6px;
  position: absolute;
  bottom: 50px;
  width: 100%;
  z-index: 12;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: inherit;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colorTokens.neutral400};
    border-radius: 100px;
  }
`;

export const TableResizer = styled.div``;

export const EmptySource = styled.div`
  width: 60px;
`;

export const PaginationLeftSlot = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SmallIconButton = styled(IconButton)`
  svg {
    width: 12px !important;
    height: 12px !important;
  }
`;
