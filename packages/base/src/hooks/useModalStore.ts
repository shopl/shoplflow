import { create } from 'zustand';
import type { ReactNode } from 'react';

export type ModalStateType = {
  component: ReactNode;
  id?: string;
};
export type RemoveModalProps = {
  id?: string;
  deps?: number;
};

export type UseModalStore = {
  modal: ModalStateType[];
  addModal: (modal: ReactNode, id?: string) => void;
  removeModal: (props?: RemoveModalProps) => void;
};

export const useModalStore = create<UseModalStore>((set) => ({
  modal: [],
  addModal: (modal, id) =>
    set((state) => ({
      modal: [
        ...state.modal,
        {
          component: modal,
          id: id,
        },
      ],
    })),
  removeModal: (props) => {
    const { id, deps = 1 } = props || {
      id: undefined,
      deps: 0,
    };

    const isIncludeAllProps = Boolean(id && String(deps));
    const isIncludeId = Boolean(id);
    const isNotIncludeAllProps = !id && !deps;
    const isIncludeDeps = Boolean(String(deps)) && !id;

    if (isIncludeAllProps) {
      throw new Error('id와 deps는 동시에 사용할 수 없습니다.');
    }

    if (isIncludeId) {
      set((state) => {
        const filterModal = state.modal.filter((modal) => modal.id !== id);
        return {
          modal: [...filterModal],
        };
      });
      return;
    }

    if (isNotIncludeAllProps || deps === 1) {
      set((state) => {
        const removeModal = state.modal.slice(0, -1);
        return {
          modal: [...removeModal],
        };
      });
      return;
    }

    if (isIncludeDeps) {
      set((state) => {
        const removeDeps = state.modal.slice(0, -deps + 1);
        return {
          modal: [...removeDeps],
        };
      });
      return;
    }
  },
}));
