module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "react-hooks",
    "react-refresh",
    "prettier",
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: ["src"],
        patterns: [
          {
            group: ["./", "./**/*", "../**/*"],
            message: "Please use absolute imports instead of relative imports.",
          },
        ],
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error", "debug"] }],
    "import/no-anonymous-default-export": [
      "warn",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowNew: false,
        allowLiteral: false,
        allowObject: true,
      },
    ],
    "no-extra-boolean-cast": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-inline-styles": "off",
    "prefer-const": "off",
    "@typescript-eslint/ban-types": "off",
    "no-undef": "off",
  },
};
