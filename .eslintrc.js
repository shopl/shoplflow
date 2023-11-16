module.exports = {
  root: true,
  plugins: ['@shoplflow', '@typescript-eslint', 'unused-imports'],
  extends: ['plugin:@shoplflow/base', 'plugin:@shoplflow/react', 'plugin:@shoplflow/typescript'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"] ,
    sourceType: "module"
  },
  rules: {
    //  ref 할당을 전략적으로 사용할 때가 있어서
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // any를 function props 타입에 할당할 때가 있어서
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
