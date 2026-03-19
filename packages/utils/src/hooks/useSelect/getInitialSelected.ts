import { isGenericIsArray } from './isGenericIsArray';

export const getInitialSelected = <T extends Record<any, any>>(
  data: T[],
  defaultSelected: T[] | string[],
  key: string,
): T[] => {
  let initialSelectedItems: T[] = [];
  if (defaultSelected) {
    if (isGenericIsArray<T>(defaultSelected)) {
      // defaultSelected가 T[] 타입일 경우
      initialSelectedItems = defaultSelected;
    } else {
      // defaultSelected가 특정 키의 값들을 포함하는 배열일 경우

      initialSelectedItems = data.filter((item) => defaultSelected?.includes(item[key]));
    }
  }
  return initialSelectedItems;
};
