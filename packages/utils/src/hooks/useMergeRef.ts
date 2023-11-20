import { useMemo } from 'react';

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

export function assignRef<T = unknown>(ref: ReactRef<T> | null | undefined, value: T) {
  if (ref == null) {
    return;
  }

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${String(value)}' to ref '${String(ref)}'`);
  }
}

export function mergeRefs<T>(...refs: Array<ReactRef<T> | null | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}

/**
 * <Callout type={'info'}>
 *   인자로 받은 여러 ref를 하나로 합칩니다.
 * </Callout>
 *
 *  ## Description
 *  `useMergeRefs`는 여러 ref를 하나로 합칩니다.
 *
 *  ## Usage
 *
 *  ```tsx
 *  import {useMergeRefs} from "@shoplflow/utils"
 *
 *  const Container = () => {
 *    const ref1 = React.useRef<HTMLDivElement>(null);
 *    const ref2 = React.useRef<HTMLDivElement>(null);
 *    const ref3 = React.useRef<HTMLDivElement>(null);
 *    const ref = useMergeRefs(ref1, ref2, ref3);
 *
 *    return(
 *    <div ref={ref}>container</div>
 *    )
 *  }
 *  ```
 *
 *  ```tsx Popper.tsx (shoplflow)
 *  export const PopperTrigger = forwardRef<HTMLDivElement, PopperTriggerProps>(
 *   ({ children, isOpen = false, ...rest }, ref) => {
 *     const { setReference, setIsOpen } = usePopper();
 *
 *     const refs = useMergeRefs(ref, setReference);
 *
 *     useEffect(() => {
 *       setIsOpen(isOpen);
 *     }, [isOpen, setIsOpen]);
 *
 *     return (
 *       <StyledPopper ref={refs} data-shoplflow={'Popper'} {...rest}>
 *         {children}
 *       </StyledPopper>
 *     );
 *   },
 * );
 *  ```
 */

export function useMergeRefs<T>(...refs: Array<ReactRef<T> | null | undefined>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(...refs), refs);
}
