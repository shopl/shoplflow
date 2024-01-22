import { useContext } from 'react';
import { ModalContext } from '../providers/ModalContext';

export const useModalValue = () => {
  // const modal = useModalStore((state) => state.modal);

  const modal = useContext(ModalContext);
  return {
    modal,
  };
};
