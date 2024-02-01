import type { ChildrenProps, LeftAndRightNodeProps } from 'src/utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export type TabsLevel = 'level1' | 'level2' | 'level3';
export interface TabsProps extends TabOptionProps {
  /**
   * context로 내려줄 level
   * level1, level2, level3
   */
  level: TabsLevel;
  /**
   * Tab 외부에서 선택된 탭을 알고 싶을 경우 사용하는 함수입니다.
   * @param tab
   * @returns
   */
  onChangeTab?: (tab: string) => void;
}

export interface TabOptionProps extends ChildrenProps {
  initialTab?: string;
}

export interface TabTriggerProps extends TabTriggerOptionProps, HTMLAttributes<HTMLElement> {}

export interface TabTriggerOptionProps extends LeftAndRightNodeProps {
  value: string;
  label: string;
  as?: React.ElementType;
}

export interface TabsPanelProps extends TabsPanelOptionProps, HTMLAttributes<HTMLElement> {}

export interface TabsPanelOptionProps extends ChildrenProps {
  value: string;
}
