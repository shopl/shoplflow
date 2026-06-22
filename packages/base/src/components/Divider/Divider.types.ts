import type { CSSProperties } from 'react';

import type { HTMLPropsWithoutRef, RenderConfigProps } from '../../utils/type/ComponentProps';

/**
 * 구분선의 방향입니다.
 * - `row`: 가로 구분선 (좌우로 늘어나는 선)
 * - `column`: 세로 구분선 (위아래로 늘어나는 선)
 */
export type DividerDirection = 'row' | 'column';

export interface DividerOptionProps {
  /**
   * 구분선의 방향을 설정합니다.
   * (값: row, column)
   *
   * @default 'row'
   */
  direction?: DividerDirection;
  /**
   * 구분선의 색상을 설정합니다. CSS color 값을 그대로 사용합니다.
   * (예: `colorTokens.neutral200`, `'#EAEAEA'`)
   *
   * @default colorTokens.neutral200
   */
  color?: CSSProperties['color'];
  /**
   * 구분선이 뻗어나가는 길이를 설정합니다.
   * (direction이 row면 width, column이면 height에 적용)
   *
   * @default '100%'
   */
  length?: CSSProperties['width'];
  /**
   * 구분선의 두께를 설정합니다.
   * (direction이 row면 height, column이면 width에 적용)
   *
   * @default '1px'
   */
  thickness?: CSSProperties['width'];
  /**
   * true이면 direction 방향(length 축)으로 부모의 가용 영역을 가득 채웁니다.
   * (`align-self: stretch` + length 축을 `auto`로 설정)
   *
   * 부모 padding 안쪽(content 영역)을 채우며, 부모 높이가 불확정이거나
   * `align-items`가 stretch가 아니어도 안정적으로 늘어납니다.
   * 부모가 flex 컨테이너일 때 가장 잘 동작하며, `length`보다 우선합니다.
   *
   * @default false
   */
  isFull?: boolean;
}

export type DividerProps = RenderConfigProps & DividerOptionProps & HTMLPropsWithoutRef<'div'>;
