import styled from '@emotion/styled';

import { colorTokens } from '@shoplflow/base';

/** 좌측 고정 컬럼 우측 그라데이션 그림자 */
export const PinnedColumnEdgeShadow = styled.div`
  position: absolute;
  top: 0;
  right: -4px;
  height: 100%;
  width: 4px;
  pointer-events: none;
  z-index: 11;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
`;

export const VirtualTableRoot = styled.div`
  position: relative;
  width: 100%;
`;

export const VirtualTableScrollAreaInner = styled.div`
  position: relative;
  width: 100%;
`;

export const VirtualTableHeaderRoot = styled.div`
  width: 100%;
  z-index: 11;
  position: sticky;
  top: 0;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VirtualTableHeaderInner = styled.div`
  background-color: ${colorTokens.neutral100};
`;

export const VirtualTableHeaderRow = styled.div<{ $tableWidthPx: number }>`
  display: flex;
  width: ${({ $tableWidthPx }) => `${$tableWidthPx}px`};
  min-width: 100%;
`;

export const VirtualTableGroupHeaderCell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 48px;
  font-weight: 400;
  line-height: 16px;
  font-size: 13px;
  border-bottom: 1px solid ${colorTokens.neutral200};
  background-color: ${colorTokens.neutral100};
  box-sizing: border-box;
  border-right: 1px solid ${colorTokens.neutral200};

  &[data-last-left-pinned='true'] {
    border-right: none;
  }

  position: relative;
  z-index: 0;

  &[data-pinned='left'],
  &[data-pinned='right'] {
    position: sticky;
    z-index: 10;
  }
`;

export const VirtualTableLeafHeaderPinnedLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 48px;
  font-weight: 400;
  line-height: 16px;
  font-size: 13px;
  border-bottom: 1px solid ${colorTokens.neutral200};
  background-color: ${colorTokens.neutral100};
  box-sizing: border-box;
  border-right: 1px solid ${colorTokens.neutral200};
  position: sticky;
  z-index: 10;

  &[data-last-left-pinned='true'] {
    border-right: none;
  }
`;

export const VirtualTableVirtualizedColumnsOuter = styled.div<{ $unpinnedWidthPx: number }>`
  display: flex;
  width: ${({ $unpinnedWidthPx }) => `${$unpinnedWidthPx}px`};
  min-width: ${({ $unpinnedWidthPx }) => `${$unpinnedWidthPx}px`};
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
`;

export const VirtualTableHorizontalVirtualTrack = styled.div<{
  $translateX: number;
  $fillHeight?: boolean;
}>`
  display: flex;
  transform: translateX(${(p) => p.$translateX}px);
  will-change: transform;
  ${({ $fillHeight }) => ($fillHeight ? `height: 100%;` : '')}
`;

export const VirtualTableLeafHeaderUnpinnedCell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 48px;
  font-weight: 400;
  line-height: 16px;
  font-size: 13px;
  border-bottom: 1px solid ${colorTokens.neutral200};
  border-right: 1px solid ${colorTokens.neutral200};
  background-color: ${colorTokens.neutral100};
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const VirtualTableLeafHeaderPinnedRight = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 48px;
  font-weight: 400;
  line-height: 16px;
  font-size: 13px;
  border-bottom: 1px solid ${colorTokens.neutral200};
  border-right: none;
  background-color: ${colorTokens.neutral100};
  box-sizing: border-box;
  position: sticky;
  z-index: 10;
`;

export const VirtualTableBodyRow = styled.div<{ $tableWidthPx: number; $rowHeightPx?: number }>`
  display: flex;
  width: ${({ $tableWidthPx }) => `${$tableWidthPx}px`};
  min-width: 100%;
  height: ${({ $rowHeightPx }) => `${$rowHeightPx ?? 60}px`};
  min-height: ${({ $rowHeightPx }) => `${$rowHeightPx ?? 60}px`};
  border-bottom: 1px solid ${colorTokens.neutral200};
`;

export const VirtualTableBodyPinnedCell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 100%;
  background-color: ${colorTokens.neutral0};
  position: sticky;
  z-index: 10;
  box-sizing: border-box;
`;

export const VirtualTableBodyUnpinnedSlice = styled.div<{ $unpinnedWidthPx: number }>`
  display: flex;
  width: ${({ $unpinnedWidthPx }) => `${$unpinnedWidthPx}px`};
  min-width: ${({ $unpinnedWidthPx }) => `${$unpinnedWidthPx}px`};
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
`;

export const VirtualTableBodyUnpinnedCell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 100%;
  background-color: ${colorTokens.neutral0};
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const VirtualTableBodyGrid = styled.div<{ $totalHeightPx: number }>`
  display: grid;
  height: ${({ $totalHeightPx }) => `${$totalHeightPx}px`};
  position: relative;
  color: ${colorTokens.neutral700};
  font-size: 14px;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VirtualTableVerticalVirtualTrack = styled.div<{ $translateY: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(${(p) => p.$translateY}px);
  will-change: transform;
  display: flex;
  flex-direction: column;
`;
