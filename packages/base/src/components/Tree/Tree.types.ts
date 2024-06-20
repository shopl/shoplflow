import type { ChildrenProps, LeftElementProps, RightElementProps } from '../../utils/type/ComponentProps';
import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

export interface TreeProps extends TreeOptionProps {}
export interface TreeOptionProps extends ChildrenProps {}

export interface TreeItemProps extends TreeItemOptionProps, Omit<HTMLMotionProps<'li'>, 'children'> {}

export interface TreeItemOptionProps extends ChildrenProps, LeftElementProps, RightElementProps {
  /**
   * 트리의 깊이를 설정합니다.
   * 자동으로 설정되는 값이므로 별도로 설정하지 않아도 됩니다.
   * 재귀로 Tree를 구현할 경우 사용해주세요.
   */
  depth?: number;
  /**
   * 내부에 들어갈 요소를 설정합니다.
   */
  label?: ReactNode;
  /**
   * 초기 값을 설정합니다.
   */
  initialIsOpen?: boolean;
  /**
   * 트리아이템을 직접 조작할 때 사용합니다.
   */
  isOpen?: boolean;
  /*
   * 트리 영역의 click event 비활성화 여부를 설정합니다.
   * leftsource의 click event는 별도 설정이 필요합니다.
   */
  disabled?: boolean;
}
export const TREE_SYMBOL_KEY = Symbol('SHOPLFLOW_TREE');
