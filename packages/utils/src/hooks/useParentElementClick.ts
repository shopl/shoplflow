import type React from 'react';
import { useCallback, useEffect, useRef } from 'react';

/**
 * <Callout type={'info'}>
 * 부모 요소의 outsideClick 이벤트를 감지하는 hook
 * </Callout>
 *
 * return되는 ref를 컴포넌트에 적용하거나 외부에서 생성한 ref를 기준으로 부모 요소를 클릭하는 경우 outsideClick 함수를 실행합니다.
 * 외부에서 생성한 ref를 사용할 경우 initialRef를 통해 ref를 전달해야 합니다.
 * `outSideClick` handler를 특정 컴포넌트에 의존시키기 위해 사용합니다.
 *
 * # Usage
 *
 * ```tsx
 * import {useParentElementClick} from "@shoplflow/utils"
 *
 * const Container = () => {
 *     const ref = React.useRef<HTMLDivElement>(null);
 *
 *     const outsideClick = () => {
 *         console.log("outside click");
 *     }
 *
 *     useParentElementClick<HTMLDivElement>(outsideClick, ref);
 *
 *     return(
 *         <div ref={ref}>container</div>
 *     )
 * }
 * // outside 영역 클릭시 outside click 출력
 * const App = () => {
 *     return(
 *         <div>
 *             <Container />
 *             outside
 *         </div>
 *     )
 * }
 * ```
 *
 * 아래 예시와 같이 Modal 컴포넌트에 `outSideClick`을 전달하며 모달이 열렸을 때 `BackDrop`을 클릭하면 모달이 닫히도록 구현할 수 있습니다.
 *
 * ```tsx
 * const ModalContainer = ({ children, outsideClick = noop, ...rest }: ModalContainerProps) => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   useOutsideClick<HTMLDivElement>(outsideClick, ref);
 *
 *   // ...생략
 *
 *   return (
 *     <Container ref={ref} {...rest}>
 *       {addPropInChildren}
 *     </Container>
 *   );
 * };
 * ```
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
