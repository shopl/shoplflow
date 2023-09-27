import { useEffect, useState } from 'react';

/**
 * toggle 기능을 추상화한 hook입니다.
 * selected, defaultSelected를 받아서 토글을 관리하는 hook입니다.
 * selected가 있으면 controlled, 없으면 uncontrolled로 동작합니다.
 * defaultSelected가 있으면 초기값으로 설정됩니다.
 * @param {boolean} selected
 * @param {boolean} defaultSelected
 * @return {[boolean, (() => void)]}
 */

export type UseOnToggle = (selected?: boolean, defaultSelected?: boolean) => [boolean, () => void];

export const useOnToggle: UseOnToggle = (selected, defaultSelected) => {
  const [isToggle, setIsToggle] = useState(false);
  const isControlled = selected !== undefined;

  const handleToggle = () => {
    !isControlled && setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    if (isControlled) {
      setIsToggle(selected);
    }
  }, [isControlled, selected]);

  useEffect(() => {
    if (defaultSelected) {
      setIsToggle(defaultSelected);
    }
  }, [defaultSelected, isControlled]);

  return [isToggle, handleToggle];
};
