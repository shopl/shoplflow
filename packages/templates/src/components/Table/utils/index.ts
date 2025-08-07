import type { Column } from '@tanstack/react-table';
import type { CSSProperties } from 'react';

export const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned();

  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 10 : 0,
  };
};

export const PAGE_SIZE = [
  { key: '5', label: '5' },
  { key: '10', label: '10' },
  { key: '20', label: '20' },
  { key: '50', label: '50' },
  { key: '100', label: '100' },
];
