import type { $Values } from '@shoplflow/utils';
import type {
  ChildrenProps,
  ColorTokenProps,
  LeftAndRightElementProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export const TagStyleVariants = {
  SOLID: 'SOLID',
  TINT: 'TINT',
  LINE: 'LINE',
} as const;

export const TagSizeVariants = {
  XS: 'XS',
  S: 'S',
  M: 'M',
} as const;

export type TagStyleVariantType = $Values<typeof TagStyleVariants>;
export type TagSizeVariantType = $Values<typeof TagSizeVariants>;

export interface TagProps extends TagOptionProps {}
export interface TagOptionProps
  extends SizeVariantProps<TagSizeVariantType>,
    StyleVariantProps<TagStyleVariantType>,
    ColorTokenProps,
    LeftAndRightElementProps,
    ChildrenProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  radius?: boolean;
}
