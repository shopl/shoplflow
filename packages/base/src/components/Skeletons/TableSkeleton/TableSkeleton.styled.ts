import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import { colorTokens } from '../../../styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colorTokens.neutral200};
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`;

export const ColumnWrapper = styled.div<{ justifyContent?: CSSProperties['justifyContent'] }>`
  width: 100%;
  height: auto;
  padding: 8px 16px;
  background-color: ${colorTokens.neutral0};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: center;
`;

export const HeaderRowWrapper = styled.div<{
  firstColumnWidth?: number;
  rowColor?: string;
  height?: string;
  customGridTemplateColumnsStyle?: CSSProperties['gridTemplateColumns'];
}>`
  display: grid;
  height: ${({ height }) => height || '100px'};
  grid-template-columns: ${({ customGridTemplateColumnsStyle }) =>
    customGridTemplateColumnsStyle ?? '300px 160px 160px 160px 160px 160px 160px 160px auto'};
  row-gap: 1px;
  column-gap: 1px;
  background-color: transparent;

  ${ColumnWrapper} {
    background-color: ${({ rowColor }) => rowColor || colorTokens.neutral150};
  }
`;

export const RowWrapper = styled.div<{
  firstColumnWidth?: number;
  customGridTemplateColumnsStyle?: CSSProperties['gridTemplateColumns'];
}>`
  display: grid;
  height: 100px;
  grid-template-columns: ${({ customGridTemplateColumnsStyle }) =>
    customGridTemplateColumnsStyle ?? '300px 160px 160px 160px 160px 160px 160px 160px auto'};
  row-gap: 1px;
  column-gap: 1px;
`;

export const TableSkeletonWrapper = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0;
  margin-top: 10px;
`;

export const TableHeaderSkeleton = styled.div`
  display: table-header-group;
  background-color: #eaeaea;
`;

export const TableHeaderCellSkeleton = styled.div<{ width?: number }>`
  display: table-cell;
  padding: 8px;
  height: 48px;
  background: #f9f9f9;
  border-right: 1px solid #e0e0e0;
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }

  &:nth-of-type(1) {
    width: ${({ width }) => `${width}px`};
  }
`;

export const TableBodySkeleton = styled.div`
  display: table-row-group;
`;

export const TableCellSkeleton = styled.div<{ width?: number }>`
  display: table-cell;
  padding: 8px;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: middle;

  &:nth-of-type(1) {
    width: ${({ width }) => `${width}px`};
  }
`;

export const TableRowSkeleton = styled.div`
  display: table-row;
`;
