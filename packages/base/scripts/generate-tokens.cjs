const fs = require('fs');
const tokens = require('../src/styles/tokens.json');
const {separateTokens} = require('./seperate-tokens.cjs');

const rootPath = process.cwd();

const {typographyTokenKeys, hadaTokens, shoplTokens, fontWeightTokens, borderRadiusTokens, spacingTokens} =
    separateTokens(tokens);

const PREFIX = '// Generate by scripts/generate-tokens.js \n\n';


function mappingTokenObject(obj, tokens) {
    let result = PREFIX;
    result += `export const ${tokens} = {\n`;
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            result += `${key}: ${JSON.stringify(value, null, 2).replace(/"/g, '')} = ${JSON.stringify(value, null, 2).replace(
                /"/g,
                '',
            )};\n`;
        } else if (value.includes('.')) {
            result += `  ${key}: ${value},\n`;
        } else {
            result += `  ${key}: '${value}',\n`;
        }
    }
    result += '};\n';
    return result;
}

function mappingTypographyString(obj, prefix = 'typographies') {
    let result = PREFIX;
    result += "import { css } from '@emotion/react';\n\n" + "import { fontWeights as fontWeight } from './fontWeights'; \n\n";
    result += obj;
    result += `export const ${prefix}Typographies = {\n`;
    typographyTokenKeys.forEach((key) => {
        result += `  ${key},\n`;
    });
    result += '};\n';

    return result;
}

async function generateIndex() {
    let index = PREFIX;
    index += `export { borderRadius } from "./borderRadius";
export { fontWeights } from "./fontWeights";
export { hadaColors } from "./hadaColors";
export { hadaTypographies } from "./hadaTypographies";
export { shoplColors } from "./shoplColors";
export { shoplTypographies } from "./shoplTypographies";
export { spacings } from "./spacings";

    `;
    await fs.writeFileSync(rootPath + '/src/styles/tokens/index.ts', index);
}

async function generateTokens() {
    Promise.all([
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/shoplTypographies.ts',
            mappingTypographyString(shoplTokens.typographyTokens, 'shopl'),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/hadaTypographies.ts',
            mappingTypographyString(hadaTokens.typographyTokens, 'hada'),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/fontWeights.ts',
            mappingTokenObject(fontWeightTokens, 'fontWeights'),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/borderRadius.ts',
            mappingTokenObject(borderRadiusTokens, 'borderRadius'),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/hadaColors.ts',
            mappingTokenObject(hadaTokens.colorTokens, 'hadaColors'),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/shoplColors.ts',
            mappingTokenObject(shoplTokens.colorTokens, 'shoplColors'),
        ),
        fs.writeFileSync(rootPath + '/src/styles/tokens/spacings.ts', mappingTokenObject(spacingTokens, 'spacings')),
    ]);
}

try {
    Promise.all([generateTokens(), generateIndex()]);
} catch (e) {
    console.log(e);
} finally {
    console.log('🚀 Tokens have been successfully converted to JavaScript! 🚀');
}
