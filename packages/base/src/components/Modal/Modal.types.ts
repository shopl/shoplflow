import type { ChildrenProps, SizeVariantProps } from '../../utils/type/ComponentProps';
import type { $Values } from '../../utils/type/$values';

export enum ModalSize {
  XXS = 'XXS',
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export type ModalSizeType = $Values<typeof ModalSize>;

// Modal Container

export interface ModalContainerProps extends ModalContainerOptionProps, SizeVariantProps<ModalSizeType> {
  children?: React.ReactNode | React.ReactNode[];
}

export interface ModalContainerOptionProps {}

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
}
export const MODAL_BODY_KEY = Symbol('MODAL_BODY');
export interface ModalBodyType extends React.FC<ModalBodyProps> {
  [MODAL_BODY_KEY]?: boolean;
}

// Modal Footer
export interface ModalFooterProps extends ModalFooterOptionProps, ChildrenProps {}
export interface ModalFooterOptionProps {}
