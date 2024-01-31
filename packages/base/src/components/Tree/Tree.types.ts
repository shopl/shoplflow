import type { ChildrenProps, LeftElementProps, RightElementProps } from '../../utils/type/ComponentProps';
import type { ReactNode } from 'react';

export interface TreeProps extends TreeOptionProps {}
export interface TreeOptionProps extends ChildrenProps, LeftElementProps {}

export interface TreeItemProps extends TreeItemOptionProps {}

export interface TreeItemOptionProps extends ChildrenProps, LeftElementProps, RightElementProps {
  depth?: number;
  text?: ReactNode;
  initialIsOpen?: boolean;
  isOpen?: boolean;
}
export const TREE_SYMBOL_KEY = Symbol('SHOPLFLOW_TREE');
