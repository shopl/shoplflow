import { $Values } from '../utils/$values';
import { borderRadius } from './tokens/borderRadius';
import { fontWeights } from './tokens/fontWeights';
import { spacings } from './tokens/spacings';
import { hadaTypographies } from './tokens/hada-typographies';
import { hadaColors } from './tokens/hada-colors';

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
