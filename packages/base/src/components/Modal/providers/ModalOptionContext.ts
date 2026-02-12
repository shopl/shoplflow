import { noop } from '@shoplflow/utils';
import { createContext } from 'react';

export type ModalOptionState = {
  topHeight: number;
  bottomHeight: number;
  setTopHeight: (height: number) => void;
  setBottomHeight: (height: number) => void;
  clearTopHeight: () => void;
  clearBottomHeight: () => void;
};

export const ModalOptionContext = createContext<ModalOptionState>({
  topHeight: 0,
  bottomHeight: 0,
  setTopHeight: noop,
  setBottomHeight: noop,
  clearTopHeight: noop,
  clearBottomHeight: noop,
});
