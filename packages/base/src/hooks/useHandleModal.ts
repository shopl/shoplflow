import { useContext } from 'react';
import { ModalHandlerContext } from './ModalContext';

export const useHandleModal = () => {
  // const addModal = useModalStore((state) => state.addModal);
  // const removeModal = useModalStore((state) => state.removeModal);
  const { addModal, removeModal } = useContext(ModalHandlerContext);

  return {
    addModal,
    removeModal,
  };
};
