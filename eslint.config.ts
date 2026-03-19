import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importXPlugin from 'eslint-plugin-import-x';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import storybookPlugin from 'eslint-plugin-storybook';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  // ── Global ignores ──
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/storybook-static/**',
      '**/.next/**',
      'extension/**',
      'packages/extension/**',
      '**/node_modules/**',
      'test-env/**',
      '**/__tests__/**',
      'eslint.config.ts',
      '**/next.config.js',
    ],
  },

  // ── Base rules ──
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
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
          jsxSingleQuote: true,
          quoteProps: 'as-needed',
          requirePragma: false,
          trailingComma: 'all',
          arrowParens: 'always',
          proseWrap: 'never',
          endOfLine: 'auto',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
      'no-undef': 'error',
      'no-async-promise-executor': 'error',
      'no-extra-boolean-cast': 'error',
      'no-implicit-coercion': 'error',
      'no-var': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'getter-return': 'warn',
      'prefer-const': 'error',
      'unused-imports/no-unused-imports': 'error',
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      quotes: [2, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    },
  },

  // ── Prettier ──
  prettierPlugin,

  // ── Import-x ──
  importXPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'import-x/no-unresolved': 'off',
      'import-x/namespace': 'off',
      'import-x/named': 'off',
    },
  },

  // ── React ──
  {
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
  },
  {
    ...reactPlugin.configs.flat['jsx-runtime'],
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prefer-stateless-function': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  // ── TypeScript ──
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Naming conventions
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
          leadingUnderscore: 'allow',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ],

      // Type imports/exports
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Code style
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { typedefs: false }],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
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
      ],

      // New v8 rules - relax
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',

      // Type-aware rules disabled
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unnecessary-type-arguments': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',

      // Disable base rules in favor of TS versions
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      'no-undef': 'off',
    },
  },

  // ── JS files: restore no-undef ──
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-undef': 'error',
    },
  },

  // ── Non-project files: disable type-aware linting ──
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...tseslint.configs.disableTypeChecked,
    rules: {
      ...tseslint.configs.disableTypeChecked.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['*.mts', '*.cts', 'scripts/**/*.{ts,mts}', '**/.storybook/**/*.{ts,tsx}', '**/scripts/**/*.{ts,mts}'],
    ...tseslint.configs.disableTypeChecked,
  },
  // ── Allow require() in CJS files ──
  {
    files: ['**/*.cjs', '**/scripts/**/*.{js,cjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // ── Storybook ──
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'storybook/prefer-pascal-case': 'off',
    },
  },
);
