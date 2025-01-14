import type { $Values } from '@shoplflow/utils';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import type {
  ColorTokenProps,
  DisableProps,
  LeftAndRightNodeProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../../utils/type/ComponentProps';
import type { Placement } from '@floating-ui/core';

export const SplitButtonSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type SplitButtonSizeVariantType = $Values<typeof SplitButtonSizeVariants>;

export const SplitButtonStyleVariants = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
} as const;

export type SplitButtonStyleVariantType = $Values<typeof SplitButtonStyleVariants>;

export interface SplitButtonProps extends SplitButtonOptionProps {
  placement?: Placement;
  floatingZIndex?: CSSProperties['zIndex'];
  lineClamp?: number;
  text: string;
}
export type SplitButtonOptionProps = Omit<ComponentPropsWithoutRef<'button'>, 'color' | 'disabled'> &
  SizeVariantProps<SplitButtonSizeVariantType> &
  StyleVariantProps<SplitButtonStyleVariantType> &
  LeftAndRightNodeProps &
  DisableProps &
  ColorTokenProps;
