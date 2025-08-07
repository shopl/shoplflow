import type React from 'react';
import { useEffect } from 'react';

export const useIntersectionObserver = (
  target: React.RefObject<Element>,
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
  options: IntersectionObserverInit,
) => {
  useEffect(() => {
    if (!target.current) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};
