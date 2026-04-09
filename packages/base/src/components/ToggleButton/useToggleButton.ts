import { createContext, useContext, type ChangeEventHandler } from 'react';
import type { ToggleButtonSizeVariantType } from './ToggleButton.types';

export type ToggleButtonContextType = {
  fixedWidth: number;
  targetName: string;
  sizeVar: ToggleButtonSizeVariantType;
  disabled: boolean;
  selectedValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ToggleButtonContext = createContext<ToggleButtonContextType | null>(null);

export const useToggleButton = () => {
  const context = useContext(ToggleButtonContext);

  if (!context) {
    throw new Error('ToggleInnerButton 컴포넌트는 ToggleButton 내부에서 사용해주세요');
  }

  return context;
};
