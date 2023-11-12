import type { ReactNode } from 'react';

export interface DropdownProps extends DropdownOptionProps {}
export interface DropdownOptionProps {
  trigger: ReactNode;
  content: ReactNode;
}
