import type { TooltipProps } from '../Tooltip';
import type { RightElementProps } from '../../utils/type/ComponentProps';
import type { ColorTokens } from '../../styles';

export type TooltipPlacementType = NonNullable<TooltipProps['placement']>;

// Props 정의
export type TitleProps = RightElementProps & {
  /**
   * 제목
   */
  title: string;

  /**
   * 제목의 타이포그래피 스타일
   */
  titleTypography?: 'body1_700' | 'title2_700' | 'body2_500';

  /**
   * 제목의 컬러 스타일
   */
  titleColor?: ColorTokens;

  /**
   * 아이템의 총 갯수
   */
  total?: number | string;

  /**
   * 설명
   */
  description?: string;

  /**
   * 필수 여부 표시
   */
  isRequired?: boolean;

  /**
   * 도움말 아이콘 표시 여부
   */
  isShowHelpIcon?: boolean;

  /**
   * 툴팁 사용 여부
   */
  isShowTooltip?: boolean;

  /**
   * 툴팁 내용
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
  tooltipPlacement?: TooltipPlacementType;
};
