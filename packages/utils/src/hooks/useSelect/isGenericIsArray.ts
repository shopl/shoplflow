export const isGenericIsArray = <T>(array: any[]): array is T[] => {
  return array.every((item) => typeof item === 'object' && item !== null);
};
