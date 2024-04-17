import { createContext } from 'react';
import * as React from 'react';
import type { ReferenceType } from '@floating-ui/react';
import type { UseFloatingReturn } from '@floating-ui/react-dom';

type PopperContextType<RT extends ReferenceType = ReferenceType> = Omit<UseFloatingReturn<RT>, 'refs'> & {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  reference: React.MutableRefObject<RT | null>;
  floating: React.MutableRefObject<HTMLElement | null>;
  setReference: (node: RT | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: React.CSSProperties;
};

export const PopperContext = createContext<PopperContextType | null>(null);

export const usePopper = () => {
  const context = React.useContext(PopperContext);

  if (context === null) {
    throw new Error('usePopper must be used within a PopperProvider');
  }
  return context;
};
