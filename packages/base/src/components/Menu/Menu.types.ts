import type {
  ChildrenProps,
  DefaultSelectedProps,
  DisableProps,
  LeftElementProps,
  RightElementProps,
  SelectedProps,
  SizeVariantProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';
import type { $Values } from '@shoplflow/utils';

export const MenuSizeVariants = {
  XS: 'XS',
  S: 'S',
  M: 'M',
} as const;

export type MenuSizeVariantType = $Values<typeof MenuSizeVariants>;

export interface MenuProps extends MenuOptionProps, HTMLAttributes<HTMLLIElement> {}
export interface MenuOptionProps
  extends ChildrenProps,
    DisableProps,
    RightElementProps,
    LeftElementProps,
    SelectedProps,
    DefaultSelectedProps,
    SizeVariantProps<MenuSizeVariantType> {}
