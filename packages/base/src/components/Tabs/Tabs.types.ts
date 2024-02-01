import type { ChildrenProps, LeftAndRightNodeProps } from '../../utils/type/ComponentProps';
import type { HTMLAttributes, ReactElement } from 'react';

export type TabsLevel = 'level1' | 'level2' | 'level3';
export interface TabsProps extends TabsOptionProps {
  /**
   * context로 내려줄 level
   * level1, level2, level3
   */
  level: TabsLevel;
  /**
   * Tab은 Controlled Component입니다. onChange를 꼭 넘겨주세요
   * @param tab
   * @returns
   */
  onChange: (tab: string) => void;
}

export interface TabsOptionProps extends ChildrenProps {
  initialTab: string;
}

export interface TabProps extends TabOptionProps, HTMLAttributes<HTMLElement> {}

export interface TabOptionProps extends LeftAndRightNodeProps {
  value: string;
  label: string;
  as?: React.ElementType;
}

export interface SwitchCaseProps {
  value: string;
  caseBy: { [key: string]: ReactElement };
}
