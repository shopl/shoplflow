```tsx
import TableSkeleton from './TableSkeleton';

const MyComponent = () => (
  <TableSkeleton 
    type="grid" 
    headerRowNum={2} 
    rowNum={6} 
    columnNum={9} 
  />
);
```

### 다양한 Props 활용하기

컴포넌트를 더욱 세부적으로 제어하려면 아래와 같은 Props를 활용할 수 있습니다:

```tsx
import TableSkeleton from './TableSkeleton';

const CustomizedSkeleton = () => (
  <TableSkeleton 
    type="grid" 
    headerRowNum={3} // 헤더 행 개수를 3개로 설정
    rowNum={10} // 본문 행 개수를 10개로 설정
    columnNum={5} // 열 개수를 5개로 설정
    lastColumnNoSkeleton={true} // 마지막 열에 스켈레톤을 표시하지 않음
    firstColumnWidth={60} // 첫 번째 열의 너비를 60px로 설정
    customGridTemplateColumnsStyle="60px 1fr 1fr 1fr 1fr" // 커스텀 열 스타일 적용
    headerColumnSkeletonStyle={{ backgroundColor: '#e0e0e0', height: '24px' }} // 헤더 열 스타일 지정
    rowStyle={{ borderBottom: '1px solid #ccc' }} // 각 행 스타일 지정
  />
);
```

### 리스트 타입으로 사용하기

`type` 속성을 `list`로 설정하면 리스트 형태의 스켈레톤을 렌더링할 수 있습니다:

```tsx
import TableSkeleton from './TableSkeleton';

const ListSkeleton = () => (
  <TableSkeleton 
    type="list" 
    rowNum={8} // 리스트 항목 개수 설정
    columnNum={4} // 각 항목에 열 개수 설정
    firstColumnWidth={80} // 첫 번째 열 너비 설정
  />
);
```

### 스타일 및 레이아웃 커스터마이징

스타일 속성을 활용하여 더욱 세부적인 조정이 가능합니다:

```tsx
import TableSkeleton from './TableSkeleton';

const StyledSkeleton = () => (
  <TableSkeleton 
    type="grid" 
    headerRowNum={1} 
    rowNum={5} 
    columnNum={4} 
    headerColumnSkeletonStyle={{ backgroundColor: '#d9d9d9', borderRadius: '4px' }}
    rowStyle={{ padding: '8px 0' }}
    customGridTemplateColumnsStyle="repeat(4, 1fr)"
  />
);
```
