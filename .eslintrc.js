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
    },
  ],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    "@typescript-eslint/no-redundant-type-constituents": "off",
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  ignorePatterns: ['.eslintrc.**'],
};
