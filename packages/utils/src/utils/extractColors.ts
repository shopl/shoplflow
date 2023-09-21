/**
 * 문자+숫자로 이루어진 키를 가진 객체에서 특정 문자로 시작하는 키를 가진 객체를 추출합니다.
 *
 * ## Usage
 * ```ts
 * import {extractColors} from "@shoplflow/utils"
 * const primaryColors = extractColors(tokens, 'primary');
 *
 * // primaryColors = {
 * //   'primary100': '#f0f0f0',
 * //   'primary200': '#e0e0e0',
 * // };
 * ```
 */
export const extractColors = (tokens: Record<string, string>, tokenName: string) => {
  const result = Object.keys(tokens).reduce((acc: Record<string, string>, key) => {
    if (key.includes(tokenName)) {
      acc[key] = tokens[key];
    }

    return acc;
  }, {});

  return result;
};
