import { colorTokens, spacingTokens, fontWeightTokens, borderRadiusTokens } from './tokens';

import './global.css';

type ColorTokens = keyof typeof colorTokens;
type SpacingTokens = keyof typeof spacingTokens;
type BorderRadiusTokens = keyof typeof borderRadiusTokens;
type FontWeightTokens = keyof typeof fontWeightTokens;

export type { ColorTokens, SpacingTokens, BorderRadiusTokens, FontWeightTokens };
export { colorTokens, spacingTokens, fontWeightTokens, borderRadiusTokens };
