import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

import { colorTokens, fontWeightTokens, typographyTokens } from '@shoplflow/base';

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
  background-color: ${colorTokens.neutral100};

  tr {
    border-radius: 8px 8px 0 0;
  }

  th:last-of-type::after {
    display: none;
  }
`;

export const TableRow = styled.tr`
  &.clickable[data-has-pinned='true']:hover td {
    background-color: ${colorTokens.neutral100};
  }

  &.clickable:hover td {
    background-color: ${colorTokens.neutral400_5};
    cursor: pointer;

    /* neutral400_5 컬럼의 경우 호버 시 neutral150 컬러 적용 */
    &[data-has-custom-style='true'] {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-color: ${colorTokens.neutral400_5};
        pointer-events: none;
      }
    }
  }

  &.clickable[data-has-pinned='true']:hover td[data-no-hover='true'] {
    background-color: ${colorTokens.neutral100};
  }

  &:hover td[data-no-hover='true'] {
    background-color: ${colorTokens.neutral400_5};
  }
`;

export const TableHead = styled.th<{
  sortable?: boolean;
  filterable?: boolean;
}>`
  padding: ${({ sortable, filterable }) => (sortable || filterable ? '4px' : '8px')};
  height: 48px;
  font-weight: ${fontWeightTokens.fontWeightRegular};
  line-height: 16px;
  font-size: 13px;
  border-bottom: 1px solid ${colorTokens.neutral200};
  border-right: 1px solid ${colorTokens.neutral200};

  position: relative;
  background-color: ${colorTokens.neutral100};
  vertical-align: middle;
  // 고정 컬럼의 border를 가상 요소로 처리하여 스크롤 시 고정되도록 함
  // borderRight: 'none'이 설정된 경우 ::after를 표시하지 않음
  &[data-pinned='left']:not([data-last-left-pinned='true']):not([data-no-border-right='true']) {
    border-right: none;
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
  }

  // Fixed border for multi-column headers (colspan)
  &[colspan] {
    position: relative;

    // Ensure the right border is visible for colspan cells
    // *주석 처리한 이유: 가상 요소로 border를 처리하여 바디 셀에 있는 borderRight과 너비가 다름 (borderRight 스타일 새로 추가 및 last-left-pinned 스타일에는 borderRight 스타일 적용 X) 이슈티켓 SH-16534
    /* &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background-color: ${colorTokens.neutral200};
      pointer-events: none;
      display: block;
    } */

    // Add bottom border for spanning headers to make them visually distinct
    /* &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${colorTokens.neutral200};
      pointer-events: none;
    } */
  }

  // fixed 컬럼의 border를 별도의 가상 요소로 처리
  /* &[data-pinned='left']::before,
  &[data-pinned='right']::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: ${colorTokens.neutral200};
    pointer-events: none;
    z-index: 5;
  } */

  &[data-pinned='left']::before {
    right: 0;
  }

  &[data-pinned='right']::before {
    left: 0;
  }
  &:last-child {
    border-right: none;

    /* &[data-first-right-pinned='true'] {
      border-bottom: 1px solid ${colorTokens.neutral200};
    } */
  }

  &[data-last-left-pinned='true'] {
    /* //!고정 컬럼은 borderRight 스타일 적용 X */
    border-right: none;
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

  .table-head[data-filter-open='true'] {
    background-color: black;
  }
  & span {
    color: ${colorTokens.neutral400};
  }
`;

export const TableRootContainer = styled.div<{
  hasFilterBar?: boolean;
  hasToolbar?: boolean;
}>`
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
  z-index: 12;
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
  hasFooter?: boolean;
  bodyRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
}>`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  border-radius: ${({ hasPagination, hasFooter }) => (hasPagination || hasFooter ? '0' : '0 0 8px 8px')};

  opacity: ${({ isFetching }) => isFetching && 0.7};
  pointer-events: ${({ isFetching }) => isFetching && 'none'};
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const FooterTableContainer = styled.div<{
  isSticky?: boolean;
  hasPagination?: boolean;
  hasHeader?: boolean;
}>`
  width: 100%;
  z-index: 11;
  position: ${({ isSticky }) => (isSticky ? 'sticky' : '')};
  bottom: 0;
  overflow-x: hidden;
  border-radius: ${({ hasPagination, hasHeader }) => {
    if (hasPagination) return '0';
    if (hasHeader) return '0 0 8px 8px';
    return '0 0 8px 8px';
  }};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const TableFooter = styled.tfoot`
  color: ${colorTokens.neutral400};
  ${typographyTokens.body2_400};
  border-top: ${`1px solid ${colorTokens.neutral200}`};

  tr {
    border-radius: 0 0 8px 8px;
  }

  td:last-of-type::after {
    display: none;
  }
`;

export const TableFoot = styled.td<{
  sortable?: boolean;
  filterable?: boolean;
}>`
  padding: ${({ sortable, filterable }) => (sortable || filterable ? '4px' : '8px')};
  height: 48px;
  min-height: 48px;
  font-weight: ${fontWeightTokens.fontWeightRegular};
  line-height: 16px;
  font-size: 13px;

  position: relative;
  vertical-align: middle;

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

export const PaginationWrapper = styled.div<{ sizeVar?: 'S' | 'XS'; isEndOfPage?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ sizeVar }) => (sizeVar === 'XS' ? '40px' : '56px')};
  background-color: ${colorTokens.neutral0};
  border-top: ${`1px solid ${colorTokens.neutral200}`};
  border-radius: ${({ isEndOfPage }) => isEndOfPage && '0 0 12px 12px'};
  .table-pagination {
    border-top: none;
  }
`;

export const BottomContainer = styled.div<{
  isEndOfPage: boolean;
  hasFilterBar?: boolean;
  hasToolbar?: boolean;
  hideBorder?: boolean;
  /** VirtualTable: sticky 바텀이 transform 레이어 위로 겹쳐 행을 가리는 것을 막기 위해 일반 흐름 */
  disableStickyFooter?: boolean;
}>`
  position: ${({ disableStickyFooter }) => (disableStickyFooter ? 'relative' : 'sticky')};
  width: 100%;
  bottom: ${({ disableStickyFooter }) => (disableStickyFooter ? 'auto' : '0')};
  background-color: ${colorTokens.neutral0};
  z-index: ${({ disableStickyFooter }) => (disableStickyFooter ? 1 : 20)};
  ${({ disableStickyFooter }) => (!disableStickyFooter ? 'isolation: isolate;' : '')}
  border-radius: ${({ isEndOfPage }) => isEndOfPage && '0 0 12px 12px'};
  border: ${({ hasFilterBar, hasToolbar, hideBorder }) =>
    !hideBorder && hasFilterBar && !hasToolbar && `1px solid ${colorTokens.neutral200}`};
  border-top: none;
`;

export const ScrollContainer = styled.div<{ isPagination?: boolean }>`
  height: 6px;
  position: absolute;
  //* JIRA SH-18674: 테이블 스크롤바 테이블 바디 내에 위치할 수 있도록 푸터 위로 올림. 없을 때는 푸터에 2px 여유
  bottom: ${({ isPagination }) => (isPagination ? '56px' : '2px')};
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

/** Pagination.SizeSelector — 페이지 크기 라벨 줄바꿈 방지 */
export const PaginationSizeSelectorSlot = styled.div`
  [data-shoplflow='Dropdown-Content-Area'],
  [data-shoplflow='Text'],
  [data-shoplflow='Menu'] {
    white-space: nowrap;
  }
`;
