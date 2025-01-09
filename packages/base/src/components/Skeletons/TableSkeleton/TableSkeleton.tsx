import * as SC from './TableSkeleton.styled';
import Skeleton from '../Skeleton/Skeleton';
import type { TableSkeletonProps } from './TableSkeleton.types';

const TableSkeleton = (props: TableSkeletonProps) => {
  const { type, rowNum = 6, columnNum = 9 } = props;

  if (type === 'grid') {
    const {
      headerRowNum = 2,
      lastColumnNoSkeleton,
      headerColumnSkeletonStyle,
      headerRowStyle,
      columnSkeletonStyle,
      firstColumnSkeletonStyle,
      rowStyle,
      customGridTemplateColumnsStyle,
    } = props;

    return (
      <SC.Wrapper>
        {Array.from({ length: headerRowNum }).map((_, rowIndex) => (
          <SC.HeaderRowWrapper
            key={rowIndex}
            height={rowIndex === 0 ? '60px' : '36px'}
            style={headerRowStyle}
            customGridTemplateColumnsStyle={customGridTemplateColumnsStyle}
          >
            {Array.from({ length: columnNum }).map((_, colIndex) => {
              const key = `${rowIndex}-${colIndex}`;
              if (colIndex === 0 || (colIndex === columnNum - 1 && lastColumnNoSkeleton)) {
                return <SC.ColumnWrapper className='column-wrapper' key={key} />;
              }
              return (
                <SC.ColumnWrapper className='column-wrapper' justifyContent='center' key={key}>
                  <Skeleton
                    style={{
                      width: '60px',
                      height: '20px',
                      borderRadius: '6px',
                      ...(headerColumnSkeletonStyle || {}),
                    }}
                  />
                </SC.ColumnWrapper>
              );
            })}
          </SC.HeaderRowWrapper>
        ))}
        {Array.from({ length: rowNum }).map((_, rowIndex) => (
          <SC.RowWrapper
            key={rowIndex}
            style={rowStyle}
            customGridTemplateColumnsStyle={customGridTemplateColumnsStyle}
          >
            {Array.from({ length: columnNum }).map((_, colIndex) => {
              const key = `${rowIndex}-${colIndex}`;
              if (colIndex === 0 && firstColumnSkeletonStyle) {
                return (
                  <SC.ColumnWrapper justifyContent='flex-start' key={key}>
                    <Skeleton
                      style={{
                        maxWidth: '128px',
                        height: '20px',
                        borderRadius: '6px',
                        ...firstColumnSkeletonStyle,
                      }}
                    />
                  </SC.ColumnWrapper>
                );
              }
              if (colIndex === columnNum - 1 && lastColumnNoSkeleton) {
                return <SC.ColumnWrapper key={key} />;
              }
              return (
                <SC.ColumnWrapper justifyContent='flex-start' key={key}>
                  <Skeleton
                    style={{
                      maxWidth: '128px',
                      height: '20px',
                      borderRadius: '6px',
                      ...(columnSkeletonStyle || {}),
                    }}
                  />
                </SC.ColumnWrapper>
              );
            })}
          </SC.RowWrapper>
        ))}
      </SC.Wrapper>
    );
  }

  // List type
  const { firstColumnWidth = 48 } = props;

  return (
    <SC.TableSkeletonWrapper>
      <SC.TableHeaderSkeleton>
        {Array.from({ length: columnNum }).map((_, colIndex) => (
          <SC.TableHeaderCellSkeleton key={colIndex} width={firstColumnWidth}>
            <Skeleton
              style={{
                height: '20px',
                borderRadius: '6px',
              }}
            />
          </SC.TableHeaderCellSkeleton>
        ))}
      </SC.TableHeaderSkeleton>
      <SC.TableBodySkeleton>
        {Array.from({ length: rowNum }).map((_, rowIndex) => (
          <SC.TableRowSkeleton key={rowIndex}>
            {Array.from({ length: columnNum }).map((_, colIndex) => (
              <SC.TableCellSkeleton key={colIndex} width={firstColumnWidth}>
                <Skeleton
                  style={{
                    height: '20px',
                    borderRadius: '6px',
                  }}
                />
              </SC.TableCellSkeleton>
            ))}
          </SC.TableRowSkeleton>
        ))}
      </SC.TableBodySkeleton>
    </SC.TableSkeletonWrapper>
  );
};

export default TableSkeleton;
