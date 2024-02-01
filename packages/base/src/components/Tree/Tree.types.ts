import type { ChildrenProps, LeftElementProps, RightElementProps } from '../../utils/type/ComponentProps';
import type { ReactNode } from 'react';

export interface TreeProps extends TreeOptionProps {}
export interface TreeOptionProps extends ChildrenProps, LeftElementProps {}

export interface TreeItemProps extends TreeItemOptionProps {}

export interface TreeItemOptionProps extends ChildrenProps, LeftElementProps, RightElementProps {
  /**
   * 트리의 깊이를 설정합니다.
   * 자동으로 설정되는 값이므로 별도로 설정하지 않아도 됩니다.
   */
  depth?: number;
  /**
   * 내부에 들어갈 요소를 설정합니다.
   */
  content?: ReactNode;
  /**
   * 초기 값을 설정합니다.
   */
  initialIsOpen?: boolean;
  /**
   * 트리아이템을 직접 조작할 때 사용합니다.
   */
  isOpen?: boolean;
}
export const TREE_SYMBOL_KEY = Symbol('SHOPLFLOW_TREE');
