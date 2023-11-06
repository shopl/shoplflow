import type { $Values } from '@shoplflow/utils';
import type { ColorTokenProps, IconSourceProps, SizeVariantProps } from '../../utils/type/ComponentProps';

export const IconSizeVariants = {
  X_SMALL: 'X_SMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  X_LARGE: 'X_LARGE',
} as const;

export type IconSizeVariantsType = $Values<typeof IconSizeVariants>;

export interface IconProps extends IconOptionProps {}
export interface IconOptionProps extends SizeVariantProps<IconSizeVariantsType>, IconSourceProps, ColorTokenProps {}
