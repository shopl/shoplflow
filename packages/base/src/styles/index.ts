// SHOPLFLOW_DOCS_IGNORE
import {
  borderRadiusTokens,
  boxShadowTokens,
  colorTokens,
  fontWeightTokens,
  spacingTokens,
  typographyTokens,
} from './tokens';

// import './global.css';

type ColorTokens = keyof typeof colorTokens;
type SpacingTokens = keyof typeof spacingTokens;
type BorderRadiusTokens = keyof typeof borderRadiusTokens;
type BoxShadowTokens = keyof typeof boxShadowTokens;
type FontWeightTokens = keyof typeof fontWeightTokens;
type TypographyTokens = keyof typeof typographyTokens;

export type { ColorTokens, SpacingTokens, BorderRadiusTokens, FontWeightTokens, TypographyTokens, BoxShadowTokens };
export { colorTokens, spacingTokens, fontWeightTokens, borderRadiusTokens, typographyTokens, boxShadowTokens };
