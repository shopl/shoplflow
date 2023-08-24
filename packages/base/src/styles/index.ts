import * as tokens from './tokens';
import type { borderRadiusTokens, colorTokens, spacingTokens, fontWeightTokens } from './tokens';
import './global.css';

type ShoplflowTokens = keyof typeof tokens;
type ColorTokens = keyof typeof colorTokens;
type SpacingTokens = keyof typeof spacingTokens;
type BorderRadiusTokens = keyof typeof borderRadiusTokens;
type FontWeightTokens = keyof typeof fontWeightTokens;

export type { ShoplflowTokens, ColorTokens, SpacingTokens, BorderRadiusTokens, FontWeightTokens };
export { tokens };
