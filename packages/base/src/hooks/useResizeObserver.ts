import { useEffect, useState } from 'react';

type ResizeOptions = {
  trackWidth?: boolean;
  trackHeight?: boolean;
};

export const useResizeObserver = <T extends HTMLElement>(
  element: T,
  options: ResizeOptions = { trackWidth: true, trackHeight: true },
) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === element) {
          const { width, height } = entry.contentRect;
          const newSize = { ...size };

          if (options.trackWidth && width !== size.width) {
            newSize.width = width;
          }

          if (options.trackHeight && height !== size.height) {
            newSize.height = height;
          }

          if (newSize.width !== size.width || newSize.height !== size.height) {
            setSize(newSize);
          }
        }
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element, options.trackWidth, options.trackHeight, size]);

  return size;
};
