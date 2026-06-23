---
'@shoplflow/base': minor
'@shoplflow/mcp': patch
---

ToggleButton: fullWidth, buttonLineClamp prop 추가.

- fullWidth: true이면 Wrapper가 부모 가용 너비를 100% 채우고 각 InnerRadio를 동일 비율(flex:1)로 분배합니다. fullWidth가 true일 때 fixedWidth는 생략 가능하고, fullWidth가 없으면 기존처럼 fixedWidth가 필수입니다(타입 레벨에서 강제).
- buttonLineClamp: 값이 있으면 각 InnerRadio 라벨 텍스트를 지정한 줄 수로 제한(line-clamp)하고 말줄임(…) 처리합니다.
