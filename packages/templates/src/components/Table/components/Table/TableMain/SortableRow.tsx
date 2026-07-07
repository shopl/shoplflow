import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Cell, Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';

import { Icon, StackContainer } from '@shoplflow/base';
import { ListMoveIcon } from '@shoplflow/shopl-assets';

import { getColumnActiveHoverDataAttribute } from '../../../utils';
import { TableCell, TableRow } from '../Table.styled';

// Drag Handle 컴포넌트
const DragHandle = ({ listeners, attributes }: any) => (
  <StackContainer.Horizontal
    align='center'
    justify='center'
    padding='4px'
    {...listeners}
    {...attributes}
    style={{
      cursor: 'grab',
      touchAction: 'none',
    }}
    background='neutral0'
  >
    <Icon iconSource={ListMoveIcon} sizeVar='S' color='neutral700' />
  </StackContainer.Horizontal>
);

type SortableRowProps = {
  row: Row<any>;
  index: number;
  cells: Array<Cell<any, unknown>>;
  hasPinned: boolean;
  onClickRow?: (row: any) => void;
  getFixedCellStyle: (column: any) => React.CSSProperties;
  showDragHandle: boolean;
  shouldFixDragHandle?: boolean;
  dragColWidth?: 32 | 40;
  bodyRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
};

export const SortableRow = ({
  row,
  index,
  cells,
  hasPinned,
  onClickRow,
  getFixedCellStyle,
  showDragHandle,
  shouldFixDragHandle = false,
  dragColWidth = 40,
  bodyRowStyle,
}: SortableRowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: row.id || `row-${index}`,
  });

  const baseRowStyle = typeof bodyRowStyle === 'function' ? bodyRowStyle(index, row.original) : bodyRowStyle;
  const style = {
    ...baseRowStyle,
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
    backgroundColor: isSortableDragging ? '#f5f5f5' : undefined,
  };

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      data-index={index}
      data-has-pinned={hasPinned}
      onClick={() => {
        if (typeof row.getVisibleCells === 'function') {
          onClickRow?.(row.original);
        } else if (Array.isArray(row) && row.length > 0 && row[0].row?.original) {
          onClickRow?.(row[0].row.original);
        }
      }}
      className={onClickRow !== undefined ? 'clickable' : `row-${index}`}
    >
      {showDragHandle && (
        <TableCell
          style={
            shouldFixDragHandle
              ? {
                  position: 'sticky',
                  left: 0,
                  zIndex: 11,
                  width: `${dragColWidth}px`,
                  minWidth: `${dragColWidth}px`,
                  maxWidth: `${dragColWidth}px`,
                  backgroundColor: 'neutral0',
                }
              : undefined
          }
          data-last-left-pinned={shouldFixDragHandle ? false : undefined}
        >
          <DragHandle listeners={listeners} attributes={attributes} />
        </TableCell>
      )}
      {cells.map((cell: any) => {
        const isPinned = cell.column.getIsPinned();
        const isLastLeftPinned = isPinned === 'left' && cell.column.getIsLastColumn('left');
        const isFirstRightPinned = isPinned === 'right' && cell.column.getIsFirstColumn('right');
        // 드래그 앤 드롭 후 인덱스 업데이트를 위해 cell context의 row.index를 오버라이드
        const cellContext = cell.getContext();
        const overriddenContext = {
          ...cellContext,
          row: {
            ...cellContext.row,
            index,
          },
        };
        return (
          <Fragment key={cell.id}>
            <TableCell
              data-last-left-pinned={isLastLeftPinned}
              data-first-right-pinned={isFirstRightPinned}
              data-no-hover={getColumnActiveHoverDataAttribute(
                cell.column.columnDef.meta?.activeHover,
                cell.row.original,
              )}
              style={getFixedCellStyle(cell.column)}
            >
              {flexRender(cell.column.columnDef.cell, overriddenContext) as React.ReactNode}
            </TableCell>
          </Fragment>
        );
      })}
    </TableRow>
  );
};
