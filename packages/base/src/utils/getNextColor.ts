import type { ColorTokens } from '../styles';
import { colorTokens } from '../styles';

/**
 * 인자로 받은 색상의 다음 색상을 반환합니다.
 * step을 통해 다음 색상의 단계를 설정할 수 있습니다.
 * 만약 다음 색상이 없다면 가장 높은 단계의 색상을 반환합니다.
 * 100단위만 반환하며 50, _5와 같이 예외적인 색상은 반환하지 않습니다.
 * @param {ColorTokens} color
 * @param {number} step
 * @return {ColorTokens}
 */
export const getNextColor = (color: ColorTokens, step = 1): ColorTokens => {
  const colorName = color.replace(/[0-9]|_/g, '');
  const colorNumber = color.replace(/[a-z]|_/g, '');

  const nextColorNumber = Number(colorNumber) + 100 * step;
  const nextColorToken = `${colorName}${nextColorNumber}`;
  const colorKeysOfColorName = Object.keys(colorTokens)
    .filter((colorToken) => colorToken.includes(colorName))
    .sort((a, b) => Number(a.replace(/[a-z]|_/g, '')) - Number(b.replace(/[a-z]|_/g, '')));
  const colorTokenKeys = Object.keys(colorTokens);
  const findColorToken = colorTokenKeys.find((colorToken) => colorToken === nextColorToken) as ColorTokens | undefined;
  const lastColorToken = colorKeysOfColorName[colorKeysOfColorName.length - 1] as ColorTokens;

  return findColorToken ? findColorToken : lastColorToken;
};
