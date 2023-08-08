const colorTokens = {};
let spacingTokens = {};
let borderRadiusTokens = {};
const fontWeightTokens = {};

let typographyTokenKeys = [];

const shoplTokens = {colorTokens: {}, typographyTokens: ''};
const hadaTokens = {colorTokens: {}, typographyTokens: ''};

function processTypographyTokens(tokens) {
    let typographyTokens = '';

    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'typography') {
            typographyTokenKeys.push(key);
            const {fontWeight, lineHeight, fontSize} = value.value;
            typographyTokens += `const ${key} = css\`
  font-weight: ${fontWeight.replace('{', '${')};
  line-height: ${lineHeight};
  font-size: ${fontSize}px;
\`;\n`;
        }
    });
    return typographyTokens;
}

function processColorTokens(tokens, colorTokens = {}) {

    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'color') {
            colorTokens[key] = value.value
        } else if (typeof value === 'object') {
            processColorTokens(value, colorTokens); // 재귀 호출
        }
    });
    console.log(colorTokens);
    return colorTokens;
}

function processSpacingTokens(tokens) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'spacing') {
            spacingTokens[key] = value.value + 'px';
        }
    });
    return spacingTokens;
}

function processRadiusTokens(tokens) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'borderRadius') {
            borderRadiusTokens[key] = value.value + 'px';
        }
    });

    return borderRadiusTokens;
}

function processFontWeightTokens(tokens) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];

        if (value.type === 'fontWeights') {
            fontWeightTokens[key] = value.value;
        }
    });
    return fontWeightTokens;
}

function separateTokens(tokens) {
    const token = tokens.shoplflow;
    if (!token) {
        return;
    }

    if (tokens.shopl) {
        console.log(tokens.shopl);
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

module.exports = {separateTokens};
