import { useSelect } from '@shoplflow/utils';
import React from 'react';
import { Dropdown } from '../Dropdown';
import { Text } from '../Text';
import { Menu } from '../Menu';
import type { PaginationSizeSelectorProps } from './Pagination.types';

const PaginationSizeSelector = ({ data, pageSize, setPageSize }: PaginationSizeSelectorProps) => {
  const { selectedItem, handleToggleSelect } = useSelect('SINGLE', data, {
    key: 'value',
  });

  const handleClickMenu = (value: string) => {
    handleToggleSelect(value);
    setPageSize(value);
  };

  return (
    <Dropdown
      option={'CLICK'}
      width={'66px'}
      trigger={
        <Dropdown.Button
          placeholder={String(pageSize)}
          sizeVar='S'
          value={
            selectedItem && (
              <Text typography='body1_400' color={'neutral400'}>
                {selectedItem.label}
              </Text>
            )
          }
        />
      }
      popper={
        <Dropdown.Content type='FILL'>
          {data.map((item) => {
            const isSelected = item.value === pageSize;
            return (
              <Menu key={item.value} isSelected={isSelected} onClick={() => handleClickMenu(item.value)}>
                {item.label}
              </Menu>
            );
          })}
        </Dropdown.Content>
      }
    />
  );
};

export default PaginationSizeSelector;
