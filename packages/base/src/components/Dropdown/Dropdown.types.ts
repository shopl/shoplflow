import type { HTMLAttributes, ReactNode } from 'react';
import type { ChildrenProps, DisableProps, LeftElementProps, SizeVariantProps } from '../../utils/type/ComponentProps';
import type { $Values } from '@shoplflow/utils';

const dropdownOptionVar = {
  CLICK: 'CLICK',
  OUTSIDE_CLICK: 'OUTSIDE_CLICK',
  NONE: 'NONE',
} as const;

export type DropdownOptionVar = $Values<typeof dropdownOptionVar>;

export interface DropdownProps extends DropdownOptionProps {}
export interface DropdownOptionProps {
  isOpen?: boolean;
  content: ReactNode;
  trigger: ReactNode;
  option?: DropdownOptionVar;
}

export interface DropdownContentProps extends ChildrenProps {
  /**
   * 컨텐츠가 부모 `width`를 따라갈지, 고정될지 결정합니다.
   */
  type?: 'FILL' | 'FIXED';
  /**
   * 컨텐츠의 `width`를 설정합니다.
   * type이 `FILL`일 경우 무시됩니다.
   */
  width?: string;
}

const dropdownSizeVar = {
  S: 'S',
  M: 'M',
} as const;

export type DropdownSizeVar = $Values<typeof dropdownSizeVar>;

export interface DropdownButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LeftElementProps,
    SizeVariantProps<DropdownSizeVar> {
  placeholder?: string;
  value?: string;
  width?: string;
}
