import type { TextProps, TooltipProps } from '@shoplflow/base';
import type { ChildrenProps } from '@shoplflow/base/src/utils/type/ComponentProps';
import type { ReactNode } from 'react';

export type ActionsProps = {
  children: ReactNode;
};

export type DescriptionProps = {
  description?: string;
} & TextProps;

export type TitleGroupHelpIconProps = {
  /**
   * 툴팁 내용, 없을 경우 Tooltip 미노출
   */
  tooltipMessage?: string;

  /**
   * 툴팁 오프셋 값
   */
  tooltipOffsetValue?: number;

  /**
   * 툴팁 최대 너비
   */
  tooltipMaxWidth?: number;

  /**
   * 툴팁 위치
   */
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * 아이콘 버튼 클릭 이벤트
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TitleGroupHeaderProps = {
  /**
   * 제목
   */
  title: string;

  /**
   * 제목의 타이포그래피 스타일
   */
  depth: 1 | 2 | 3;

  /**
   * 아이템의 총 갯수
   */
  count?: string;

  /**
   * 설명
   */
  description?: string;

  /**
   * 필수 여부 표시
   */
  isRequired?: boolean;
  helpIconProps?: TitleGroupHelpIconProps;
};

export interface TitleGroupProps extends ChildrenProps {}
