import type { ReactNode } from 'react';
import type { PopperOptionProps } from '../Popper';

export interface DropdownProps extends DropdownOptionProps {}
export interface DropdownOptionProps extends Omit<PopperOptionProps, 'popper' | 'autoPlacement' | 'offset'> {
  content: ReactNode;
}
