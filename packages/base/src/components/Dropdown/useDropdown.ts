import { createContext, useContext } from 'react';

export type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  width: number;
  height: number;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);

  if (context === null) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
