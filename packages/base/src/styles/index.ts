import { colorTokens, spacingTokens, fontWeightTokens, borderRadiusTokens, typographyTokens } from './tokens';

import './global.css';

type ColorTokens = keyof typeof colorTokens;
type SpacingTokens = keyof typeof spacingTokens;
type BorderRadiusTokens = keyof typeof borderRadiusTokens;
type FontWeightTokens = keyof typeof fontWeightTokens;
type TypographyTokens = keyof typeof typographyTokens;

export type { ColorTokens, SpacingTokens, BorderRadiusTokens, FontWeightTokens, TypographyTokens };
export { colorTokens, spacingTokens, fontWeightTokens, borderRadiusTokens, typographyTokens };
