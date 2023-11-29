import { useState, useEffect } from 'react';

type SelectedItem<T, Mode extends 'SINGLE' | 'MULTI'> = Mode extends 'SINGLE' ? T | null : T[];

// 'SINGLE' 모드에 대한 오버로드 시그니처
function useSelected<T extends { name: string }>(
  initialItems: T[],
  mode: 'SINGLE',
): {
  items: T[];
  selectedItem: SelectedItem<T, 'SINGLE'>;
  setSelectedItem: (item: T) => void;
  setItems: (items: T[]) => void;
};

// 'MULTI' 모드에 대한 오버로드 시그니처
function useSelected<T extends { name: string }>(
  initialItems: T[],
  mode: 'MULTI',
): {
  items: T[];
  selectedItem: SelectedItem<T, 'MULTI'>;
  setSelectedItem: (item: T) => void;
  setItems: (items: T[]) => void;
};

function useSelected<T extends { name: string }, Mode extends 'SINGLE' | 'MULTI' = 'SINGLE'>(
  initialItems: T[],
  mode: Mode,
): {
  items: T[];
  selectedItem: SelectedItem<T, Mode>;
  setSelectedItem: (item: T) => void;
  setItems: (items: T[]) => void;
} {
  const [items, setItems] = useState<T[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<T[]>([]);

  const handleSelect = (item: T) => {
    if (mode === 'MULTI') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelectedItem((currentSelected) => {
        if (currentSelected.includes(item)) {
          return currentSelected.filter((selected) => selected !== item);
        } else {
          return [...currentSelected, item];
        }
      });
    } else if (mode === 'SINGLE') {
      setSelectedItem([item]); // TypeScript 오류를 피하기 위해 any로 캐스
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
    setItems,
  };
}

export default useSelected;
