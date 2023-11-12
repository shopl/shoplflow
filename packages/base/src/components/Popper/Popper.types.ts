import type { ReactNode } from 'react';
import type { Middleware } from '@floating-ui/react-dom';
import type { Placement } from '@floating-ui/react';
import type { OffsetOptions } from '@floating-ui/core';

export interface PopperProps extends PopperOptionProps {}
export interface PopperOptionProps {
  /**
   * popper의 offset을 설정합니다.
   * Ref: https://floating-ui.com/docs/offset#offset
   */
  offset?: OffsetOptions;
  /**
   * popper가 열려있는지 여부를 결정합니다.
   */
  isOpen?: boolean;
  /**
   * 화면 뷰에 따라 자동으로 위치를 조정할 수 있습니다.
   * Ref: https://floating-ui.com/docs/autoplacement
   */
  autoPlacement?: boolean;
  /**
   * popper의 위치를 지정할 수 있습니다.
   * Ref: https://floating-ui.com/docs/arrow#placement
   */
  placement?: Placement;
  /**
   * autoPlacement가 true일 때, popper의 위치를 지정할 수 있습니다.
   * placement는 무시됩니다.
   */
  alignment?: 'start' | 'end';
  /**
   * popper의 속성을 결정할 수 있습니다.
   */
  strategy?: 'absolute' | 'fixed';
  /**
   * floating ui의 middleware를 넣을 수 있습니다.
   * Ref: https://floating-ui.com/docs/useFloating#middleware
   */
  middlewares?: Array<Middleware | null | undefined | false>;
  /**
   * floating ui의 animation을 넣을 수 있습니다.
   * framer-motion의 animation을 사용합니다.
   */
  animation?: {
    initial: Record<string, unknown>;
    animate: Record<string, unknown>;
    exit: Record<string, unknown>;
  };
  /**
   * trigger할 요소를 설정합니다.
   */
  trigger: ReactNode;
  /**
   * pop할 요소를 설정합니다.
   */
  popper: ReactNode;
}
