var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// .eslintrc.base.js
var require_eslintrc_base = __commonJS({
  ".eslintrc.base.js"(exports2, module2) {
    module2.exports = {
      env: {
        browser: true,
        es6: true,
        node: true,
        es2020: true
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
      },
      plugins: ["prettier", "import", "unused-imports"],
      extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
      ],
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
      ignorePatterns: ["public", "node_modules", ".cache", ".vscode", "dist"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            useTabs: false,
            printWidth: 120,
            tabWidth: 2,
            singleQuote: true,
            semi: true,
            bracketSpacing: true,
            htmlWhitespaceSensitivity: "css",
            insertPragma: false,
            jsxBracketSameLine: false,
            jsxSingleQuote: false,
            quoteProps: "as-needed",
            requirePragma: false,
            trailingComma: "all",
            arrowParens: "always",
            proseWrap: "never",
            endOfLine: "auto"
          }
        ],
        "no-console": "error",
        // console 사용시 에러
        "no-undef": "error",
        // 정의되지 않은 변수를 사용하는 것을 금지합니다.
        "no-async-promise-executor": "error",
        // Promise executor 내부에 async 함수를 사용하는 것을 경고합니다.
        "no-extra-boolean-cast": "error",
        // 불필요한 boolean 형변환을 금지합니다.
        "no-implicit-coercion": "error",
        // 암시적 타입 변환을 금지합니다.
        "no-var": "error",
        // var를 사용하는 것을 금지합니다.
        "no-unused-vars": "error",
        // 사용하지 않는 변수를 금지합니다.
        "getter-return": "warn",
        // getter 함수가 항상 값을 반환하도록 경고합니다.
        "prefer-const": "error",
        // 가능한 한 const를 사용하도록 권장합니다.
        "import/no-unresolved": "off",
        curly: ["error", "all"],
        // 모든 제어문에 중괄호를 사용하도록 강제합니다.
        eqeqeq: ["error", "always", { null: "ignore" }],
        // 항상 일치 연산자 (=== 및 !==)를 사용하도록 강제합니다. null과 비교할 때는 이 규칙을 무시합니다.
        quotes: [2, "single", { allowTemplateLiterals: true }]
        // 문자열에 싱글 쿼트를 사용하도록 강제합니다. 템플릿 리터럴은 예외로 허용합니다.
      }
    };
  }
});

// .eslintrc.react.js
var require_eslintrc_react = __commonJS({
  ".eslintrc.react.js"(exports2, module2) {
    module2.exports = {
      extends: ["./.eslintrc.base.js", "plugin:react/recommended", "plugin:react-hooks/recommended"],
      plugins: ["react"],
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        "react/prop-types": "off",
        // React의 prop-types를 사용하는 것을 금지합니다.
        "react/jsx-no-target-blank": "error",
        // target="_blank" 속성이 없는 링크를 사용하는 것을 금지합니다.
        "react/jsx-filename-extension": "off",
        // JSX를 포함할 수 있는 파일 확장자를 제한합니다.
        "react/jsx-one-expression-per-line": "off",
        // 한 줄에 하나의 JSX 표현식만을 허용합니다.
        "react/react-in-jsx-scope": "error",
        // JSX 문법을 사용할 때 'React'를 import하지 않아도 됩니다.
        "react/prefer-stateless-function": "off",
        // 가능한 한 stateless 함수형 컴포넌트를 사용하도록 권장합니다.
        "react/display-name": "off",
        // React 컴포넌트에 displayName이 정의되어 있지 않으면 경고를 발생시킵니다.
        "react-hooks/exhaustive-deps": "error",
        // React Hook의 의존성 배열에 누락된 의존성이 있으면 에러를 발생시킵니다.
        "react-hooks/rules-of-hooks": "error",
        // React Hook을 잘못 사용하는 것을 금지합니다.
        "react/jsx-uses-react": "off"
        // React를 사용하지 않는 코드를 경고합니다.
      }
    };
  }
});

// .eslintrc.typescript.js
var require_eslintrc_typescript = __commonJS({
  ".eslintrc.typescript.js"(exports2, module2) {
    module2.exports = {
      extends: ["./.eslintrc.base.js", "plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        // TypeScript의 non-null assertion (값이 null이거나 undefined가 아님을 단언하는 ! 연산자)을 사용하는 것을 금지합니다.
        "@typescript-eslint/no-explicit-any": "off",
        // TypeScript의 any 타입을 사용하는 것을 금지합니다.
        "@typescript-eslint/explicit-function-return-type": "off",
        // 함수의 반환 타입을 항상 명시하도록 강제합니다.
        "@typescript-eslint/no-use-before-define": ["error", { typedefs: false }],
        // 선언하기 전에 변수, 함수, 클래스 등을 사용하는 것을 금지합니다. typedefs 옵션을 false로 설정하면 타입 정의는 이 규칙에서 제외됩니다.
        "@typescript-eslint/no-empty-interface": "off",
        // TypeScript의 빈 인터페이스를 사용하는 것을 금지합니다.
        "@typescript-eslint/parameter-properties": "off",
        // TypeScript의 클래스 생성자 내부에서 readonly와 같은 속성을 사용하는 것을 경고합니다.
        "@typescript-eslint/prefer-as-const": "error",
        // 가능한 경우 const assertion을 사용하도록 권장합니다.
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        // non-null assertion (!)을 optional chain (?.)과 함께 사용하는 것을 경고합니다.
        "@typescript-eslint/ban-types": "warn",
        // Function, Object와 같이 사용을 지양해야 하는 타입을 사용하는 것을 경고합니다.
        "@typescript-eslint/no-inferrable-types": "error",
        // 값이 할당된 변수에 대해 타입을 강제하지 않습니다.
        "@typescript-eslint/no-empty-function": "error",
        // 비어있는 함수를 사용하는 것을 금지합니다.
        "@typescript-eslint/naming-convention": [
          "error",
          {
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            selector: "variable",
            leadingUnderscore: "allow"
          },
          { format: ["camelCase", "PascalCase"], selector: "function" },
          { format: ["PascalCase"], selector: "interface" },
          { format: ["PascalCase"], selector: "typeAlias" }
        ],
        // 변수, 함수, 인터페이스, 타입 별칭의 이름을 강제하는 규칙입니다.
        "@typescript-eslint/no-var-requires": "error",
        // require 문법 사용금지
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        //함수에 대해 엄격한 타입
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        //array 타입을 일관되게 사용 Array<T>
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: [
              "public-static-field",
              "private-static-field",
              "public-instance-field",
              "private-instance-field",
              "public-constructor",
              "private-constructor",
              "public-instance-method",
              "private-instance-method"
            ]
          }
        ]
        //class나 interface에 대한 순서 지정
      }
    };
  }
});

// index.js
var base = require_eslintrc_base();
var react = require_eslintrc_react();
var typescript = require_eslintrc_typescript();
module.exports = {
  configs: {
    base,
    react,
    typescript
  }
};
