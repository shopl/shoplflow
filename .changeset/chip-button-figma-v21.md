---
'@shoplflow/base': patch
---

ChipButton: `children`가 있으면 `count`를 렌더하지 않음. 스토리 Playground에서 `count`·`showLeftSource`·`showRightSource` 조작 가능.

Dropdown: Figma Code Connect(`Dropdown.figma.tsx`) 추가.

DropdownTriggerButton: GHOST/비활성 시 화살표·비활성 아이콘 색 토큰 정리, `getTextColor`/`getChevronColor` 형태로 가독성 개선. 비활성 시 SVG fill을 `neutral350`으로 텍스트와 맞춤.

Dropdown 스토리 소폭 조정.
