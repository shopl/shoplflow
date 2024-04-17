import type { CSSProperties, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

import type { CustomDomComponent } from 'framer-motion';
import type { BorderRadiusTokens, ColorTokens, SpacingTokens } from '../../styles';
import type {
  ChildrenProps,
  HTMLPropsWithoutRef,
  RenderConfigProps,
  StringElementType,
} from '../../utils/type/ComponentProps';

export type StackContainerGenericProps<T extends StringElementType = 'div'> = RenderConfigProps &
  StackContainerProps &
  HTMLPropsWithoutRef<T>;

// NOTICE: 주석 처리된 type과 forwardRef return type이 불일치해서, 에러 나타납니다.
// export type StackContainerComponentType = <T extends StringElementType = 'div'>(
//   props: StackContainerGenericProps<T> & Pick<ComponentPropsWithRef<T>, 'ref'>,
// ) => ReactElement | null;

export type StackContainerComponentType = ForwardRefExoticComponent<
  PropsWithoutRef<StackContainerGenericProps> & RefAttributes<HTMLElement>
>;

export type MotionStackContainerComponentType<T extends StringElementType = 'div'> = CustomDomComponent<
  RenderConfigProps & HTMLPropsWithoutRef<T> & StackContainerProps
>;

export interface StackContainerProps extends StackContainerOptionProps, ChildrenProps {}
export interface StackContainerOptionProps {
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
   * padding, margin 설정
   */
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
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
