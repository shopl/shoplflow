import { createContext, useContext } from 'react';
import type { ToggleButtonSizeVariantType } from './ToggleButton.types';

export type ToggleButtonContextType = {
  fixedWidth: number;
  targetName: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue?: string;
  sizeVar: ToggleButtonSizeVariantType;
};

export const ToggleButtonContext = createContext<ToggleButtonContextType | null>(null);

export const useToggleButton = () => {
  const context = useContext(ToggleButtonContext);

  if (!context) {
    throw new Error('ToggleInnerButton 컴포넌트는 ToggleButton 내부에서 사용해주세요');
  }

  return context;
};
