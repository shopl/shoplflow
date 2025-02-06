import type { $Values } from '@shoplflow/utils';
import type {
  ChildrenProps,
  LeftAndRightNodeProps,
  SizeVariantProps,
  StyleVariantProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';
import type { ColorTokens } from '../../styles';

export const TabStyleVariants = {
  NORMAL: 'NORMAL',
  INFO: 'INFO',
} as const;

export const TabSizeVariants = {
  M: 'M',
  L: 'L',
} as const;

export type TabStyleVariantType = $Values<typeof TabStyleVariants>;
export type TabSizeVariantType = $Values<typeof TabSizeVariants>;
export interface TabsProps extends TabsOptionProps {
  /**
   * Tab은 Controlled Component입니다. onChange를 꼭 넘겨주세요
   * @param tab
   * @returns
   */
  onChange: (tab: string) => void;
}

export interface TabsOptionProps extends ChildrenProps {
  /**
   * 처음에 선택될 탭을 설정합니다.
   */
  initialTab: string;
}

export interface TabProps extends TabOptionProps {
  value: string;
  label: string;
}

export interface TabOptionProps
  extends LeftAndRightNodeProps,
    StyleVariantProps<TabStyleVariantType>,
    SizeVariantProps<TabSizeVariantType>,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  as?: React.ElementType;
  activeColor?: ColorTokens;
}

export interface TabStyledProps extends StyleVariantProps<TabStyleVariantType> {
  as?: React.ElementType;
  isActive: boolean;
  isHover: boolean;
}

export interface TabTextStyledProps extends TabStyledProps {
  activeColor?: ColorTokens;
}
