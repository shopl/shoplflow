---
'@shoplflow/base': patch
---

Text 컴포넌트의 `overflowWrap` 기본값 변경 영향으로 Input의 글자수 카운터(`TextCounter`)에서 두 자리 이상 숫자가 글자 단위로 줄바꿈되어 깨져 보이는 문제를 수정했습니다. `TextCounter` 내부 숫자 텍스트에 `overflowWrap='normal'`을 명시해 회귀를 방지합니다.
