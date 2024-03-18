export const checkShopl = (origin: string) => {
  if (origin.includes('shoplworks') || origin.includes('localhost')) {
    return true;
  }
  return false;
};
