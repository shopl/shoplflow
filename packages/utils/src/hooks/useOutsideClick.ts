import type React from 'react';
import { useEffect, useState } from 'react';

type UseOutsideClickProps = {
  selector?: string;
  useOutsideScroll?: boolean;
  onClose?: () => void;
};

const useOutsideClick = ({
  selector,
  useOutsideScroll,
  onClose,
}: UseOutsideClickProps): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!selector && !useOutsideScroll) {
      return;
    }

    const handleOutClick = (e: MouseEvent) => {
      if (!selector) {
        return;
      }

      const target = e.target as Element;

      const checkClickedTarget = target.closest(selector) || target.closest('#popover');

      if (checkClickedTarget === null) {
        onClose ? onClose() : setIsOpened(false);
      }
    };

    const handleScroll = () => {
      onClose && onClose();
    };

    if (selector) {
      setTimeout(() => {
        document.addEventListener('click', handleOutClick);
      }, 0);
    }

    if (useOutsideScroll) {
      setTimeout(() => {
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('wheel', handleOutClick);
      }, 0);
    }

    return () => {
      if (!selector && !useOutsideScroll) {
        return;
      }

      if (selector) {
        document.removeEventListener('click', handleOutClick);
      }

      if (useOutsideScroll) {
        document.removeEventListener('scroll', handleScroll);
        document.removeEventListener('wheel', handleOutClick);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, useOutsideScroll, onClose]);

  useEffect(() => {
    return () => setIsOpened(false); // CleanUp function
  }, []);

  return [isOpened, setIsOpened];
};

export default useOutsideClick;
