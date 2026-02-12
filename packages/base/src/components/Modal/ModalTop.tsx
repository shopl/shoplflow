import React, { useEffect, useState } from 'react';
import { useModalOption } from './hooks/useModalOption';
import type { ModalTopProps } from './Modal.types';

const ModalTop = ({ children }: ModalTopProps) => {
  const [topRef, setTopRef] = useState<HTMLElement | null>(null);
  const { setTopHeight, clearTopHeight } = useModalOption();

  useEffect(() => {
    if (!topRef || !setTopHeight) {
      return;
    }

    const updateHeight = () => {
      const { height } = topRef.getBoundingClientRect();
      setTopHeight(height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(topRef);

    return () => {
      resizeObserver.disconnect();
      clearTopHeight();
    };
  }, [topRef, setTopHeight, clearTopHeight]);

  return <div ref={setTopRef}>{children}</div>;
};

export default ModalTop;
