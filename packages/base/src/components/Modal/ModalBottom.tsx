import { useEffect, useState } from 'react';
import { BottomContainer } from './Modal.styled';
import type { ModalBottomProps } from './Modal.types';
import { useModalOption } from './hooks/useModalOption';

export const ModalBottom = ({ children }: ModalBottomProps) => {
  const [bottomRef, setBottomRef] = useState<HTMLElement | null>(null);
  const { setBottomHeight, clearBottomHeight } = useModalOption();
  useEffect(() => {
    if (!bottomRef || !setBottomHeight) {
      return;
    }

    const updateHeight = () => {
      const { height } = bottomRef.getBoundingClientRect();
      setBottomHeight(height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(bottomRef);

    return () => {
      resizeObserver.disconnect();
      clearBottomHeight();
    };
  }, [bottomRef, setBottomHeight, clearBottomHeight]);

  return <BottomContainer ref={setBottomRef}>{children}</BottomContainer>;
};
