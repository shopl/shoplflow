module.exports = {
  root: true,

  plugins: ['@shoplflow', '@typescript-eslint/eslint-plugin', 'import', 'react', 'react-hooks', '@emotion'],
  extends: ['plugin:@shoplflow/base', 'plugin:@shoplflow/react', 'plugin:@shoplflow/typescript'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-redundant-type-constituents": "off",
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-explicit-any": "off", // 타입을 오픈하는 용도로 any를 사용하고 있어서
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-member-access": 'off',
        "@typescript-eslint/no-unsafe-argument": 'off',
        "@typescript-eslint/no-unsafe-call": 'off'
      },
    }
  ],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
    react: {
      version: "detect"
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['.eslintrc.**', 'next.config.js', 'docs/next.config.js', 'apps/*/next.config.js', 'packages/extension/**/*'],
};