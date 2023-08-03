module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser', //typescript 코드를 분석하기 위한 parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    useJSXTextNode: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@hada/**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@*/**',
            group: 'internal',
          },
          {
            pattern: '@styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**/*.styled',
            group: 'index',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'internal'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off', // ! 사용금지 ?나 ??를 사용해주세요.
    '@typescript-eslint/no-explicit-any': 'off', // any 사용 금지
    '@typescript-eslint/explicit-function-return-type': 'off', // return 타입을 항상 명시해주어야 함
    '@typescript-eslint/no-use-before-define': ['error', { typedefs: false }], // 타입 선언 전에 참조할 경우 error
    '@typescript-eslint/no-empty-interface': 'off', // interface가 비어있을 경우 error
    '@typescript-eslint/parameter-properties': 'off', // class constructor 내부에 readonly 같은 속성 경고
    '@typescript-eslint/prefer-as-const': 'warn', //const assertion를 사용하지 않을 경우 경고
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn', // 타입 강제 ()! 에 대한 경고
    '@typescript-eslint/ban-types': 'warn', //Fuction이나 Object 같이 지양해야할 타입에 대한 경고
    '@typescript-eslint/no-inferrable-types': 'error', // 값이 할당된 변수에 대한 타입을 강제하지 않음
    '@typescript-eslint/no-empty-function': 'off', //비어있는 함수에 대한 error
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      }, // 변수 camelCase, upper case, PascalCase 허용
      { format: ['camelCase', 'PascalCase'], selector: 'function' }, // 함수 camelCase, PascalCase 허용
      { format: ['PascalCase'], selector: 'interface' }, //interface PascelCase 허용
      { format: ['PascalCase'], selector: 'typeAlias' }, //type PascelCase 허용
    ],
    '@typescript-eslint/no-var-requires': 'warn', // require 문법 사용금지
    '@typescript-eslint/explicit-module-boundary-types': 'warn', //함수에 대해 엄격한 타입
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }], //array 타입을 일관되게 사용 Array<T>
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ], //class나 interface에 대한 순서 지정
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ], // terms 안에 있는 comment 하지 않음
    'react/prop-types': 'off', // 프로토타입 관련 lint
    'react/jsx-no-target-blank': 'error', // target="_blank"없는 속성을 허용 하지 않음
    'react/jsx-filename-extension': 'off', //jsx를 포함할 수 있는 확장자를 허용하지 않음
    'react/jsx-one-expression-per-line': 'off', //라인 당 하나의 jsx 요소 필요
    'react/react-in-jsx-scope': 'off', //react 없이 JSX 문법을 사용할 수 없음
    'react/prefer-stateless-function': 'off', //상태 관련 함수를 순수함수로 작성하기
    'react/display-name': 'off', //displayname이 정의되지 않은 react component 허용하지 않음
    'import/no-duplicates': 'error', //중복된 import에 에러 표시
    'react-hooks/exhaustive-deps': 'error', // hook에 옳지 않은 의존성이 있는 경우 error
    'react-hooks/rules-of-hooks': 'error', // hook에 대한
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'error', // console 사용시 에러
    'no-undef': 'off',
    'no-async-promise-executor': 'warn', //promise 내부에 async 함수에 대한 경고
    'no-extra-boolean-cast': 'off', // 하단과 중복으로 옵션 off
    'no-implicit-coercion': 'error', // !!와 같은 값 변경에 대한 에러
    'no-var': 'error', // var 변수 사용 금지
    'no-unused-vars': 'off', // 하단 규칙과 중복으로 off
    'unused-imports/no-unused-imports': 'error', // 사용하지 않는 import error
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ], //사용하지 않는 변수에 대한 error
    'un-useless-escape': 'off', // 정규식 error off
    indent: 'off', // 스코프 중첨에 대한 간격 조정 다른 룰과의 중첩으로 off
    semi: 'off', // 다른 룰과의 중첩으로 off
    'getter-return': 'warn', // 함수에 return 값이 없을 경우 경고
    'prefer-const': 'error', // 변수 재 선언에 대한 error
    curly: ['error', 'all'], // 조건문에 대한 스코프 -> 중괄호를 필수적으로 사용
    eqeqeq: ['error', 'always', { null: 'ignore' }], //안전하지 않은 연산자들에 에러를 표시
    quotes: [2, 'single', { allowTemplateLiterals: true }],
  },
};
