import type { $Values } from '@shoplflow/utils';
import type { ChildrenProps, StyleVariantProps } from '../../utils/type/ComponentProps';

export const CalloutTypes = {
  INFORMATION: 'INFORMATION',
  ALERT: 'ALERT',
} as const;

export type CalloutType = $Values<typeof CalloutTypes>;

export interface CalloutProps extends CalloutOptionProps, ChildrenProps, StyleVariantProps<CalloutType> {}
export interface CalloutOptionProps {}
