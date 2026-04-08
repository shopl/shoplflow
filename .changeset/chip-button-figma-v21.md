---
'@shoplflow/base': patch
---

ChipButton LINE 변형을 Figma v2.1 스펙에 맞춤: pill 모양·padding/gap·body2/caption 타이포·neutral 테두리, `isSelected` 및 선택 시 `selectedBackground` / `selectedBorderColor` 옵션 추가.

ChipButton 스토리북: 선택 색상 토큰을 `select` 드롭다운으로 선택하고 「기본값」은 렌더에서 해석.

ModalFooter: `padding` prop으로 푸터 영역 패딩 커스텀 가능(미지정 시 기존 16px 24px 유지).

Dropdown.Button: `sizeVar='XS'`(24px, caption, normal)과 `styleVar='GHOST'`(투명 배경/보더 없는 트리거) 추가.
