import type { HTMLAttributes, Ref } from 'react';
import type { PopperProps } from '../Popper';

export interface TooltipProps extends TooltipOptionProps, Omit<PopperProps, 'autoPlacement'> {}

export interface TooltipOptionProps {
  trigger: React.ReactNode;
  popper: React.ReactNode;
  triggerRef?: Ref<HTMLDivElement>;
  portalRef?: Ref<HTMLDivElement>;
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}
