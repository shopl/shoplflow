import { useModalStore } from './useModalStore';

export const useModalValue = () => {
  const modal = useModalStore((state) => state.modal);
  return {
    modal,
  };
};
