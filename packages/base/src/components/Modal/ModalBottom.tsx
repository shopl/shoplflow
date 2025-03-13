import { useEffect, useState } from 'react';
import { BottomContainer } from './Modal.styled';
import type { ModalBottomProps } from './Modal.types';
import { useModalOption } from './hooks/useModalOption';

export const ModalBottom = ({ children }: ModalBottomProps) => {
  const [bottomRef, setBottomRef] = useState<HTMLElement | null>(null);
  const { setHeightToDeduct, clearHeightToDeduct } = useModalOption();
  useEffect(() => {
    if (!bottomRef) {
      return;
    }

    const { height } = bottomRef.getBoundingClientRect();
    setHeightToDeduct?.(height);

    return () => clearHeightToDeduct();
  }, [bottomRef, setHeightToDeduct, clearHeightToDeduct]);

  return <BottomContainer ref={setBottomRef}>{children}</BottomContainer>;
};
