import * as fs from "fs";
import tokens from "../src/styles/tokens.json";
import { separateTokens } from "./seperate-tokens";

const rootPath = process.cwd();

const {
  typographyTokenKeys,
  hadaTokens,
  shoplTokens,
  fontWeightTokens,
  borderRadiusTokens,
  spacingTokens,
} = separateTokens(tokens);

function mappingTokenObject(obj: Record<string, any>, tokens: string): string {
  let result = `export const ${tokens} = {\n`;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      result += `${key}: ${JSON.stringify(value, null, 2).replace(
        /"/g,
        "",
      )} = ${JSON.stringify(value, null, 2).replace(/"/g, "")};\n`;
    } else {
      result += `  ${key}: '${value}',\n`;
    }
  }
  result += "};\n";
  return result;
}

function mappingTypographyString(obj: string): string {
  let result = "";
  result +=
    "import { css } from '@emotion/react';\n\n" +
    "import { fontWeights as fontWeight } from './fontWeights'; \n\n";
  result += obj;
  result += `export const typographies = {\n`;
  typographyTokenKeys.forEach((key) => {
    result += `  ${key},\n`;
  });
  result += "};\n";

  return result;
}

async function generateIndex() {
  const index = `export { borderRadius } from './borderRadius';
export { fontWeights } from './fontWeights';
export { hadaColors } from './hada-colors';
export { typographies as hadaTypographies } from './hada-typographies';
export { shoplColors } from './shopl-colors';
export { typographies as shoplTypographies } from './shopl-typographies';
export { spacings } from './spacings';
    `;
  await fs.writeFileSync(rootPath + "/src/styles/tokens/index.ts", index);
}

async function generateTokens() {
  Promise.all([
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/shopl-typographies.ts",
      mappingTypographyString(shoplTokens.typographyTokens),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/hada-typographies.ts",
      mappingTypographyString(hadaTokens.typographyTokens),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/fontWeights.ts",
      mappingTokenObject(fontWeightTokens, "fontWeights"),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/borderRadius.ts",
      mappingTokenObject(borderRadiusTokens, "borderRadius"),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/hada-colors.ts",
      mappingTokenObject(hadaTokens.colorTokens, "hadaColors"),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/shopl-colors.ts",
      mappingTokenObject(shoplTokens.colorTokens, "shoplColors"),
    ),
    fs.writeFileSync(
      rootPath + "/src/styles/tokens/spacings.ts",
      mappingTokenObject(spacingTokens, "spacings"),
    ),
  ]);
}

try {
  Promise.all([generateTokens(), generateIndex()]);
} catch (e) {
  console.log(e);
} finally {
  console.log("🚀 Tokens have been successfully converted to TypeScript! 🚀");
}
