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

  const colorTokenKeys = Object.keys(colorTokens) as ColorTokens[];
  const findColorToken = colorTokenKeys.filter((colorToken) => colorToken.includes(colorName));

  const extractNumbers = (str: ColorTokens) => {
    const formattedStr = str.replace(/_/g, '.');
    const regex = /\d+(\.\d+)?/g;
    const match = formattedStr.match(regex);
    return match ? parseFloat(match[0]) : 0;
  };
  // neutral700_5 와 같은 색상은 반환하지 않습니다.
  const sortColorToken = findColorToken.sort((a, b) => extractNumbers(a) - extractNumbers(b));
  // 현재 토큰의 인덱스 찾기
  const currentIndex = sortColorToken.indexOf(color);

  // 새 인덱스 계산
  let newIndex = currentIndex + step;

  let potentialToken = sortColorToken[newIndex];

  while (potentialToken.endsWith('_5') || potentialToken.includes('50')) {
    newIndex += Math.sign(step); // step의 방향으로 이동
    if (newIndex < 0) {
      potentialToken = sortColorToken[0];
    }
    if (newIndex >= sortColorToken.length) {
      potentialToken = sortColorToken[sortColorToken.length - 1];
    }
    potentialToken = sortColorToken[newIndex];
  }
  return potentialToken;
};
