```tsx
import { CardSkeleton } from '@components';

function MyComponent() {
 return (
   <div>
     {isLoading ? (
       <CardSkeleton />
     ) : (
       // 로딩이 끝난 후 보여질 컨텐츠
     )}
   </div>
 );
}
```