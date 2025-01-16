import { createContext, useContext } from 'react';

export type DropdownButtonContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const DropdownButtonContext = createContext<DropdownButtonContextType | null>(null);

export const useDropdownButtonContext = () => {
  const context = useContext(DropdownButtonContext);

  if (!context) {
    throw new Error('DropdownButtonContext must be used within a DropdownButton component');
  }

  return context;
};
