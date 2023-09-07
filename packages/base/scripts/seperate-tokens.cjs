const colorTokens = {};
let spacingTokens = {};
let borderRadiusTokens = {};
let boxShadowTokens = {};
const fontWeightTokens = {};

let typographyTokenKeys = [];

const shoplTokens = {colorTokens: {}, typographyTokens: ''};
const hadaTokens = {colorTokens: {}, typographyTokens: ''};

function toKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
function processTypographyTokens(tokens, domain) {
    let typographyTokens = '';

    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'typography') {
            typographyTokenKeys.push(key);
            const {fontWeight, lineHeight, fontSize} = value.value;
            const mappingFontWeight = fontWeight.replace(/{|}/g, '').split('.').map(part => toKebabCase(part)).join('-');
            typographyTokens += `  .${key} {
    font-weight: var(--${mappingFontWeight});
    line-height: ${lineHeight}px;
    font-size: ${fontSize}px;
  }\n`;
        }
    });
    return typographyTokens;
}

function processColorTokens(tokens, colorTokens = {}) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];
        if (value.type === 'color') {
            colorTokens[key] = value.value;
        } else if (typeof value === 'object') {
            processColorTokens(value, colorTokens, key); // 재귀 호출
        }
    });

    // Hada or Shopl 토큰을 받는 function 리턴
    return (hadaOrShoplTokens) => {
        const PrimaryText = 'primary';

        const primaryKeysObject = Object.keys(hadaOrShoplTokens)
            .filter((key) => hadaOrShoplTokens[key].type === 'color')
            .reduce((acc, cur) => {
                const nowToken = hadaOrShoplTokens[cur];

                if (nowToken.value.startsWith('{')) {
                    const [first, second] = nowToken.value.replace(/^\{|\}$/g, '').split('.');
                    const key = second.replace(first, '');
                    return {...acc, [`${PrimaryText}${key}`]: colorTokens[second]};
                } else {
                    return {...acc, [cur]: nowToken.value};
                }
            }, {});

        return {
            ...colorTokens,
            ...primaryKeysObject,
        };
    };
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
            borderRadiusTokens[toKebabCase(key)] = value.value + 'px';
        }
    });

    return borderRadiusTokens;
}

function processFontWeightTokens(tokens) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];

        if (value.type === 'fontWeights') {
            fontWeightTokens['font-weight-' + key] = value.value;
        }
    });
    return fontWeightTokens;
}

function processBoxShadowTokens(tokens) {
    Object.keys(tokens).forEach((key) => {
        const value = tokens[key];

        if (value.type === 'boxShadow') {
            console.log(value);
            boxShadowTokens[value.value.type] = `${value.value.x}px ${value.value.y}px ${value.value.blur}px ${value.value.spread}px ${value.value.color}`;
        }
    });
    return boxShadowTokens;
}


function separateTokens(tokens) {
    const token = tokens.shoplflow;
    if (!token) {
        return;
    }
    if (tokens.shopl) {
        shoplTokens.typographyTokens = processTypographyTokens(tokens.shopl, 'shopl');
    }
    if (tokens.hada) {
        hadaTokens.typographyTokens = processTypographyTokens(tokens.hada, 'hada');
    }
    if (token?.fontWeight) {
        processFontWeightTokens(token.fontWeight);
    }
    hadaTokens.colorTokens = {
        ...processColorTokens(token, {})(tokens.hada),
        ...hadaTokens.colorTokens,
    };
    shoplTokens.colorTokens = {
        ...processColorTokens(token, {})(tokens.shopl),
        ...shoplTokens.colorTokens,
    };

    spacingTokens = processSpacingTokens(token);
    borderRadiusTokens = processRadiusTokens(token);
    boxShadowTokens = processBoxShadowTokens(token);

    typographyTokenKeys = [...new Set(typographyTokenKeys)];

    return {
        hadaTokens,
        shoplTokens,
        typographyTokenKeys,
        spacingTokens,
        colorTokens,
        boxShadowTokens,
        borderRadiusTokens,
        fontWeightTokens,
    };
}

module.exports = {separateTokens};
