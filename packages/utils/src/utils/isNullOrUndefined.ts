/**
 * null과 undefined 타입만을 구분하기 위한 유틸입니다.
 *
 * 인자로 받는 값이 null 혹은 undefined라면 true를 반환합니다.
 * 이외의 값은 모두 false를 반환합니다.
 *
 * ## Usage
 * ```ts
 * import { isNullOrUndefined } from '@shoplflow/utils';
 *
 * const someValue = 0;
 * isNullOrUndefined(someValue) // false
 *
 * const someNull = null;
 * isNullOrUndefined(someNull) // true
 * ```
 */
export const isNullOrUndefined = (value: unknown) => {
  if (value === undefined) {
    return true;
  }
  if (value === null) {
    return true;
  }
  return false;
};
