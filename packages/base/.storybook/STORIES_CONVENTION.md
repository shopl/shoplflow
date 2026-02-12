# Storybook 스토리 정리 규칙

Storybook 최신(CSF3) 기준으로 `packages/base` 컴포넌트 스토리를 통일합니다.

## 1. Meta

- `const meta = { ... } satisfies Meta<typeof Component>;` 사용.
- `export default meta;` 로 내보내기.
- `title`: `'COMPONENTS/{카테고리}/{컴포넌트명}'` 형식 유지.

## 2. argTypes

- 주요 props마다 `description` 작성 (한글, ~습니다 체).
- enum/union: `options: Object.values(EnumName)` 또는 `Object.keys(objectName)`, `control: { type: 'select' }` (3개 이상) 또는 `{ type: 'radio' }` (2개 이하).
- boolean: `control: { type: 'boolean' }`.
- 함수형(onClick 등): `action: 'clicked'` 등으로 표시.
- number: 가능하면 `control: { type: 'range', min, max }` 또는 `{ type: 'number' }`.

## 3. Story 타입

- **객체 스토리만 필요할 때**: `type Story = StoryObj<typeof Component>;` 후 `export const Playground: Story = { args: {...} };`.
- **커스텀 렌더(래퍼/ref/state) 필요 시**: `StoryFn<Props>` 와 render 함수 유지.

## 4. 필수 스토리

- **Playground**: 기본 인터랙티브 스토리, `args` 필수. Figma 링크 있으면 `parameters.design` 추가.
- **Variant 스토리**: 스타일/사이즈/상태(disabled, error 등)별로 최소 1개 이상 권장.

## 5. 기타

- `tags: ['autodocs']` 는 preview 전역에 있으면 meta 생략 가능.
- 컴포넌트별 Figma URL 은 `parameters.design.url` 에 통일.

---

## 정리 완료 (CSF3 + meta + argTypes + variant 스토리)

- **Buttons/Button** – Loading, Disabled 스토리 추가, argTypes defaultValue 수정
- **Avatar** – parameters.design 추가, SizeS/SizeL 스토리 추가
- **ControlButtons/Checkbox** – meta satisfies, Primary/Selected 스토리 추가
- **ControlButtons/Radio** – meta satisfies, argTypes 보강, Unselected/Selected 스토리 추가
- **ControlButtons/MinusButton** – meta satisfies, color options, Default 스토리 추가
- **Tag** – meta satisfies, argTypes(color, children), Solid/Tint/Line/SmallSize/ExtraSmallSize 스토리 추가
- **Callout** – meta satisfies, argTypes(styleVar, fillWidth) 추가, WithoutIcon.args 추가
- **ScrollArea** – meta satisfies, argTypes 추가, WithAutoHide 스토리 추가
- **Skeleton** – meta satisfies, title COMPONENTS 통일, Circle/Rectangle 스토리 추가
- **Switch** – meta satisfies, argTypes 보강, Disabled 스토리 추가
- **Chips/ChipButton** – meta satisfies, Line/SizeXS/Disabled 스토리 추가
- **Buttons/IconButton** – meta satisfies, Primary/Secondary/Solid/Ghost/Loading/Disabled 객체 스토리로 통일

## 추가 정리 권장 (동일 규칙 적용)

- Inputs/Input, Inputs/TextArea, Inputs/InputButton, Inputs/SelectInputButton
- Buttons/DropdownButton, Buttons/SplitButton
- Chips/ChipToggle
- Comboboxs/NumberCombobox
- Datepickers/* (Annual, Day, Month, Week)
- Dropdown, Icon, List, Menu, Modal, Pagination, Popper
- SearchBar, Slider, Stack, StackContainer, Tabs, Text
- ToggleButton, Tooltip, Tree

위 파일들도 `const meta = { ... } satisfies Meta<typeof Component>`, `type Story = StoryObj<...>`, argTypes description/control 보강, Playground + variant 스토리 패턴으로 맞추면 됩니다.
