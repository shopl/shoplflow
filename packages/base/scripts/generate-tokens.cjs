const fs = require('fs');
const tokens = require('../src/styles/tokens.json');
const { separateTokens } = require('./seperate-tokens.cjs');

const rootPath = process.cwd();

const { typographyTokenKeys, hadaTokens, shoplTokens, fontWeightTokens, borderRadiusTokens, spacingTokens, boxShadowTokens } =
    separateTokens(tokens);

const PREFIX = '/* Generate by scripts/generate-tokens.js */\n' +
    '/* eslint-disable */\n';

function mappingTokenObject(obj, tokens) {
    let result = '';
    for (const [key, value] of Object.entries(obj)) {
        result += `  --${key}: ${value};\n`;
    }
    return result;
}


function convertToKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}

function mappingTsTokenObject(obj, tokens) {
    let result = '';
    let exportName = `export const ${tokens} = {\n`;
    for (const [key, value] of Object.entries(obj)) {
        const tokenName = `${key}`;
        result += `const ${toCamelCase(key)} = 'var(--${tokenName})';\n`;
        exportName += ` ${toCamelCase(key)},\n`;
    }
    exportName += '};\n';
    result += exportName;
    return result;
}

function generateTypographyTokens() {
    let result = '';
    let exportName = `export const typographyTokens = {\n`;
    typographyTokenKeys.forEach((key) => {
        result += `const ${key} = '.${key}';\n`
         exportName += ` ${key},\n`;
    });
    exportName += '};\n';
    result += exportName;
    return result;
}

async function generateTsTokens() {
    let tsContent = PREFIX;
    tsContent += mappingTsTokenObject(fontWeightTokens, 'fontWeightTokens');
    tsContent += mappingTsTokenObject(borderRadiusTokens, 'borderRadiusTokens');
    tsContent += mappingTsTokenObject(shoplTokens.colorTokens, 'colorTokens');
    tsContent += mappingTsTokenObject(spacingTokens, 'spacingTokens');
    tsContent += mappingTsTokenObject(boxShadowTokens, 'boxShadowTokens');
    tsContent += generateTypographyTokens()
    fs.writeFileSync(rootPath + '/src/styles/tokens.ts', tsContent);
}

async function generateCssTokens() {
    let cssContent = PREFIX;
    cssContent += '*{\n';
    cssContent += '  box-sizing: border-box;\n';
    cssContent += '}\n';
    cssContent += ':root[data-shoplflow] {\n';
    cssContent += mappingTokenObject(fontWeightTokens, '');
    cssContent += mappingTokenObject(borderRadiusTokens, '');
    cssContent += mappingTokenObject(spacingTokens, 'spacings');
    cssContent += mappingTokenObject(boxShadowTokens, 'boxShadows');
    cssContent += '}\n';
    cssContent += ':root[data-shoplflow][data-shoplflow=hada] {\n';
    cssContent += mappingTokenObject(hadaTokens.colorTokens, '');
    cssContent += hadaTokens.typographyTokens
    cssContent += '}\n';
    cssContent += ':root[data-shoplflow][data-shoplflow=shopl] {\n';
    cssContent += mappingTokenObject(shoplTokens.colorTokens, '');
    cssContent += shoplTokens.typographyTokens
    cssContent += '}\n';

    fs.writeFileSync(rootPath + '/src/styles/global.css', cssContent);
}




try {
    generateTsTokens();
    generateCssTokens();
} catch (e) {
    console.log(e);
} finally {
    console.log('🚀 Tokens have been successfully converted to a single CSS file! 🚀');
}

// 나머지 함수들은 이전과 동일하게 유지됩니다.
