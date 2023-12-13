import type { $Values } from '@shoplflow/utils';
import type { SizeVariantProps } from '../../utils/type/ComponentProps';
import type { ImgHTMLAttributes, ReactNode } from 'react';

export const AvatarSizeVariants = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
} as const;

export type AvatarSizeVariantType = $Values<typeof AvatarSizeVariants>;

export interface AvatarProps extends AvatarOptionProps {}
export interface AvatarOptionProps
  extends SizeVariantProps<AvatarSizeVariantType>,
    ImgHTMLAttributes<HTMLImageElement> {
  badge?: ReactNode;
}
