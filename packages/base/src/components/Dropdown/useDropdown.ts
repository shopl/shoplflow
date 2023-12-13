import { createContext, useContext } from 'react';
import type { DropdownOptionVariantType } from './Dropdown.types';

export type DropdownContextType = {
  isOpen: boolean;
  option: DropdownOptionVariantType;
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
