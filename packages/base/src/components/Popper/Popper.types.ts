import type { HTMLAttributes } from 'react';
import type { Middleware } from '@floating-ui/react-dom';
import type { Placement, AutoPlacementOptions } from '@floating-ui/react';
import type { OffsetOptions } from '@floating-ui/core';
import type { ChildrenProps } from '../../utils/type/ComponentProps';

export interface PopperProps extends PopperOptionProps {}
export interface PopperOptionProps extends ChildrenProps {
  /**
   * popper의 offset을 설정합니다.
   *
   * Ref: https://floating-ui.com/docs/offset#offset
   */
  offset?: OffsetOptions;

  /**
   * 화면 뷰에 따라 자동으로 위치를 조정할 수 있습니다.
   * floating ui의 autoPlacement 미들웨어를 사용합니다.
   *
   * Ref: https://floating-ui.com/docs/autoplacement
   */
  autoPlacement?: AutoPlacementOptions;
  /**
   * popper의 위치를 지정할 수 있습니다.
   *
   * Ref: https://floating-ui.com/docs/arrow#placement
   */
  placement?: Placement;
  /**
   * popper의 속성을 결정할 수 있습니다.
   */
  strategy?: 'absolute' | 'fixed';
  /**
   * floating ui의 middleware를 넣을 수 있습니다.
   *
   * Ref: https://floating-ui.com/docs/useFloating#middleware
   */
  middlewares?: Array<Middleware | null | undefined | false>;
}

export interface PopperTriggerProps extends ChildrenProps, HTMLAttributes<HTMLDivElement> {
  /**
   * popper가 열려있는지 여부를 결정합니다.
   */
  isOpen?: boolean;
  width?: string;
  height?: string;
}

export interface PopperPortalProps extends ChildrenProps, HTMLAttributes<HTMLDivElement> {
  /**
   * animation을 넣을 수 있습니다.
   * framer-motion의 animation을 사용합니다.
   */
  animation?: {
    initial: Record<string, unknown>;
    animate: Record<string, unknown>;
    exit: Record<string, unknown>;
  };
}
