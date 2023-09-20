import { useModalStore } from './useModalStore';

export const useHandleModal = () => {
  const addModal = useModalStore((state) => state.addModal);
  const removeModal = useModalStore((state) => state.removeModal);

  return {
    addModal,
    removeModal,
  };
};
