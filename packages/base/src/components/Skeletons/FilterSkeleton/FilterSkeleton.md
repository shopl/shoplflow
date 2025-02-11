```tsx
import { FilterSkeleton } from '@components';

<StackContainer.Horizontal width='100%' padding='16px 20px'>
    <Visibility>
      <If when={query.isLoading}>
        <FilterSkeleton />
      </If>
      <Else>
        <FilterBar
          //...
        />  
      </Else>
    </Visibility>
</StackContainer.Horizontal>
```