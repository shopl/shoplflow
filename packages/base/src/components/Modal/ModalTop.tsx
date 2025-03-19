import React, { useEffect, useState } from 'react';
import { useModalOption } from './hooks/useModalOption';
import type { ModalTopProps } from './Modal.types';

const ModalTop = ({ children }: ModalTopProps) => {
  const [topRef, setTopRef] = useState<HTMLElement | null>(null);
  const { setHeightToDeduct, clearHeightToDeduct } = useModalOption();

  useEffect(() => {
    if (!topRef) {
      return;
    }

    const { height } = topRef.getBoundingClientRect();

    setHeightToDeduct?.(height);

    return () => clearHeightToDeduct();
  }, [topRef, setHeightToDeduct, clearHeightToDeduct]);

  return <div ref={setTopRef}>{children}</div>;
};

export default ModalTop;
