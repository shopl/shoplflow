import {$Values} from "../utils/$values";

import {hadaColors, hadaTypographies, spacings, fontWeights, borderRadius} from "./tokens";

export type BorderRadiusToken = $Values<typeof borderRadius>;
export type ColorToken = $Values<typeof hadaColors>;
export type FontWeightsToken = $Values<typeof fontWeights>;
export type SpacingToken = $Values<typeof spacings>;
export type TypographyToken = $Values<typeof hadaTypographies>;

