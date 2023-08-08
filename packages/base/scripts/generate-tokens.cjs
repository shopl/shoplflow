const fs = require('fs');
const tokens = require('../src/styles/tokens.json');
const {separateTokens} = require('./seperate-tokens.cjs');

const rootPath = process.cwd();

const {typographyTokenKeys, hadaTokens, shoplTokens, fontWeightTokens, borderRadiusTokens, spacingTokens} =
    separateTokens(tokens);

function mappingTokenObject(obj, tokens) {
    let result = `exports const ${tokens} = {\n`;
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            result += `${key}: ${JSON.stringify(value, null, 2).replace(/"/g, '')} = ${JSON.stringify(value, null, 2).replace(
                /"/g,
                '',
            )};\n`;
        } else {
            result += `  ${key}: '${value}',\n`;
        }
    }
    result += '};\n';
    return result;
}

function mappingTypographyString(obj) {
    let result = '';
    result += 'const css = require(\'@emotion/react\');\n\n' + "const fontWeight = require('./fontWeights'); \n\n";
    result += obj;
    result += `exports.typographies = {\n`;
    typographyTokenKeys.forEach((key) => {
        result += `  ${key},\n`;
    });
    result += '};\n';

    return result;
}

async function generateIndex() {
    const index = `exports.borderRadius = require('./borderRadius');
exports.fontWeights = require('./fontWeights');
exports.hadaColors = require('./hadaColors');
exports.hadaTypographies = require('./hadaTypographies');
exports.shoplColors = require('./shoplColors');
exports.shoplTypographies = require('./shoplTypographies');
exports.spacings = require('./spacings');

    `;
    await fs.writeFileSync(rootPath + '/src/styles/tokens/index.ts', index);
}

async function generateTokens() {
    Promise.all([
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/shoplTypographies.ts',
            mappingTypographyString(shoplTokens.typographyTokens),
        ),
        fs.writeFileSync(
            rootPath + '/src/styles/tokens/hadaTypographies.ts',
            mappingTypographyString(hadaTokens.typographyTokens),
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
