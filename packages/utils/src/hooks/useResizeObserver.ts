import { useEffect, useState } from 'react';

type ResizeOptions = {
  trackWidth?: boolean;
  trackHeight?: boolean;
};

/**
 * `ResizeObserver`를 사용하여 인자로 받은 HTML요소의 크기를 감지하는 hook입니다.
 *
 * trackWidth, trackHeight 옵션을 통해 감지할 값을 설정할 수 있습니다.
 *
 * trackHeight 옵션을 사용하지 않을 경우 `height`와 `width`는 0으로 고정됩니다.
 *
 * ## Usage
 * ```tsx
 * import {useResizeObserver} from "@shoplflow/utils"
 * const { height: windowHeight } = useResizeObserver(document.body, {
 *   trackHeight: true,
 *   trackWidth: true,,
 * });
 * ```
 */
export const useResizeObserver = <T extends HTMLElement>(
  element: T | null,
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

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [element, options.trackWidth, options.trackHeight, size]);

  return size;
};
