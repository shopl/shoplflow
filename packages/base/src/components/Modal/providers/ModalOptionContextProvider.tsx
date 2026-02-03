import { useCallback, useState, type ReactNode } from 'react';
import { ModalOptionContext } from './ModalOptionContext';

interface ModalOptionProviderProps {
  children?: ReactNode;
}

export const ModalOptionContextProvider = ({ children }: ModalOptionProviderProps) => {
  const [topHeight, setTopHeight] = useState<number>(0);
  const [bottomHeight, setBottomHeight] = useState<number>(0);

  const clearTopHeight = useCallback(() => {
    setTopHeight(0);
  }, []);

  const clearBottomHeight = useCallback(() => {
    setBottomHeight(0);
  }, []);

  return (
    <ModalOptionContext.Provider
      value={{
        topHeight,
        bottomHeight,
        setTopHeight,
        setBottomHeight,
        clearTopHeight,
        clearBottomHeight,
      }}
    >
      {children}
    </ModalOptionContext.Provider>
  );
};
