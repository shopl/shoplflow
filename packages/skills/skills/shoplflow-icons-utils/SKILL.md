---
name: shoplflow-icons-utils
description: Use @shoplflow/shopl-assets and @shoplflow/hada-assets icons/illustrations and the @shoplflow/utils React hooks (useOutsideClick, useResizeObserver, useSelect, useMergeRefs, usePopover, useParentElementClick). Use when rendering an Shoplflow icon/illustration, finding an icon name, sizing/coloring an icon via the Icon component, or wiring dropdown/popover/outside-click/resize/multi-select behavior with the utils hooks.
---

# @shoplflow icons, illustrations & utils hooks

## Icons & illustrations

Each SVG is a React component. Shopl-brand from `@shoplflow/shopl-assets`, Hada-brand from `@shoplflow/hada-assets` (same API).

```bash
npm i @shoplflow/shopl-assets   # and/or @shoplflow/hada-assets
```

### Render through the `Icon` component (recommended)

`Icon` applies size + token color consistently:

```tsx
import { Icon } from '@shoplflow/base';
import { IcAdd, IcInfo, IcCalendarLine } from '@shoplflow/shopl-assets';

<Icon iconSource={IcAdd} sizeVar="M" color="primary300" />
<Icon iconSource={IcInfo} sizeVar="S" color="neutral500" />
```

- `iconSource` — the imported icon component.
- `sizeVar` — `XS | S | M | L | XL`.
- `color` — a `ColorTokens` key (see **shoplflow-theming**).

### Or render the SVG directly

```tsx
import { IcAdd } from '@shoplflow/shopl-assets';
<IcAdd width={20} height={20} />
```

### Illustrations

```tsx
import { ImgSettingBoard } from '@shoplflow/shopl-assets';
<ImgSettingBoard width={120} height={120} />
```

### Naming convention & finding a name
- Icons: `Ic` + PascalCase, e.g. `IcAdd`, `IcAddCircle`, `IcClose`, `IcCheck`, `IcDelete`, `IcDownArrow`, `IcCalendarLine`, `IcAlertLine`, `IcInfo`.
- Illustrations: `Img` + PascalCase, e.g. `ImgSettingBoard`.
- To browse the full set, autocomplete from the import (`import { Ic… } from '@shoplflow/shopl-assets'`) or look at the package's exported `.d.ts`. There are hundreds; line variants often end in `Line`, sizes in `Small`/`Medium`/`Xlarge`.

## Utils hooks — `@shoplflow/utils`

Framework-agnostic React hooks (only `react` peer). Useful for building custom interactive components that match how Shoplflow's own components behave.

```ts
import {
  useOutsideClick, useResizeObserver, useSelect,
  useMergeRefs, usePopover, useParentElementClick,
} from '@shoplflow/utils';
```

### `useOutsideClick({ selector?, useOutsideScroll?, onClose? })`
Closes when the user clicks (or optionally scrolls) outside the matched element. Returns `[isOpened, setIsOpened]`.

```tsx
const [open, setOpen] = useOutsideClick({ selector: '.menu', onClose: () => setOpen(false) });
```

### `useResizeObserver(element, { trackWidth?, trackHeight? })`
Tracks an element's size. Returns `{ width, height }`.

```tsx
const ref = useRef<HTMLDivElement>(null);
const { width } = useResizeObserver(ref.current, { trackWidth: true });
```

### `useSelect(data, options)`
Single/multi-select state over an array or object. Returns helpers like `selected`, `isSelected`, `toggle`, `clear`, `reset`.

### `useMergeRefs(...refs)` / `mergeRefs(...)` / `assignRef(...)`
Combine multiple refs into one — needed when forwarding a ref while also keeping a local ref.

```tsx
const Comp = forwardRef((props, ref) => {
  const localRef = useRef(null);
  return <div ref={useMergeRefs(ref, localRef)} {...props} />;
});
```

### `usePopover({ popoverSelector })`
Coordinates a single open popover at a time (auto-closes the previous one). Returns `{ isOpen, onClickTrigger, closeCurrentPopover }`.

### `useParentElementClick(onClickOutside)`
Fires a callback when a click lands on / outside the parent element.

> For dropdown/select/popover UI, prefer the ready-made `Dropdown`, `Menu`, `Comboboxs`, `Popper` components from `@shoplflow/base` (see **shoplflow-components**); reach for these hooks when building something custom.
