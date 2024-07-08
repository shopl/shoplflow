import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { isNullOrUndefined } from '@shoplflow/utils';
import type { RemoveModalProps } from './ModalContext';
import { ModalHandlerContext, ModalContext } from './ModalContext';

interface ModalProviderProps {
  children?: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openedModals, setOpenedModals] = useState<ModalContext>([]);

  const addModal = (component: ReactNode, id?: string, zIndex?: number) => {
    setOpenedModals((modals) => {
      if (modals) {
        return [...modals, { component, id, zIndex }];
      }
      return [{ component, id, zIndex }];
    });
  };

  const removeModal = (props?: RemoveModalProps) => {
    const { id, deps } = props || {
      id: undefined,
      deps: undefined,
    };

    const isIncludeAllProps = Boolean(id && deps);
    const isIncludeId = Boolean(id);
    const isNotIncludeAllProps = !id && Boolean(isNullOrUndefined(deps));
    const isIncludeDeps = Boolean(Boolean(!isNullOrUndefined(deps)) && !id);

    if (isIncludeAllProps) {
      throw new Error('id와 deps는 동시에 사용할 수 없습니다.');
    }

    if (isIncludeId) {
      setOpenedModals((modal) => {
        const filterModal = modal.filter((modal) => modal.id !== id);
        return [...filterModal];
      });
      return;
    }

    if (isNotIncludeAllProps || deps === 1) {
      setOpenedModals((modal) => {
        const removeModal = modal.slice(0, -1);
        return [...removeModal];
      });
      return;
    }

    if (isIncludeDeps) {
      if (deps === 0 || deps === undefined) {
        return;
      }
      setOpenedModals((modal) => {
        const removeDeps = modal.slice(0, -deps);
        return [...removeDeps];
      });
      return;
    }
  };
  const dispatch = useMemo(() => ({ addModal, removeModal }), []);

  useEffect(() => {
    if (openedModals.length !== 1) {
      return;
    }

    document.body.style.cssText = 'overflow:hidden';
    return () => {
      document.body.style.cssText = 'overflow:unset';
    };
  }, [openedModals.length]);

  useEffect(() => {
    const closeAllModals = () => {
      setOpenedModals([]);
    };

    window.addEventListener('popstate', closeAllModals);

    return () => {
      window.removeEventListener('popstate', closeAllModals);
    };
  }, []);

  return (
    <ModalContext.Provider value={openedModals}>
      <ModalHandlerContext.Provider value={dispatch}>{children}</ModalHandlerContext.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
