import { useState } from 'react';

/**
 * select 기능을 추상화한 hook입니다.
 *
 * mode에 따라 single select와 multi select를 지원합니다.
 *
 * MULTI 모드에서는 max 옵션을 통해 최대 선택 가능한 개수를 설정할 수 있습니다.
 * 기본값은 무제한입니다.
 *
 * ### Type
 * > `handleToggleSelect: (id: string) => void;`
 * - id는 객체에서 특정 ID를 통해 비교할 수 있습니다.
 * - handleToggleSelect('someId');
 *
 * > `setSelectedItem: (item: T) => void;`
 * - setSelectedItem은 선택된 item을 설정합니다.
 * - setSelectedItem('someItem');
 *
 * > `selectedItem: SelectedItem<T, Mode>;`
 * - selectedItem은 선택된 item을 반환합니다.
 * mode가 'SINGLE'일 경우 T | null을 반환합니다.
 * mode가 'MULTI'일 경우 T[]를 반환합니다.
 *
 * ## Usage
 * ```tsx filename="MULTI Select"
 * import {useSelected} from "@shoplflow/utils"
 * const App = () => {
 *
 * const data = new Array(10).fill(0).map((_, index) => {
 *   return {
 *     label: `label${index}`,
 *     value: `value${index}`,
 *   };
 * });
 *
 * const { selectedItem, handleToggleSelect } = useSelected('MULTI', data, { key: 'value' });
 *
 * return (
 * <Dropdown
 *   {...args}
 *   option={'CLICK'}
 *   width={'100%'}
 *   trigger={
 *     <Dropdown.Button placeholder={'값이 없어요'} value={selectedItem.map((data) => data.value).join(',')} />
 *   }
 *   popper={
 *     <Dropdown.Content type={'FILL'}>
 *       {data.map((item) => (
 *         <Text key={item.value} onClick={() => handleToggleSelect(item.value)}>
 *           {item.label}
 *         </Text>
 *       ))}
 *     </Dropdown.Content>
 *   }
 * />
 * )}
 * ```
 *
 * ```tsx filename="SINGLE Select"
 * import {useSelected} from "@shoplflow/utils"
 * const App = () => {
 *
 * const data = new Array(10).fill(0).map((_, index) => {
 *   return {
 *     label: `label${index}`,
 *     value: `value${index}`,
 *   };
 * });
 *
 * const { selectedItem, handleToggleSelect } = useSelected('SINGLE', data, { key: 'value' });
 *
 * return (
 * <Dropdown
 *   {...args}
 *   option={'CLICK'}
 *   width={'100%'}
 *   trigger={
 *     <Dropdown.Button placeholder={'값이 없어요'} value={selectedItem.map((data) => data.value).join(',')} />
 *   }
 *   popper={
 *     <Dropdown.Content type={'FILL'}>
 *       {data.map((item) => (
 *         <Text key={item.value} onClick={() => handleToggleSelect(item.value)}>
 *           {item.label}
 *         </Text>
 *       ))}
 *     </Dropdown.Content>
 *   }
 * />
 * )}
 *```
 */

type SelectedItem<T, Mode extends 'SINGLE' | 'MULTI'> = Mode extends 'SINGLE' ? T | null : T[];

export function useSelect<T>(
  mode: 'SINGLE',
  data: T[],
  options?: { key: string; defaultSelected?: T[] },
): {
  selectedItem: SelectedItem<T, 'SINGLE'>;
  handleToggleSelect: (id: string) => void;
  handleSelect: (id: string) => void;
  handleReset: () => void;
  handleRemove: (id: string) => void;
};

export function useSelect<T>(
  mode: 'MULTI',
  data: T[],
  options?: { key: string; max?: number; defaultSelected?: T[] },
): {
  selectedItem: SelectedItem<T, 'MULTI'>;
  handleToggleSelect: (id: string) => void;
  handleSelect: (id: string) => void;
  handleReset: () => void;
  handleRemove: (id: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSelect<T extends { [key: string]: any }, Mode extends 'SINGLE' | 'MULTI'>(
  mode: Mode,
  data: T[],
  options?: { key: string; max?: number; defaultSelected?: T[] },
): {
  selectedItem: T[] | T | null;
  handleSelect: (id: string) => void;
  handleRemove: (id: string) => void;
  handleReset: () => void;
  handleToggleSelect: (id: string) => void;
} {
  if (!data) {
    throw new Error('data는 필수 값입니다.');
  }
  if (options?.key && !data[0]?.[options.key]) {
    throw new Error('입력받은 key가 data에 존재하지 않습니다. 올바른 key를 입력해주세요.');
  }
  if (options?.max && options.max < 1) {
    throw new Error('max는 0보다 커야 합니다.');
  }

  const [selectedItem, setSelectedItem] = useState<T[]>(options?.defaultSelected ?? []);
  const key = options?.key || 'id';

  // 아이디를 이용해 데이터 배열에서 아이템 찾는 함수
  const findItemById = (id: string): T | undefined => {
    return data.find((item) => item[key] === id);
  };

  // 아이템 선택 함수
  const handleSelect = (id: string) => {
    const newItem = findItemById(id);
    if (newItem) {
      setSelectedItem((currentSelected) => {
        if (mode === 'MULTI') {
          return [...currentSelected, newItem];
        } else {
          return [newItem];
        }
      });
    }
  };

  // 아이템 제거 함수
  const handleRemove = (id: string) => {
    setSelectedItem((currentSelected) => currentSelected.filter((item) => item[key] !== id));
  };

  // 메인 토글 함수
  const handleToggleSelect = (id: string) => {
    const isSelected = selectedItem.find((item) => item[key] === id);
    if (isSelected) {
      if (options?.max && selectedItem.length >= options.max) {
        return;
      }
      handleRemove(id);
    }
    if (!isSelected) {
      handleSelect(id);
    }
  };

  const handleReset = () => {
    setSelectedItem([]);
  };

  return {
    selectedItem: mode === 'MULTI' ? selectedItem : selectedItem[0] || null,
    handleReset,
    handleToggleSelect,
    handleSelect,
    handleRemove,
  };
}
