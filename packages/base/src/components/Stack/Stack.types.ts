import type { ComponentPropsWithRef, CSSProperties, ReactNode } from 'react';

import type { CustomDomComponent } from 'framer-motion';
import type { BorderRadiusTokens, ColorTokens, SpacingTokens } from '../../styles';
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
) => ReactNode | null;

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
  /**
   * 요소들 사이의 간격
   */
  spacing?: SpacingTokens;
  /**
   * flex-wrap 설정
   */
  flexWrap?: CSSProperties['flexWrap'];

  /**
   * width 설정
   */
  width?: CSSProperties['width'];
  /**
   * height 설정
   */
  height?: CSSProperties['height'];
  /**
   * flex 설정
   */
  flex?: CSSProperties['flex'];
  /**
   * background 설정
   */
  background?: ColorTokens;
  /**
   * border-radius 설정
   */
  radius?: BorderRadiusTokens;
}
