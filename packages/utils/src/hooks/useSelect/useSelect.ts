import { useState } from 'react';
import { isGenericIsArray } from './isGenericIsArray';

/**
 * select 기능을 추상화한 hook입니다.
 *
 * mode에 따라 single select와 multi select를 지원합니다.
 *
 * MULTI 모드에서는 max 옵션을 통해 최대 선택 가능한 개수를 설정할 수 있습니다.
 * 기본값은 무제한입니다.
 *
 * ### Arguments
 *
 * > `mode: 'SINGLE' | 'MULTI'`
 * - mode는 'SINGLE'과 'MULTI'를 입력받습니다.
 * - 'SINGLE'은 단일 선택 모드입니다.
 * - 'MULTI'는 다중 선택 모드입니다.
 *
 * > `data: T[]`
 * - data는 선택할 수 있는 아이템들의 배열입니다.
 * - data는 아래와 같은 형태를 가지고 있어야 합니다.
 *
 * > `options?: { key: string; max?: number; defaultSelected?: T[] }`
 *
 * - key는 data의 아이템들의 고유한 key를 입력받습니다. item을 구분할 때 사용합니다.
 * - max는 MULTI 모드에서 선택할 수 있는 최대 개수를 입력받습니다.
 * - defaultSelected는 초기 선택된 아이템들의 배열을 입력받습니다.
 *
 *
 * ### Type
 * > `handleToggleSelect: (id: string) => void;`
 * - id는 객체에서 특정 ID를 통해 비교할 수 있습니다.
 * - handleToggleSelect('someId');
 *
 *
 * > `selectedItem: SelectedItem<T, Mode>;`
 * - selectedItem은 선택된 item을 반환합니다.
 * mode가 'SINGLE'일 경우 T | null을 반환합니다.
 * mode가 'MULTI'일 경우 T[]를 반환합니다.
 *
 * > `handleSelect: (id: string) => void;`
 * - handleSelect은 선택된 item을 추가합니다.
 *
 * > `handleRemove: (id: string) => void;`
 * - handleRemove는 선택된 item을 제거합니다.
 *
 * > `handleReset: () => void;`
 * - handleReset은 선택된 item들을 초기화합니다.
 *
 * ## Usage
 * ```tsx filename="MULTI Select"
 * import {useSelect} from "@shoplflow/utils"
 * const App = () => {
 *
 * const data = new Array(10).fill(0).map((_, index) => {
 *   return {
 *     label: `label${index}`,
 *     value: `value${index}`,
 *   };
 * });
 *
 * const { selectedItem, handleToggleSelect } = useSelect('MULTI', data, { key: 'value' });
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
 * import {useSelect} from "@shoplflow/utils"
 * const App = () => {
 *
 * const data = new Array(10).fill(0).map((_, index) => {
 *   return {
 *     label: `label${index}`,
 *     value: `value${index}`,
 *   };
 * });
 *
 * const { selectedItem, handleToggleSelect } = useSelect('SINGLE', data, { key: 'value' });
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
  options?: { key: keyof T; defaultSelected?: T[] },
): {
  selectedItem: SelectedItem<T, 'SINGLE'>;
  handleToggleSelect: (id: string) => void;
  handleSelect: (id: string) => void;
  handleReset: () => void;
  handleRemove: (id: string) => void;
};
export function useSelect<T>(
  mode: 'SINGLE',
  data: T[],
  options?: { key: keyof T; defaultSelected?: Array<T[keyof T]> },
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
  options?: { key: keyof T; max?: number; defaultSelected?: T[] },
): {
  selectedItem: SelectedItem<T, 'MULTI'>;
  handleToggleSelect: (id: string) => void;
  handleSelect: (id: string) => void;
  handleReset: () => void;
  handleRemove: (id: string) => void;
};
export function useSelect<T>(
  mode: 'MULTI',
  data: T[],
  options?: { key: keyof T; max?: number; defaultSelected?: Array<T[keyof T]> },
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
  options?: { key: keyof T; max?: number; defaultSelected?: T[] | string[] },
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
  if (data.length > 0 && options?.key && !data[0][options.key]) {
    throw new Error('입력받은 key가 data에 존재하지 않습니다. 올바른 key를 입력해주세요.');
  }
  if (options?.max && options.max < 1) {
    throw new Error('max는 0보다 커야 합니다.');
  }

  const getInitialSelected = () => {
    let initialSelectedItems: T[] = [];
    if (options?.defaultSelected) {
      if (isGenericIsArray<T>(options.defaultSelected)) {
        // defaultSelected가 T[] 타입일 경우
        initialSelectedItems = options.defaultSelected;
      } else {
        // defaultSelected가 특정 키의 값들을 포함하는 배열일 경우
        initialSelectedItems = data.filter((item) => options.defaultSelected?.includes(item[options?.key]));
      }
    }
    return initialSelectedItems;
  };

  const [selectedItem, setSelectedItem] = useState<T[]>(getInitialSelected());
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
      handleRemove(id);
    }
    if (!isSelected) {
      if (options?.max && selectedItem.length >= options.max) {
        return;
      }
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
