export const extractColors = (tokens: Record<string, string>, colorName: string) => {
  const result = Object.keys(tokens).reduce((acc: Record<string, string>, key) => {
    if (key.includes(colorName)) {
      acc[key] = tokens[key];
    }

    return acc;
  }, {});

  return result;
};
