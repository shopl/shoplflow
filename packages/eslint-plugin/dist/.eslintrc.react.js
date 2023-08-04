// .eslintrc.react.js
module.exports = {
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
    "react-hooks/rules-of-hooks": "error"
    // React Hook을 잘못 사용하는 것을 금지합니다.
  }
};
