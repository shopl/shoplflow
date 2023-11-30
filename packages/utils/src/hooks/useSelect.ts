import { useState, useEffect } from 'react';

/**
 * select 기능을 추상화한 hook입니다.
 * - mode에 따라 single select와 multi select를 지원합니다.
 *
 * MULTI 모드에서는 max 옵션을 통해 최대 선택 가능한 개수를 설정할 수 있습니다.
 * 기본값은 무제한입니다.
 *
 * ### Type
 * > `handleToggleSelect: (item: T, id?: string) => void;`
 * - id는 객체에서 특정 ID를 통해 비교할 수 있습니다.
 * - id를 넣지 않을 경우, item을 그대로 비교합니다.
 * - handleToggleSelect(item, 'someId');
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
 * const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
 * const { selectedItem, handleToggleSelect } = useSelected<string>(data, 'MULTI');
 *
 * return (
 *  <Dropdown
 *   {...args}
 *   option={'CLICK'}
 *   width={'100%'}
 *   trigger={<Dropdown.Button placeholder={'값이 없어요'} value={selectedItem.map((data) => data).join(',')} />}
 *   popper={
 *     <Dropdown.Content type={'FILL'}>
 *       {data.map((item) => (
 *         <Text key={item} onClick={() => handleToggleSelect(item)}>
 *           {item}
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
 * const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
 * const { selectedItem, handleToggleSelect } = useSelected<string>(data, 'SINGLE');
 *
 * return (
 * <Dropdown
 *  {...args}
 *  option={'CLICK'}
 *  width={'100%'}
 *  trigger={<Dropdown.Button placeholder={'값이 없어요'} value={selectedItem || ''} />}
 *  popper={
 *  <Dropdown.Content type={'FILL'}>
 *    {data.map((item) => (
 *    <Text key={item} onClick={() => handleToggleSelect(item)}>
 *      {item}
 *    </Text>
 *    ))}
 *  </Dropdown.Content>
 *  }
 * />
 * )}
 *```
 */

type SelectedItem<T, Mode extends 'SINGLE' | 'MULTI'> = Mode extends 'SINGLE' ? T | null : T[];

// 'SINGLE' 모드에 대한 오버로드 시그니처
export function useSelect<T>(
  initialItems: T[],
  mode: 'SINGLE',
): {
  items: T[];
  selectedItem: SelectedItem<T, 'SINGLE'>;
  setSelectedItem: (item: T) => void;
  handleToggleSelect: (item: T, id?: string) => void;
};

// 'MULTI' 모드에 대한 오버로드 시그니처
export function useSelect<T>(
  initialItems: T[],
  mode: 'MULTI',
  max?: number,
): {
  items: T[];
  selectedItem: SelectedItem<T, 'MULTI'>;
  setSelectedItem: (item: T) => void;
  handleToggleSelect: (item: T, id?: string) => void;
};

export function useSelect<T, Mode extends 'SINGLE' | 'MULTI'>(
  initialItems: T[],
  mode: Mode,
  max?: number,
): {
  items: T[];
  selectedItem: SelectedItem<T, Mode>;
  setSelectedItem: (item: T) => void;
  handleToggleSelect: (item: T, id?: string) => void;
} {
  const [items] = useState<T[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<T[]>([]);

  const handleSelect = (item: T) => {
    if (mode === 'MULTI') {
      if (max && selectedItem.length >= max) {
        return;
      }
      setSelectedItem((currentSelected) => {
        if (currentSelected.includes(item)) {
          return currentSelected.filter((selected) => selected !== item);
        } else {
          return [...currentSelected, item];
        }
      });
    }
    if (mode === 'SINGLE') {
      setSelectedItem([item]); // TypeScript 오류를 피하기 위해 any로 캐스
    }
  };

  // 객체에서 ID 값을 추출하는 함수
  function extractItemId(item: T, id?: string): string {
    if (id && typeof item === 'object' && item !== null && id in item) {
      return String(item[id]);
    }
    return String(item);
  }

  // 'SINGLE' 모드에서의 선택 처리
  function handleSingleSelect(currentSelected: T[], item: T, itemId: string, id?: string): T[] {
    const isSelected = id ? currentSelected[0]?.[id] === itemId : currentSelected[0] === item;
    return isSelected ? [] : [item];
  }

  // 'MULTI' 모드에서의 선택 처리
  function handleMultiSelect(currentSelected: T[], item: T, itemId: string, id?: string): T[] {
    const index = id
      ? currentSelected.findIndex((selected) => typeof selected === 'object' && selected && selected[id] === itemId)
      : currentSelected.findIndex((selected) => selected === item);

    if (index !== -1) {
      return [...currentSelected.slice(0, index), ...currentSelected.slice(index + 1)];
    } else {
      return [...currentSelected, item];
    }
  }

  // 메인 토글 함수
  const handleToggleSelect = (item: T, id?: string) => {
    const itemId = extractItemId(item, id);

    if (mode === 'SINGLE') {
      setSelectedItem((currentSelected) => handleSingleSelect(currentSelected, item, itemId, id));
    } else if (mode === 'MULTI') {
      setSelectedItem((currentSelected) => handleMultiSelect(currentSelected, item, itemId, id));
    }
  };

  const getSelectedItem = <T, Mode extends 'SINGLE' | 'MULTI'>(item: T[], mode: Mode) => {
    if (mode === 'MULTI') {
      return item as SelectedItem<T, Mode>;
    } else {
      return item[0] as SelectedItem<T, Mode>;
    }
  };

  useEffect(() => {
    setSelectedItem([]);
  }, [items]);

  return {
    items,
    selectedItem: getSelectedItem(selectedItem, mode),
    setSelectedItem: handleSelect,
    handleToggleSelect,
  };
}
