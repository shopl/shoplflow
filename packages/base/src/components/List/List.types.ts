import type { $Values } from '@shoplflow/utils';
import type { SizeVariantProps } from '../../utils/type/ComponentProps';

export const ListSizeVariants = {
  SX: 'SX',
  S: 'S',
  M: 'M',
  L: 'L',
} as const;

export type ListSizeVariantType = $Values<typeof ListSizeVariants>;

export interface ListProps extends ListOptionProps {}
export interface ListOptionProps extends SizeVariantProps<ListSizeVariantType> {}
