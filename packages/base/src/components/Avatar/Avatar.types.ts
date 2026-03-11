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

export interface AvatarProps extends AvatarOptionProps {
  fallbackUrl?: string;
}
export interface AvatarOptionProps
  extends SizeVariantProps<AvatarSizeVariantType>, ImgHTMLAttributes<HTMLImageElement> {
  /**
   * 아바타 우측 하단에 배지를 표시합니다.
   */
  badge?: ReactNode;
}
