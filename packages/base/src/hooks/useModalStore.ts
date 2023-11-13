// import { create } from 'zustand';
// import type { ReactNode } from 'react';
// import { isNullOrUndefined } from '@shoplflow/utils';
//
// export type ModalStateType = {
//   component: ReactNode;
//   id?: string;
// };
// export type RemoveModalProps = {
//   id?: string;
//   deps?: number;
// };
//
// export type UseModalStore = {
//   modal: ModalStateType[];
//   addModal: (modal: ReactNode, id?: string) => void;
//   removeModal: (props?: RemoveModalProps) => void;
// };
//
// export const useModalStore = create<UseModalStore>((set) => ({
//   modal: [],
//   addModal: (modal, id) =>
//     set((state) => ({
//       modal: [
//         ...state.modal,
//         {
//           component: modal,
//           id: id,
//         },
//       ],
//     })),
//   removeModal: (props) => {
//     const { id, deps } = props || {
//       id: undefined,
//       deps: undefined,
//     };
//
//     const isIncludeAllProps = Boolean(id && deps);
//     const isIncludeId = Boolean(id);
//     const isNotIncludeAllProps = !id && Boolean(isNullOrUndefined(deps));
//     const isIncludeDeps = Boolean(Boolean(!isNullOrUndefined(deps)) && !id);
//
//     if (isIncludeAllProps) {
//       throw new Error('id와 deps는 동시에 사용할 수 없습니다.');
//     }
//
//     if (isIncludeId) {
//       set((state) => {
//         const filterModal = state.modal.filter((modal) => modal.id !== id);
//         return {
//           modal: [...filterModal],
//         };
//       });
//       return;
//     }
//
//     if (isNotIncludeAllProps || deps === 1) {
//       set((state) => {
//         const removeModal = state.modal.slice(0, -1);
//         return {
//           modal: [...removeModal],
//         };
//       });
//       return;
//     }
//
//     if (isIncludeDeps) {
//       if (deps === 0 || deps === undefined) {
//         return;
//       }
//       set((state) => {
//         const removeDeps = state.modal.slice(0, -deps);
//         return {
//           modal: [...removeDeps],
//         };
//       });
//       return;
//     }
//   },
// }));
export {};
