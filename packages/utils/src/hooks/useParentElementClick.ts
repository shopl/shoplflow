import { useCallback, useEffect, useRef } from 'react';

/**
 * <Callout type={'info'}>
 * props로 받은 Element를 기준으로 부모 요소에 클릭이벤트를 등록합니다.
 * </Callout>
 *
 * ## Description
 * `useParentElementClick`은 부모 요소에 클릭이벤트를 등록합니다.
 *
 * 첫번째 인자로 `onClickOutside`를 받으며 ref를 return 합니다.
 *
 * `onClickOutside`는 클릭이벤트가 발생했을 때 실행되는 함수이며, `initialRef`는 클릭이벤트를 등록할 요소의 자식 요소를 받습니다.
 *
 * ## Usage
 *
 * ```tsx
 * import {useParentElementClick} from "@shoplflow/utils"
 *
 * const Container = () => {
 *      const ref = useParentElementClick<HTMLDivElement>(outsideClick);
 *
 *     const outsideClick = () => {
 *         console.log("outside click");
 *     }
 *
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
 *   const ref = useParentElementClick<HTMLDivElement>(outsideClick);
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
export const useParentElementClick = <T extends HTMLElement>(onClickOutside: (target: Event | null) => void) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (e: Event) => {
      const parentNode = ref.current?.parentNode;
      if (parentNode && !ref.current?.contains(e.target as Node)) {
        onClickOutside(e);
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

  return ref;
};
