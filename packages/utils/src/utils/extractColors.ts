/**
 * 문자+숫자로 이루어진 키를 가진 객체에서 특정 문자로 시작하는 키를 가진 객체를 추출합니다.
 * @param {Record<string, string>} tokens
 * @param {string} tokenName
 * @return {Record<string, string>}
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
