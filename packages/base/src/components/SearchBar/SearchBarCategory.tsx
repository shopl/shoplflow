import React from 'react';
import { Dropdown } from '../Dropdown';
import { Text } from '../Text';
import { Menu } from '../Menu';
import { CategoriesButton } from './SearchBar.styled';
import type { SearchBarCategoryProps } from './SearchBar.types';
import { useSearchBarContext } from './SearchBarContext';

const DEFAULT_DROPDOWN_WIDTH = '136px';

export const SearchBarCategory: React.FC<SearchBarCategoryProps> = ({
  dropdownWidth = DEFAULT_DROPDOWN_WIDTH,
  dropdownItems = [],
  selectedDropdownItem,
  onDropdownSelect,
}) => {
  const { isSelected, noAnimate } = useSearchBarContext();

  if (!isSelected && !noAnimate) {
    return null;
  }

  return (
    <Dropdown
      width={dropdownWidth}
      trigger={
        <CategoriesButton
          value={
            selectedDropdownItem && (
              <Text lineClamp={1} typography={'body2_700'}>
                {selectedDropdownItem.label}
              </Text>
            )
          }
          aria-label='카테고리 선택'
        />
      }
      popper={
        <Dropdown.Content type={'FILL'}>
          {dropdownItems.map((item) => (
            <Menu
              className='search-bar'
              key={item.value}
              onClick={() => onDropdownSelect?.(item)}
              isSelected={selectedDropdownItem?.value === item.value}
              aria-selected={selectedDropdownItem?.value === item.value}
            >
              <Text typography={'body1_500'}>{item.label}</Text>
            </Menu>
          ))}
        </Dropdown.Content>
      }
    />
  );
};
