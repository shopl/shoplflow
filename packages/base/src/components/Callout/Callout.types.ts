import type { $Values } from '@shoplflow/utils';
import type { ChildrenProps, StyleVariantProps } from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export const CalloutTypes = {
  INFORMATION: 'INFORMATION',
  ALERT: 'ALERT',
} as const;

export type CalloutType = $Values<typeof CalloutTypes>;

export interface CalloutProps
  extends CalloutOptionProps,
    ChildrenProps,
    StyleVariantProps<CalloutType>,
    HTMLAttributes<HTMLDivElement> {}
export interface CalloutOptionProps {
  /**
   * Callout 컴포넌트의 너비를 100%로 설정합니다.
   */
  fillWidth?: boolean;
}
