import type { ReactNode } from 'react';
import { createContext } from 'react';
import { noop } from '@shoplflow/utils';

export type ModalStateType = {
  component: ReactNode;
  id?: string;
};
export type RemoveModalProps = {
  id?: string;
  deps?: number;
};
export type ModalContext = ModalStateType[];

export type ModalHandlerContext = {
  addModal: (modal: ReactNode, id?: string) => void;
  removeModal: (props?: RemoveModalProps) => void;
};

export const ModalHandlerContext = createContext<ModalHandlerContext>({
  addModal: noop,
  removeModal: noop,
});

export const ModalContext = createContext<ModalContext>([]);
