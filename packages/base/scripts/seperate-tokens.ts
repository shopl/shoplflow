type TokenValue = {
  type: string;
  value: any;
};
type ShoplflowTokens = { shoplflow?: Tokens; shopl?: Tokens; hada?: Tokens };

type Tokens = Record<string, TokenValue>;

const colorTokens: Record<string, string> = {};
let spacingTokens: Record<string, string> = {};
let borderRadiusTokens: Record<string, string> = {};
const fontWeightTokens: Record<string, string> = {};

let typographyTokenKeys: string[] = [];

interface ShoplTokens {
  colorTokens: { [key: string]: string };
  typographyTokens: string;
}

const shoplTokens: ShoplTokens = { colorTokens: {}, typographyTokens: "" };
const hadaTokens: ShoplTokens = { colorTokens: {}, typographyTokens: "" };

function processTypographyTokens(tokens: Tokens): string {
  let typographyTokens = "";
  console.log(tokens);
  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];
    if (value.type === "typography") {
      typographyTokenKeys.push(key);
      const { fontFamily, fontWeight, lineHeight, fontSize } = value.value;
      typographyTokens += `const ${key} = css\`
  font-weight: ${fontWeight.replace("{", "${")};
  line-height: ${lineHeight};
  font-size: ${fontSize}px;
\`;\n`;
    }
  });
  return typographyTokens;
}

function processColorTokens(
  tokens: Tokens,
  colorTokens: { [key: string]: string } = {},
): { [key: string]: string } {
  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];
    if (value.type === "color") {
      colorTokens[key] = value.value;
    } else if (typeof value === "object") {
      processColorTokens(value, colorTokens); // 재귀 호출
    }
  });
  return colorTokens;
}

function processSpacingTokens(tokens: Tokens): { [key: string]: string } {
  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];
    if (value.type === "spacing") {
      spacingTokens[key] = value.value + "px";
    }
  });
  return spacingTokens;
}

function processRadiusTokens(tokens: Tokens): { [key: string]: string } {
  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];
    if (value.type === "borderRadius") {
      borderRadiusTokens[key] = value.value + "px";
    }
  });
  return borderRadiusTokens;
}

function processFontWeightTokens(tokens: Tokens): { [key: string]: string } {
  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];

    if (value.type === "fontWeights") {
      fontWeightTokens[key] = value.value;
    }
  });
  return fontWeightTokens;
}

export function separateTokens(tokens: ShoplflowTokens) {
  const token = tokens.shoplflow;
  if (!token) {
    return;
  }

  if (tokens.shopl) {
    shoplTokens.typographyTokens = processTypographyTokens(tokens.shopl);
    shoplTokens.colorTokens = processColorTokens(tokens.shopl);
  }

  if (tokens.hada) {
    hadaTokens.typographyTokens = processTypographyTokens(tokens.hada);
    hadaTokens.colorTokens = processColorTokens(tokens.hada);
  }
  if (token?.fontWeight) {
    processFontWeightTokens(token.fontWeight);
  }
  hadaTokens.colorTokens = {
    ...processColorTokens(token),
    ...hadaTokens.colorTokens,
  };
  shoplTokens.colorTokens = {
    ...processColorTokens(token),
    ...shoplTokens.colorTokens,
  };

  spacingTokens = processSpacingTokens(token);
  borderRadiusTokens = processRadiusTokens(token);

  typographyTokenKeys = [...new Set(typographyTokenKeys)];

  return {
    hadaTokens,
    shoplTokens,
    typographyTokenKeys,
    spacingTokens,
    colorTokens,
    borderRadiusTokens,
    fontWeightTokens,
  };
}
