export const isNullOrUndefined = (value: unknown) => {
  if (value === undefined) {
    return true;
  }
  if (value === null) {
    return true;
  }
  return false;
};
