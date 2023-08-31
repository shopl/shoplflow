import type { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';
import type React from 'react';
import type { ColorTokens } from '../../styles';

export type StringElementType = ElementType & string;

export type HTMLPropsWithOutRef<T extends StringElementType> = ComponentPropsWithoutRef<T>;

export type RenderConfigProps = {
  /**
   * 랜더하려고 하는 HTML tag로 변환할 수 있습니다.
   *
   * 예를 들어 a tag로 변환한다면 as='a'로 작성해주세요.
   *
   * @see https://emotion.sh/docs/styled#as-prop
   */
  as?: StringElementType;
};
export interface SizeVariantProps<Size> {
  /**
   * 컴포넌트의 크기를 설정합니다.
   */
  sizeVar?: Size;
}

export interface StyleVariantProps<Style> {
  /**
   * 컴포넌트의 스타일을 설정합니다.
   */
  styleVar?: Style;
}

export interface ChildrenProps<Children = React.ReactNode> {
  /**
   * 컴포넌트 내부에 들어갈 children을 설정합니다.
   */
  children?: Children;
}

export interface DisableProps {
  /**
   * 비활성화 여부를 설정합니다.
   */
  disabled?: boolean;
}

export interface ColorTokenProps {
  /**
   * 텍스트 혹은 아이콘의 색상을 설정합니다.
   */
  color?: ColorTokens;
}

export interface BorderColorProps {
  /**
   * 테두리의 색상을 설정합니다.
   */
  borderColor?: ColorTokens;
}
export interface BackgroundColorProps {
  /**
   * 배경의 색상을 설정합니다.
   */
  background?: ColorTokens;
}

export interface IconSourceProps {
  /**
   * Icon을 설정합니다.
   */
  iconSource?: HTMLOrSVGElement;
}

export interface LeftNodeProps {
  /**
   * 텍스트를 기준으로 왼쪽에 위치할 ReactNode를 설정합니다.
   */
  leftSource?: ReactNode;
}
export interface RightNodeProps {
  /**
   * 텍스트를 기준으로 오른쪽에 위치할 ReactNode를 설정합니다.
   */
  rightSource?: ReactNode;
}
export interface LeftAndRightNodeProps extends RightNodeProps, LeftNodeProps {}

export interface LeftElementProps {
  /**
   * 텍스트를 기준으로 왼쪽에 위치할 ReactElement를 설정합니다.
   */
  leftSource?: ReactElement;
}
export interface RightElementProps {
  /**
   * 텍스트를 기준으로 오른쪽에 위치할 ReactElement를 설정합니다.
   */
  rightSource?: ReactElement;
}
export interface LeftAndRightElementProps extends RightElementProps, LeftElementProps {}