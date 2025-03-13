import { noop } from '@shoplflow/utils';
import { createContext } from 'react';

export type ModalOptionState = {
  heightToDeduct: number;
  setHeightToDeduct: (height: number) => void;
  clearHeightToDeduct: () => void;
};

export const ModalOptionContext = createContext<ModalOptionState>({
  heightToDeduct: 0,
  setHeightToDeduct: noop,
  clearHeightToDeduct: noop,
});
