import { useCallback, useState, type ReactNode } from 'react';
import { ModalOptionContext } from './ModalOptionContext';

interface ModalOptionProviderProps {
  children?: ReactNode;
}

export const ModalOptionContextProvider = ({ children }: ModalOptionProviderProps) => {
  const [heightToDeduct, setHeightToDeduct] = useState<number>(0);

  const controlHeightToDeduct = useCallback((heightToAdd: number) => {
    setHeightToDeduct((prev) => prev + heightToAdd);
  }, []);

  const clearHeightToDeduct = useCallback(() => {
    setHeightToDeduct(0);
  }, []);

  return (
    <ModalOptionContext.Provider
      value={{ heightToDeduct, setHeightToDeduct: controlHeightToDeduct, clearHeightToDeduct }}
    >
      {children}
    </ModalOptionContext.Provider>
  );
};
