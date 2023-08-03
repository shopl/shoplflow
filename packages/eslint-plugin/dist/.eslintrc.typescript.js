// .eslintrc.typescript.js
module.exports = {
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
