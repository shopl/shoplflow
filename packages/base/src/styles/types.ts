import type { $Values } from '../utils/$values';
import { borderRadius } from './tokens/borderRadius';
import { fontWeights } from './tokens/fontWeights';
import { hadaColors } from './tokens/hadaColors';
import { hadaTypographies } from './tokens/hadaTypographies';
import { spacings } from './tokens/spacings';

export type BorderRadiusToken = $Values<typeof borderRadius>;
export type ColorToken = $Values<typeof hadaColors>;
export type FontWeightsToken = $Values<typeof fontWeights>;
export type SpacingToken = $Values<typeof spacings>;
export type TypographyToken = $Values<typeof hadaTypographies>;

export const theme = {
  colors: hadaColors,
  fontSizes: hadaTypographies,
  fontWeights: fontWeights,
  spacings: spacings,
  borderRadius: borderRadius,
};

export type ShoplflowTheme = typeof theme;
