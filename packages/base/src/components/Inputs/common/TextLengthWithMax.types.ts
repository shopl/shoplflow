import type { CSSProperties } from 'react';

export type TextLengthWithMaxProps = {
  maxLength: number;
  nowLength: number;
  wrapperStyle?: CSSProperties;
};
