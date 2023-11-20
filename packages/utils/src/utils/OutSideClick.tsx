import type { Ref } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

export interface Props {
  children: React.ReactNode;
  outsideClick: (target: EventTarget | null) => void;
  trigger?: boolean;
}

export const OutSideClick: React.FC<Props> = ({ children, outsideClick, trigger = true }) => {
  const ref = useRef<HTMLElement>(null);

  const handleClick = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        outsideClick(e.target);
      }
    },
    [outsideClick],
  );

  useEffect(() => {
    // Allow logic to operate after a render
    if (trigger) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick, trigger]);

  return <div ref={ref as Ref<HTMLDivElement>}>{children}</div>;
};
