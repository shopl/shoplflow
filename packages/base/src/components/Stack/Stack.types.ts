import type { CSSProperties, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

import type { CustomDomComponent } from 'framer-motion';
import type { BorderRadiusTokens, ColorTokens, SpacingTokens } from '../../styles';
import type {
  ChildrenProps,
  HTMLPropsWithoutRef,
  RenderConfigProps,
  StringElementType,
} from '../../utils/type/ComponentProps';

export type StackGenericProps<T extends StringElementType = 'div'> = RenderConfigProps &
  StackProps &
  HTMLPropsWithoutRef<T>;

export type StackComponentType = ForwardRefExoticComponent<
  PropsWithoutRef<StackGenericProps> & RefAttributes<HTMLElement>
>;

export type MotionStackComponentType<T extends StringElementType = 'div'> = CustomDomComponent<
  RenderConfigProps & HTMLPropsWithoutRef<T> & StackProps
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
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  /**
   * height 설정
   */
  height?: CSSProperties['height'];
  maxHeight?: CSSProperties['maxHeight'];
  minHeight?: CSSProperties['minHeight'];
  /**
   * flex 설정
   */
  flex?: CSSProperties['flex'];
  /**
   * @deprecated
   * StackContainer를 사용해주세요.
   */
  background?: ColorTokens;
  /**
   * @deprecated
   * StackContainer를 사용해주세요.
   */
  radius?: BorderRadiusTokens;
}
