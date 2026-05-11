import type { ReactNode } from 'react';
import { createContext } from 'react';
import { noop } from '@shoplflow/utils';

export type ModalStateType = {
  component: ReactNode;
  id?: string;
  /**
   * custom zIndex를 넣어주세요
   */
  zIndex?: number;
};
export type RemoveModalProps = {
  id?: string;
  deps?: number;
};
export type ModalContext = ModalStateType[];

export type ModalHandlerContext = {
  addModal: (modal: ReactNode, id?: string, zIndex?: number) => void;
  removeModal: (props?: RemoveModalProps) => void;
};

export const ModalHandlerContext = createContext<ModalHandlerContext>({
  addModal: noop,
  removeModal: noop,
});

export const ModalContext = createContext<ModalContext>([]);

/** ESC 시 최상단 모달의 outsideClick과 동일한 경로를 호출하기 위한 등록소 */
export type ModalOutsideClickHandlers = {
  /** 레이어 마운트 시 outsideClick과 동일한 닫기 동작 등록, 언마운트 시 해제 */
  registerOutsideClick: (fn: () => void) => () => void;
  /** ESC 시 최상단 레이어에 대해 위와 동일한 동작 실행 */
  requestOutsideClick: () => void;
};

export const ModalOutsideClickContext = createContext<ModalOutsideClickHandlers | null>(null);
