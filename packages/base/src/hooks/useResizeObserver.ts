import { useEffect, useState } from 'react';

export const useResizeObserver = <T extends HTMLElement>(element: T) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === element) {
          const { width, height } = entry.contentRect;
          setSize({ width, height });
        }
      });
    });
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);
  return size;
};
