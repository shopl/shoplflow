"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var tokens_json_1 = require("../src/styles/tokens.json");
var seperate_tokens_1 = require("./seperate-tokens");
var rootPath = process.cwd();
var _a = (0, seperate_tokens_1.separateTokens)(tokens_json_1.default), typographyTokenKeys = _a.typographyTokenKeys, hadaTokens = _a.hadaTokens, shoplTokens = _a.shoplTokens, fontWeightTokens = _a.fontWeightTokens, borderRadiusTokens = _a.borderRadiusTokens, spacingTokens = _a.spacingTokens;
function mappingTokenObject(obj, tokens) {
    var result = "export const ".concat(tokens, " = {\n");
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === 'object') {
            result += "".concat(key, ": ").concat(JSON.stringify(value, null, 2).replace(/"/g, ''), " = ").concat(JSON.stringify(value, null, 2).replace(/"/g, ''), ";\n");
        }
        else {
            result += "  ".concat(key, ": '").concat(value, "',\n");
        }
    }
    result += '};\n';
    return result;
}
function mappingTypographyString(obj) {
    var result = '';
    result +=
        "import { css } from '@emotion/react';\n\n" + "import { fontWeights as fontWeight } from './fontWeights'; \n\n";
    result += obj;
    result += "export const typographies = {\n";
    typographyTokenKeys.forEach(function (key) {
        result += "  ".concat(key, ",\n");
    });
    result += '};\n';
    return result;
}
function generateIndex() {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = "export { borderRadius } from './borderRadius';\nexport { fontWeights } from './fontWeights';\nexport { hadaColors } from './hadaColors';\nexport { typographies as hadaTypographies } from './hadaTypographies';\nexport { shoplColors } from './shoplColors';\nexport { typographies as shoplTypographies } from './shoplTypographies';\nexport { spacings } from './spacings';\n\n    ";
                    return [4 /*yield*/, fs.writeFileSync(rootPath + '/src/styles/tokens/index.ts', index)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function generateTokens() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Promise.all([
                fs.writeFileSync(rootPath + '/src/styles/tokens/shoplTypographies.ts', mappingTypographyString(shoplTokens.typographyTokens)),
                fs.writeFileSync(rootPath + '/src/styles/tokens/hadaTypographies.ts', mappingTypographyString(hadaTokens.typographyTokens)),
                fs.writeFileSync(rootPath + '/src/styles/tokens/fontWeights.ts', mappingTokenObject(fontWeightTokens, 'fontWeights')),
                fs.writeFileSync(rootPath + '/src/styles/tokens/borderRadius.ts', mappingTokenObject(borderRadiusTokens, 'borderRadius')),
                fs.writeFileSync(rootPath + '/src/styles/tokens/hadaColors.ts', mappingTokenObject(hadaTokens.colorTokens, 'hadaColors')),
                fs.writeFileSync(rootPath + '/src/styles/tokens/shoplColors.ts', mappingTokenObject(shoplTokens.colorTokens, 'shoplColors')),
                fs.writeFileSync(rootPath + '/src/styles/tokens/spacings.ts', mappingTokenObject(spacingTokens, 'spacings')),
            ]);
            return [2 /*return*/];
        });
    });
}
try {
    Promise.all([generateTokens(), generateIndex()]);
}
catch (e) {
    console.log(e);
}
finally {
    console.log('🚀 Tokens have been successfully converted to TypeScript! 🚀');
}
