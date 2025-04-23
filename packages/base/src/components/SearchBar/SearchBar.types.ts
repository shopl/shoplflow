import type { ChangeEvent } from 'react';

/** 드롭다운 아이템 타입 */
export interface DropdownItem {
  /** 표시되는 라벨 */
  label: string;
  /** 실제 값 */
  value: string;
}

/** 검색바 타입 */
export type SearchType = 'default' | 'real-time';

/** 검색바 기본 props */
export interface SearchBarBaseProps {
  /** 검색바 너비 */
  width?: string;
  /** 검색바 높이 */
  height?: string;
  /** 애니메이션 비활성화 여부 */
  noAnimate?: boolean;
  /** 유연한 너비 사용 여부 */
  useFlexibleWidth?: boolean;
  /** 자식 요소 */
  children?: React.ReactNode;
}

/** 검색바 카테고리 props */
export interface SearchBarCategoryProps {
  /** 카테고리 드롭다운 너비 */
  dropdownWidth?: string;
  /** 카테고리 드롭다운 아이템 목록 */
  dropdownItems?: DropdownItem[];
  /** 선택된 카테고리 아이템 */
  selectedDropdownItem?: DropdownItem;
  /** 카테고리 선택 핸들러 */
  onDropdownSelect?: (item: DropdownItem) => void;
  /** 선택 상태 */
  isSelected: boolean;
  /** 애니메이션 비활성화 여부 */
  noAnimate?: boolean;
}

/** 검색바 입력 props */
export interface SearchBarInputProps {
  /** 검색바 값 */
  value?: string | number | readonly string[];
  /** 검색바 기본값 */
  defaultValue?: string | number | readonly string[];
  /** 검색어 변경 핸들러 */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** 검색어 초기화 핸들러 */
  onClear?: () => void;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 검색 아이콘 */
  icon?: React.ReactNode;
  /** 검색 타입 */
  type?: SearchType;
  /** 검색 핸들러 */
  onSearch?: (value: string) => void;
  /** 디바운스 시간 (ms) */
  debounceTime?: number;
}

/** 검색바 props */
export type SearchBarProps = SearchBarBaseProps;

/** 검색바 컴포넌트 타입 */
export interface SearchBarComponent extends React.FC<SearchBarProps> {
  Category: React.FC<SearchBarCategoryProps>;
  Input: React.FC<SearchBarInputProps>;
}

/** 검색바 컴포넌트 타입 (memo) */
export interface MemoizedSearchBarComponent extends React.MemoExoticComponent<SearchBarComponent> {
  Category: React.FC<SearchBarCategoryProps>;
  Input: React.FC<SearchBarInputProps>;
}
