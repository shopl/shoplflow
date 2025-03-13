import { useContext } from 'react';
import { ModalOptionContext } from '../providers/ModalOptionContext';

export const useModalOption = () => {
  const context = useContext(ModalOptionContext);

  if (!context) {
    throw new Error(`useModalOption cannot be called outside the ModalOptionProvider`);
  }

  return context;
};
