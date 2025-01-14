import { createContext, useContext } from 'react';

export type SplitButtonContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SplitButtonContext = createContext<SplitButtonContextType | null>(null);

export const useSplitButtonContext = () => {
  const context = useContext(SplitButtonContext);

  if (!context) {
    throw new Error('SplitButtonContext must be used within a SplitButton component');
  }

  return context;
};
