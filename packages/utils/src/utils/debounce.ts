/**
 * Debounce 함수입니다.
 */
export const debounce = (func: (...args: unknown[]) => void, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), ms);
  };
};
