"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.separateTokens = void 0;
var colorTokens = {};
var spacingTokens = {};
var borderRadiusTokens = {};
var fontWeightTokens = {};
var typographyTokenKeys = [];
var shoplTokens = { colorTokens: {}, typographyTokens: '' };
var hadaTokens = { colorTokens: {}, typographyTokens: '' };
function processTypographyTokens(tokens) {
    var typographyTokens = '';
    Object.keys(tokens).forEach(function (key) {
        var value = tokens[key];
        if (value.type === 'typography') {
            typographyTokenKeys.push(key);
            var _a = value.value, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, fontSize = _a.fontSize;
            typographyTokens += "const ".concat(key, " = css`\n  font-weight: ").concat(fontWeight.replace('{', '${'), ";\n  line-height: ").concat(lineHeight, ";\n  font-size: ").concat(fontSize, "px;\n`;\n");
        }
    });
    return typographyTokens;
}
function processColorTokens(tokens, colorTokens) {
    if (colorTokens === void 0) { colorTokens = {}; }
    Object.keys(tokens).forEach(function (key) {
        var value = tokens[key];
        if (value.type === 'color') {
            colorTokens[key] = value.value.replace('{', '${');
        }
        else if (typeof value === 'object') {
            processColorTokens(value, colorTokens); // 재귀 호출
        }
    });
    return colorTokens;
}
function processSpacingTokens(tokens) {
    Object.keys(tokens).forEach(function (key) {
        var value = tokens[key];
        if (value.type === 'spacing') {
            spacingTokens[key] = value.value + 'px';
        }
    });
    return spacingTokens;
}
function processRadiusTokens(tokens) {
    Object.keys(tokens).forEach(function (key) {
        var value = tokens[key];
        if (value.type === 'borderRadius') {
            borderRadiusTokens[key] = value.value + 'px';
        }
    });
    return borderRadiusTokens;
}
function processFontWeightTokens(tokens) {
    Object.keys(tokens).forEach(function (key) {
        var value = tokens[key];
        if (value.type === 'fontWeights') {
            fontWeightTokens[key] = value.value;
        }
    });
    return fontWeightTokens;
}
function separateTokens(tokens) {
    var token = tokens.shoplflow;
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
    if (token === null || token === void 0 ? void 0 : token.fontWeight) {
        processFontWeightTokens(token.fontWeight);
    }
    hadaTokens.colorTokens = __assign(__assign({}, processColorTokens(token)), hadaTokens.colorTokens);
    shoplTokens.colorTokens = __assign(__assign({}, processColorTokens(token)), shoplTokens.colorTokens);
    spacingTokens = processSpacingTokens(token);
    borderRadiusTokens = processRadiusTokens(token);
    typographyTokenKeys = __spreadArray([], new Set(typographyTokenKeys), true);
    return {
        hadaTokens: hadaTokens,
        shoplTokens: shoplTokens,
        typographyTokenKeys: typographyTokenKeys,
        spacingTokens: spacingTokens,
        colorTokens: colorTokens,
        borderRadiusTokens: borderRadiusTokens,
        fontWeightTokens: fontWeightTokens,
    };
}
exports.separateTokens = separateTokens;
