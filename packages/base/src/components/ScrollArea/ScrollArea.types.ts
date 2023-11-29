import type { positionValues } from 'react-custom-scrollbars-2';
import type { ChildrenProps } from '../../utils/type/ComponentProps';
import type * as React from 'react';

export interface ScrollAreaProps extends ScrollAreaOptionProps, ChildrenProps {}
export interface ScrollAreaOptionProps {
  id?: string;
  /**
   * (Function) 스크롤 이벤트 핸들러
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onScroll?: React.UIEventHandler<any>;
  /**
   * (Function) 애니메이션 프레임 내에서 실행됩니다.
   */
  onScrollFrame?: (values: positionValues) => void;
  /**
   * 스크롤이 시작될 때 호출됩니다.
   */
  onScrollStart?: () => void;
  /**
   * 스크롤이 멈출 때 호출됩니다.
   */
  onScrollStop?: () => void;
  /**
   * 컴포넌트가 업데이트될 때마다 호출됩니다. 애니메이션 프레임 내에서 실행됩니다.
   */
  onUpdate?: (values: positionValues) => void;
  /**
   * 콘텐츠가 렌더링될 요소
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  renderView?: React.ComponentType<any>;
  /**
   * 수평 트랙 요소
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  renderTrackHorizontal?: React.ComponentType<any>;
  /**
   * 수직 트랙 요소
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  renderTrackVertical?: React.ComponentType<any>;
  /**
   * 수평 스크롤 바 요소
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  renderThumbHorizontal?: React.ComponentType<any>;
  /**
   * 수직 스크롤 바 요소
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  renderThumbVertical?: React.ComponentType<any>;

  tagName?: string;
  /**
   * 컨테이너가 오버플로되지 않을 때 트랙을 숨깁니다
   */
  hideTracksWhenNotNeeded?: boolean;

  autoHide?: boolean;
  /**
   * 숨김 지연 시간(ms). (기본값: 1000)
   */
  autoHideTimeout?: number;
  /**
   * 숨김 지속 시간(ms). (기본값: 200)
   */
  autoHideDuration?: number;

  /**
   * 스크롤 바의 고정 크기를 px 단위로 설정합니다.
   */
  thumbSize?: number;
  /**
   * 최소 스크롤 바 크기를 px 단위로 설정합니다. (기본값: 30)
   */
  thumbMinSize?: number;
  /**
   * 범용 렌더링 활성화 (기본값: false)
   */
  universal?: boolean;
  /**
   * 자동 높이 모드 활성화. (기본값: true)
   */
  autoHeight?: boolean;
  /**
   * 자동 높이 모드의 최소 높이 설정 (기본값: 0)
   */
  autoHeightMin?: number | string;
  /**
   * 자동 높이 모드의 최대 높이 설정 (기본값: 200)
   */
  autoHeightMax?: number | string;

  style?: React.CSSProperties;
}
