import type { ButtonHTMLAttributes, CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { ChildrenProps, DisableProps, LeftElementProps, SizeVariantProps } from '../../utils/type/ComponentProps';
import type { $Values } from '@shoplflow/utils';

const DropdownOptionVariants = {
  CLICK: 'CLICK',
  OUTSIDE_CLICK: 'OUTSIDE_CLICK',
  NONE: 'NONE',
} as const;

export type DropdownOptionVariantType = $Values<typeof DropdownOptionVariants>;

export interface DropdownProps extends DropdownOptionProps {}
export interface DropdownOptionProps {
  /**
   * 외부에서 `isOpen`을 제어할 수 있습니다.
   */
  isOpen?: boolean;
  trigger?: ReactNode;
  popper?: ReactNode;
  /**
   * 드롭다운이 어떻게 닫힐 수 있는지 옵션을 설정합니다.
   *
   *
   * CLICK: 화면을 클릭하면 닫힙니다.
   * OUTSIDE_CLICK: 컨텐츠 영역 외부를 클릭하면 닫힙니다.
   * NONE: 클릭으로 닫히지 않습니다.
   */
  option?: DropdownOptionVariantType;
  width?: CSSProperties['width'];
}

export interface DropdownContentProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {
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

const dropdownSizeVariants = {
  S: 'S',
  M: 'M',
  L: 'L',
} as const;

export type DropdownSizeVariantType = $Values<typeof dropdownSizeVariants>;

export interface DropdownTriggerButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'>,
    DisableProps,
    LeftElementProps,
    SizeVariantProps<DropdownSizeVariantType> {
  /**
   * placeholder를 설정합니다.
   */
  placeholder?: string;
  value?: ReactNode;
  isError?: boolean;
  /**
   * width를 설정합니다.
   */
  width?: string;
}
