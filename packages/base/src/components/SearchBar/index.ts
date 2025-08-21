import { SearchBarInput } from './SearchBarInput';
import { SearchBarCategory } from './SearchBarCategory';
import { SearchBar as BaseSearchBar } from './SearchBar';
import type { MemoizedSearchBarComponent } from './SearchBar.types';

const SearchBar = BaseSearchBar as MemoizedSearchBarComponent;
SearchBar.Category = SearchBarCategory;
SearchBar.Input = SearchBarInput;

export { SearchBar };
export * from './SearchBar.types';
