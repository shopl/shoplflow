import type React from 'react';
import { useCallback, useEffect, useRef } from 'react';

/**
 * @description
 * 부모 요소의 outsideClick 이벤트를 감지하는 hook
 * return되는 ref를 컴포넌트에 적용하거나 외부에서 생성한 ref를 기준으로 부모 요소를 클릭하는 경우 outsideClick 함수를 실행합니다.
 * 외부에서 생성한 ref를 사용할 경우 initialRef를 통해 ref를 전달해야 합니다.
 *
 * @param onClickOutside
 * @param initialRef
 */
export const useParentElementClick = <T extends HTMLElement>(
  onClickOutside: (target: EventTarget | null) => void,
  initialRef?: React.RefObject<T>,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = initialRef ?? useRef<T>(null);

  const handleClick = useCallback(
    (e: Event) => {
      const parentNode = ref.current?.parentNode;
      if (parentNode && !ref.current?.contains(e.target as Node)) {
        onClickOutside(e.target);
      }
    },
    [ref, onClickOutside],
  );

  useEffect(() => {
    const parentNode = ref.current?.parentNode;
    if (!parentNode) {
      return;
    }

    parentNode.addEventListener('click', handleClick);

    return () => {
      parentNode.removeEventListener('click', handleClick);
    };
  }, [ref, handleClick]);

  return {
    ref,
  };
};
