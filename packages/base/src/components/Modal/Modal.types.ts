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
}

export interface ModalContainerOptionProps {
  /**
   * 모달의 높이를 설정합니다.
   */
  height?: number;
  /**
   * 모달의 외부를 클릭했을 때 실행되는 함수입니다.
   * @param args
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
  sizeVar?: ModalSizeType;
}
// Modal Footer
export interface ModalFooterProps extends ModalFooterOptionProps, ChildrenProps {}
export interface ModalFooterOptionProps {}
export const MODAL_FOOTER_KEY = Symbol('MODAL_FOOTER');
export interface ModalFooterType extends React.FC<ModalBodyProps> {
  [MODAL_FOOTER_KEY]?: boolean;
}
