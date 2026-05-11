import type { CSSProperties } from 'react';
import type { ChildrenProps, SizeVariantProps } from '../../utils/type/ComponentProps';
import type { $Values } from '@shoplflow/utils';

export const ModalSize = {
  XXS: 'XXS',
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
  XXXL: 'XXXL',
  FULL: 'FULL',
} as const;

export type ModalSizeType = $Values<typeof ModalSize>;

// Modal Container

export interface ModalContainerProps extends ModalContainerOptionProps, SizeVariantProps<ModalSizeType> {
  children?: React.ReactNode | React.ReactNode[];
  hasChangeAnimation?: boolean;
}

export interface ModalContainerOptionProps {
  /**
   * 모달의 높이를 설정합니다.
   * - number: px 기준 높이
   * - '100%': 뷰포트 높이에서 상하 여백(64px)을 제외한 높이
   *   (sizeVar='FULL'에서는 적용되지 않습니다.)
   */
  height?: number | '100%';
  /**
   * 모달 컨테이너 바깥(백드롭 등)을 클릭했을 때 실행됩니다.
   * Escape 키를 눌렀을 때도 같은 함수가 호출됩니다. 모달이 여러 겹이면 Escape는 스택 최상단(가장 최근에 연) 모달에만 적용됩니다.
   *
   * @param args 바깥 클릭 시 전달되는 클릭 이벤트(`Event`).
   */
  outsideClick?: (args?: any) => void;
}

// Modal Header
export interface ModalHeaderProps extends ModalHeaderOptionProps, ChildrenProps {}
export interface ModalHeaderOptionProps {}

export const MODAL_HEADER_KEY = Symbol('MODAL_HEADER');
export interface ModalHeaderType extends React.FC<ModalHeaderProps> {
  [MODAL_HEADER_KEY]?: boolean;
}

// Modal Body
export interface ModalBodyProps extends ModalBodyOptionProps, ChildrenProps {}
export interface ModalBodyOptionProps {
  isIncludeHeader?: boolean;
  isIncludeFooter?: boolean;
  height?: number;
  fillViewportHeight?: boolean;
  sizeVar?: ModalSizeType;
  padding?: CSSProperties['padding'];
}
// Modal Footer
export interface ModalFooterProps extends ModalFooterOptionProps, ChildrenProps {
  padding?: CSSProperties['padding'];
}
export interface ModalFooterOptionProps {}
export const MODAL_FOOTER_KEY = Symbol('MODAL_FOOTER');
export interface ModalFooterType extends React.FC<ModalBodyProps> {
  [MODAL_FOOTER_KEY]?: boolean;
}

export interface ModalTopProps extends ChildrenProps {}
export interface ModalBottomProps extends ChildrenProps {}
