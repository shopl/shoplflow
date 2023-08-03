import tokens from '../../src/styles/tokens.json';
// @ts-ignore
import {separateTokens} from '../separate-tokens';
import {describe, it, expect} from '@jest/globals';


describe('separateTokens', () => {
    it('should separate tokens correctly', () => {
        const result = separateTokens(tokens);

        // 예상되는 결과의 일부를 확인합니다.
        expect(result.hadaTokens.colorTokens.hada400).toEqual('#05a77b');
        expect(result.shoplTokens.colorTokens.shopl400).toEqual('#2d89e4');
        expect(result.spacingTokens.spacing04).toEqual('4px');
        expect(result.borderRadiusTokens.borderRadius04).toEqual('4px');
        expect(result.fontWeightTokens.regular).toEqual('400');
    });
});

