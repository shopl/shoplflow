import type { ColorTokens } from '../styles';
import { colorTokens } from '../styles';

export const getNextColor = (color: ColorTokens, step = 1): ColorTokens => {
  const colorName = color.replace(/[0-9]|_/g, '');
  const colorNumber = color.replace(/[a-z]|_/g, '');

  const nextColorNumber = Number(colorNumber) + 100 * step;
  const nextColorToken = `${colorName}${nextColorNumber}`;
  const colorKeysOfColorName = Object.keys(colorTokens).filter((colorToken) => colorToken.includes(colorName));
  const colorTokenKeys = Object.keys(colorTokens);
  const findColorToken = colorTokenKeys.find((colorToken) => colorToken === nextColorToken) as ColorTokens | undefined;
  const lastColorToken = colorKeysOfColorName[colorKeysOfColorName.length - 1] as ColorTokens;

  return findColorToken ? findColorToken : lastColorToken;
};
