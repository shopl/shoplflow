import type { ComponentPropsWithRef, CSSProperties, ReactNode } from 'react';

import type { CustomDomComponent } from 'framer-motion';
import type { ColorTokens } from '../../styles';
import type {
  ChildrenProps,
  HTMLPropsWithOutRef,
  RenderConfigProps,
  StringElementType,
} from '../../utils/type/ComponentProps';

export type StackGenericProps<T extends StringElementType = 'div'> = RenderConfigProps &
  StackProps &
  HTMLPropsWithOutRef<T>;

export type StackComponentType = <T extends StringElementType = 'div'>(
  props: StackGenericProps<T> & Pick<ComponentPropsWithRef<T>, 'ref'>,
) => ReactNode;

export type MotionStackComponentType<T extends StringElementType = 'div'> = CustomDomComponent<
  RenderConfigProps & HTMLPropsWithOutRef<T> & StackProps
>;

export interface StackProps extends StackOptionProps, ChildrenProps {}
export interface StackOptionProps {
  /**
   * 요소들의 align-items 값
   */
  align?: CSSProperties['alignItems'];
  /**
   * 요소들의 justify-content 값
   */
  justify?: CSSProperties['justifyContent'];
  /**
   * 요소들의 flex-direction 값
   * (값: row, column)
   */
  direction?: CSSProperties['flexDirection'];
  /** 요소들 사이의 간격
   * @default 24
   */
  gap?: number;

  flexWrap?: CSSProperties['flexWrap'];

  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  flex?: CSSProperties['flex'];
  background?: ColorTokens;
}
