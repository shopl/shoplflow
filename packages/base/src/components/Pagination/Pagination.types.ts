import type { HTMLAttributes } from 'react';
import type { LeftAndRightNodeProps } from '../../utils/type/ComponentProps';

export interface PaginationProps extends PaginationOptionProps, HTMLAttributes<HTMLDivElement> {}
export interface PaginationOptionProps extends LeftAndRightNodeProps {
  /**
   * 선택된 페이지
   * @description: index입니다.
   * @example: 1 page > 0 index
   */
  currentPage: number;
  /**
   * 페이지에 보여질 아이템(List) 갯수
   * @default: 20
   */
  pageSize: string;
  /**
   *  테이블 아이템 총 갯수
   */
  itemsTotalCount: number;
  /**
   * 라인에 보여지는 최대 페이지 갯수
   * @default: 5
   * @example: [1] [2] [3] [4] [5]
   */
  pageCount?: number;
  /**
   * 내부 로직을 사용하지 않고, 외부에서 totalCount를 받을 수 있습니다
   */
  totalCount?: number;

  previousPage: () => void;
  nextPage: () => void;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
}

export interface PaginationSizeSelectorProps {
  data: Array<{ label: string; value: string }>;
  /**
   * 페이지에 보여질 아이템(List) 갯수
   * @default: 20
   */
  pageSize?: string;
  setPageSize: (value: string) => void;
}
