export const getNumberLimitRange = (value: number, min: number, max: number) => {
  if (min && value < min) {
    return String(min);
  }
  if (max && value > max) {
    return String(max);
  }
  return String(value);
};
