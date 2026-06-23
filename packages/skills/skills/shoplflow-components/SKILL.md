---
name: shoplflow-components
description: Use @shoplflow/base UI components in a React app — Button, Text, Stack, Icon, Modal, Dropdown, Tooltip, Tabs, Inputs and more, including the styleVar/sizeVar variant pattern, the polymorphic `as` prop, lineClamp, and ref forwarding. Use when rendering or composing @shoplflow components, picking a styleVar/sizeVar, laying out with Stack, rendering typography with Text, or wiring overlays (Modal/Tooltip/Dropdown).
---

# @shoplflow/base components

Import everything from the package root. All components `forwardRef` and most accept a polymorphic `as` prop.

```ts
import { Button, Text, Stack, Icon, Modal, Tooltip } from '@shoplflow/base';
```

> Requires setup first (global CSS + `ShoplflowProvider`). See the **shoplflow-setup** skill.

## Core conventions

- **`styleVar`** — visual variant (e.g. `PRIMARY`, `SECONDARY`, `SOLID`, `GHOST`).
- **`sizeVar`** — size (e.g. `XS`, `S`, `M`, `L`, `XL` depending on component).
- **`as`** — render a different element/component: `<Button as="a" href="…">`.
- **`color` / `spacing` / `typography` props take token KEYS**, not CSS values: `color="neutral700"`, `spacing="spacing16"`, `typography="body1_400"` (full list in the **shoplflow-theming** skill).

## Button

`styleVar`: `PRIMARY | SECONDARY | SOLID | GHOST` · `sizeVar`: `XS | S | M` (default `PRIMARY`/`M`).

```tsx
import { Button, Icon } from '@shoplflow/base';
import { IcAdd } from '@shoplflow/shopl-assets';

<Button styleVar="PRIMARY" sizeVar="M" onClick={save}>저장</Button>
<Button styleVar="SECONDARY" sizeVar="S" disabled>취소</Button>

// loading spinner replaces children
<Button styleVar="PRIMARY" isLoading={submitting} disabled={submitting}>추가</Button>

// icons on either side + clamp long labels
<Button leftSource={<Icon iconSource={IcAdd} sizeVar="S" color="neutral0" />} lineClamp={1}>
  새 항목 만들기
</Button>

// SOLID needs an explicit color token key; polymorphic link
<Button styleVar="SOLID" color="neutral300">태그</Button>
<Button as="a" href="/docs" styleVar="GHOST">문서로</Button>
```

Key props: `isLoading`, `disabled`, `leftSource`/`rightSource` (ReactNode), `lineClamp`, `color` (required for `SOLID`), `typography`.

## Text — typography + color

Defaults: `typography="body1_400"`, `color="neutral700"`, renders a `<span>`.

```tsx
import { Text } from '@shoplflow/base';

<Text as="h1" typography="heading1_700" color="neutral700">제목</Text>
<Text typography="body1_400">본문 텍스트</Text>
<Text typography="caption_400" color="neutral500">2026-06-23</Text>

// truncate to 2 lines
<Text typography="body2_400" lineClamp={2} wordBreak="break-all">긴 설명…</Text>
```

Typography keys: `heading1_700/400`, `heading2_700/400`, `heading3_700/400`, `title1_700/400`, `title2_700/500/400`, `body1_700/500/400`, `body2_700/500/400`, `body3_500/400`, `caption_700/400`, `paragraph1/2`. Other props: `textAlign`, `whiteSpace`, `textOverflow`, `display`, `opacity`, `overflowWrap`.

## Stack — flex layout

`Stack` (div), plus `Stack.Vertical` (column) and `Stack.Horizontal` (row).

```tsx
import { Stack } from '@shoplflow/base';

<Stack.Vertical spacing="spacing16" align="stretch">
  <Stack.Horizontal spacing="spacing08" justify="space-between" align="center">
    <Text typography="title2_700">헤더</Text>
    <Button sizeVar="S">액션</Button>
  </Stack.Horizontal>
  <Text typography="body1_400">내용</Text>
</Stack.Vertical>
```

Props: `spacing` (SpacingTokens key), `align`, `justify`, `direction`, `flexWrap`, `width/height/maxWidth/minWidth/…`, `flex`. (For a styled container with background/radius/padding use `StackContainer`.)

## Icon

```tsx
import { Icon } from '@shoplflow/base';
import { IcInfo } from '@shoplflow/shopl-assets';

<Icon iconSource={IcInfo} sizeVar="M" color="neutral500" />
```

`iconSource` = an icon component from `@shoplflow/shopl-assets` / `@shoplflow/hada-assets`. `sizeVar`: `XS | S | M | L | XL`. `color`: a ColorTokens key. (See **shoplflow-icons-utils**.)

## Overlays (need the provider mounted)

```tsx
import { Modal, Tooltip } from '@shoplflow/base';

<Tooltip message="도움말">
  <Icon iconSource={IcInfo} sizeVar="S" />
</Tooltip>
```

`Modal`, `Tooltip`, `Popper`, `Dropdown`, `Menu`, `Comboboxs` render through the portals mounted by `ShoplflowProvider`. If they don't appear, the tree isn't wrapped — see **shoplflow-setup**.

## Full component catalog (named exports from `@shoplflow/base`)

`Avatar`, `Stack`, `StackContainer`, `Text`, `Modal`, `BackDrop`, `Switch`, `Chips`, `Button`/`ToggleButton`/`ControlButtons`, `Callout`, `Popper`, `ScrollArea`, `Dropdown`, `Menu`, `List`, `Tag`, `Tree`, `Icon`, `Inputs`, `Tooltip`, `Tabs`, `Pagination`, `Datepickers`, `Comboboxs`, `Skeleton`, `Slider`, `SearchBar`, `HelperText`, `Divider`.

Variant enums ship alongside types (e.g. `ButtonStyleVariants`, `ButtonSizeVariants`) for typesafe values. Hover the import in your editor or check the package `.d.ts` for exact props per component.
