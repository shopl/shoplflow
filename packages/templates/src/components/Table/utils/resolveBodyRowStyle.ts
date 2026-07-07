import type { CSSProperties } from 'react';

import type { TableBodyRowStyle } from '../types/TableTypes';

export const DEFAULT_TABLE_BODY_ROW_HEIGHT_PX = 60;

const parseCssSizeToPx = (value?: string | number): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return undefined;
  }

  return parsed;
};

const resolveBodyRowCss = (
  bodyRowStyle: TableBodyRowStyle,
  rowIndex?: number,
  row?: unknown,
): CSSProperties | undefined => {
  if (typeof bodyRowStyle === 'function') {
    if (rowIndex === undefined) {
      return undefined;
    }
    return bodyRowStyle(rowIndex, row);
  }

  return bodyRowStyle;
};

const resolveHeightPx = (style: CSSProperties): number => {
  const fromHeight = parseCssSizeToPx(style.height);
  if (fromHeight !== undefined) {
    return fromHeight;
  }

  const fromMinHeight = parseCssSizeToPx(style.minHeight);
  if (fromMinHeight !== undefined) {
    return fromMinHeight;
  }

  return DEFAULT_TABLE_BODY_ROW_HEIGHT_PX;
};

export const resolveBodyRowStyle = (
  bodyRowStyle?: TableBodyRowStyle,
  rowIndex?: number,
  row?: unknown,
): { style?: CSSProperties; heightPx: number } => {
  if (!bodyRowStyle) {
    return { heightPx: DEFAULT_TABLE_BODY_ROW_HEIGHT_PX };
  }

  const style = resolveBodyRowCss(bodyRowStyle, rowIndex, row);
  if (!style) {
    return { heightPx: DEFAULT_TABLE_BODY_ROW_HEIGHT_PX };
  }

  return { style, heightPx: resolveHeightPx(style) };
};
