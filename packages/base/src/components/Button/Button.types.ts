import type { CSSProperties, HTMLAttributes } from 'react';

import type { ColorTokens, TypographyTokens } from '../../styles';
import type { ChildrenProps, RenderConfigProps } from '../../utils/type/ComponentProps';

export type ButtonSize = 's' | 'm';

export type ButtonType = 'primary' | 'secondary' | 'solid' | 'ghost';

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
}

export interface TextProps
  extends TextOptionProps,
    ChildrenProps,
    RenderConfigProps,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {}
