import tokens from '../../src/styles/tokens.json';
import { separateTokens } from '../seperate-tokens';

describe('separateTokens', () => {
  const result = separateTokens(Object.assign(tokens));
  if (result === undefined) {
    throw new Error('result is undefined');
  }

  it('생성된 토큰의 일부 값을 확인합니다.', () => {
    expect(result.spacingTokens.spacing04).toEqual('4px');
    expect(result.borderRadiusTokens.borderRadius04).toEqual('4px');
    expect(result.fontWeightTokens.regular).toEqual('400');
  });

  it('하다와 샤플 컬러 토큰 키가 일치하는지 확인합니다.', () => {
    const hadaColorKeys = Object.keys(result.hadaTokens.colorTokens);
    const shoplColorKeys = Object.keys(result.shoplTokens.colorTokens);

    expect(hadaColorKeys).toEqual(shoplColorKeys);
  });

  it('하다와 샤플 타이포그래피 토큰 키가 일치하는지 확인합니다.', () => {
    const hadaTypographyKeys = Object.keys(result.hadaTokens.typographyTokens);
    const shoplTypographyKeys = Object.keys(result.shoplTokens.typographyTokens);

    expect(hadaTypographyKeys).toEqual(shoplTypographyKeys);
  });
});
