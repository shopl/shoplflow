module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['public', 'node_modules', '.cache', '.vscode', 'dist'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        bracketSpacing: true,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        quoteProps: 'as-needed',
        requirePragma: false,
        trailingComma: 'all',
        arrowParens: 'always',
        proseWrap: 'never',
        endOfLine: 'auto',
      },
    ],
    'no-console': 'error', // console 사용시 에러
    'no-undef': 'error', // 정의되지 않은 변수를 사용하는 것을 금지합니다.
    'no-async-promise-executor': 'error', // Promise executor 내부에 async 함수를 사용하는 것을 경고합니다.
    'no-extra-boolean-cast': 'error', // 불필요한 boolean 형변환을 금지합니다.
    'no-implicit-coercion': 'error', // 암시적 타입 변환을 금지합니다.
    'no-var': 'error', // var를 사용하는 것을 금지합니다.
    'no-unused-vars': 'error', // 사용하지 않는 변수를 금지합니다.
    'getter-return': 'warn', // getter 함수가 항상 값을 반환하도록 경고합니다.
    'prefer-const': 'error', // 가능한 한 const를 사용하도록 권장합니다.
    'import/no-unresolved': 'off',
    curly: ['error', 'all'], // 모든 제어문에 중괄호를 사용하도록 강제합니다.
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 항상 일치 연산자 (=== 및 !==)를 사용하도록 강제합니다. null과 비교할 때는 이 규칙을 무시합니다.
    quotes: [2, 'single', { allowTemplateLiterals: true }], // 문자열에 싱글 쿼트를 사용하도록 강제합니다. 템플릿 리터럴은 예외로 허용합니다.
  },
};
