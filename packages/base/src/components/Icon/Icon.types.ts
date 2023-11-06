import type { $Values } from '@shoplflow/utils';

export const IconSizeVariants = {
  X_SMALL: 'X_SMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  X_LARGE: 'X_LARGE',
} as const;

export type IconSizeVariants = $Values<typeof IconSizeVariants>;

export interface IconProps extends IconOptionProps {}
export interface IconOptionProps {}
