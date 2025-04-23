import React, { useCallback, useMemo } from 'react';
import { useOutsideClick } from '@shoplflow/utils';
import { StyledStackContainer } from './SearchBar.styled';
import type { SearchBarBaseProps, SearchBarComponent } from './SearchBar.types';
import { SearchBarProvider } from './SearchBarContext';
import { SearchBarCategory } from './SearchBarCategory';
import { SearchBarInput } from './SearchBarInput';

const DEFAULT_WIDTH = '100%';
const DEFAULT_HEIGHT = '32px';

const SearchBar: SearchBarComponent = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  noAnimate = false,
  useFlexibleWidth = false,
  children,
  ...rest
}: SearchBarBaseProps) => {
  const [isSelected, setIsSelected] = useOutsideClick({
    selector: '.search-bar',
    onClose: () => setIsSelected(false),
  });

  const handleContainerClick = useCallback(() => {
    setIsSelected(true);
  }, [setIsSelected]);

  const containerWidth = useMemo(() => {
    if (!useFlexibleWidth || noAnimate) {
      return width;
    }
    return isSelected ? width : '140px';
  }, [useFlexibleWidth, isSelected, noAnimate, width]);

  return (
    <SearchBarProvider useFlexibleWidth={useFlexibleWidth} isSelected={isSelected} noAnimate={noAnimate}>
      <StyledStackContainer
        data-shoplflow={'SearchBar'}
        width={containerWidth}
        height={height}
        className='search-bar'
        spacing='spacing04'
        onClick={handleContainerClick}
        role='search'
        aria-label='검색'
        {...rest}
      >
        {children}
      </StyledStackContainer>
    </SearchBarProvider>
  );
};

SearchBar.Category = SearchBarCategory;
SearchBar.Input = SearchBarInput;

export { SearchBar };
