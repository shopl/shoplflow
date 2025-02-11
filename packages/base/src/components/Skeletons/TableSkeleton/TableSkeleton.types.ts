import type { CSSProperties } from 'react';

/**
 * TableSkeleton 컴포넌트의 공통 Props.
 */
type CommonTableSkeletonProps = {
  /**
   * 데이터 행의 개수를 설정합니다. 기본값은 6입니다.
   * @default 6
   */
  rowNum?: number;

  /**
   * 열의 개수를 설정합니다. 기본값은 9입니다.
   * @default 9
   */
  columnNum?: number;
};

/**
 * TableSkeleton의 `grid` 타입에만 적용되는 Props.
 */
export type GridTableSkeletonProps = CommonTableSkeletonProps & {
  type: 'grid';
  /**
   * Skeleton 헤더 행의 개수를 설정합니다. 기본값은 2입니다.
   * @default 2
   */
  headerRowNum?: number;

  /**
   * 마지막 열에 Skeleton을 표시하지 않도록 설정합니다.
   * @default false
   */
  lastColumnNoSkeleton?: boolean;

  /**
   * 헤더 열 Skeleton의 스타일을 지정합니다.
   */
  headerColumnSkeletonStyle?: CSSProperties;

  /**
   * 헤더 행의 스타일을 지정합니다.
   */
  headerRowStyle?: CSSProperties;

  /**
   * 각 열 Skeleton의 스타일을 지정합니다.
   */
  columnSkeletonStyle?: CSSProperties;

  /**
   * 첫 번째 열 Skeleton의 스타일을 지정합니다.
   */
  firstColumnSkeletonStyle?: CSSProperties;

  /**
   * 데이터 행의 스타일을 지정합니다.
   */
  rowStyle?: CSSProperties;

  /**
   * grid의 `grid-template-columns` 스타일을 설정합니다.
   */
  customGridTemplateColumnsStyle?: CSSProperties['gridTemplateColumns'];
};

/**
 * TableSkeleton의 `list` 타입에만 적용되는 Props.
 */
export type ListTableSkeletonProps = CommonTableSkeletonProps & {
  type: 'list';
  /**
   * 리스트 첫 번째 열의 넓이를 설정합니다. 기본값은 48입니다.
   * @default 48
   */
  firstColumnWidth?: number;
};

/**
 * TableSkeleton 컴포넌트의 최종 Props 타입.
 * - `grid` 타입과 `list` 타입의 Props가 구분됩니다.
 */
export type TableSkeletonProps = GridTableSkeletonProps | ListTableSkeletonProps;
