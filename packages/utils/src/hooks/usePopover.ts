import { useOutsideClick } from './useOutsideClick';

/**
 * 팝오버 매니저 팩토리 함수
 */
export const createPopoverManager = () => {
  let capturedCloseFunction: (() => void) | null = null;

  return {
    /**
     * 새로운 팝오버 열기
     * @param closeCurrentPopover - 새로 여는 팝오버의 close function
     */
    openPopover: ({ closeCurrentPopover }: { closeCurrentPopover: () => void }) => {
      // 기존 팝오버 닫기
      if (capturedCloseFunction) {
        capturedCloseFunction();
      }
      capturedCloseFunction = closeCurrentPopover;
    },
    closePopover: () => {
      if (capturedCloseFunction) {
        capturedCloseFunction();
        capturedCloseFunction = null;
      }
    },
  };
};

const popoverManager = createPopoverManager();

/**
 * 팝오버 상태를 관리하는 훅
 *
 * @description
 * 팝오버의 열림/닫힘 상태를 관리하고, 다른 팝오버가 열릴 때
 * 자동으로 기존 팝오버를 닫는 기능을 제공합니다.
 *
 * @param popoverSelector - 팝오버 요소를 식별하는 CSS 선택자
 * @returns 팝오버 상태와 제어 함수들을 포함한 객체
 *
 * @example
 * ```tsx
 * const PopoverComponent = () => {
 *   const { isOpen, onClickTrigger, closeCurrentPopover, popoverSelector } = usePopover({
 *     popoverSelector: '.my-popover'
 *   });
 *
 *   return (
 *     <Popper>
 *       <Popper.Trigger isOpen={isOpen} onClick={onClickTrigger}>
 *         팝오버 열기/닫기
 *       </Popper.Trigger>
 *
 *       <Popper.Portal>
 *         <div className="my-popover">
 *           <p>팝오버 내용</p>
 *           <button onClick={closeCurrentPopover}>닫기</button>
 *         </div>
 *       </Popper.Portal>
 *     </Popper>
 *   );
 * };
 * ```
 */
export const usePopover = ({ popoverSelector }: { popoverSelector: string }) => {
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: popoverSelector,
    useOutsideScroll: true,
    onClose: () => {
      setIsOpen(false);
      popoverManager.closePopover();
    },
  });

  const closeCurrentPopover = () => setIsOpen(false);

  const onClickTrigger = () => {
    if (!isOpen) {
      popoverManager.openPopover({ closeCurrentPopover });
    }
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    closeCurrentPopover,
    popoverSelector,
    onClickTrigger,
  };
};
