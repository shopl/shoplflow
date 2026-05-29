import type { CSSProperties, ElementType } from 'react';

import type { ColorTokens, TypographyTokens } from '../../styles';
import type { ChildrenProps, PolymorphicComponentProps } from '../../utils/type/ComponentProps';

export interface TextOptionProps {
  /**
   * 타이포그레피를 설정합니다.
   */
  typography?: TypographyTokens;

  color?: ColorTokens;
  /**
   * 텍스트를 몇 줄까지 보여줄지를 설정합니다.
   */
  lineClamp?: number;
  whiteSpace?: CSSProperties['whiteSpace'];
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  textOverflow?: CSSProperties['textOverflow'];
  textDecorations?: CSSProperties['textDecoration'];
  opacity?: CSSProperties['opacity'];
  wordBreak?: CSSProperties['wordBreak'];
  overflowWrap?: CSSProperties['overflowWrap'];
}

export type TextProps<C extends ElementType = 'span'> = PolymorphicComponentProps<
  C,
  TextOptionProps & ChildrenProps,
  'color'
>;
