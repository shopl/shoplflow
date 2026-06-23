---
name: shoplflow-setup
description: Install and configure the @shoplflow/base design system in a React app — peer dependencies, the required global CSS import, and the ShoplflowProvider with SHOPL/HADA brand theming. Use when setting up @shoplflow, installing @shoplflow/base, wrapping an app with ShoplflowProvider, fixing missing design tokens/typography/styles, broken Modal/Tooltip/Popper portals, or choosing a brand domain (SHOPL vs HADA).
---

# @shoplflow setup

How to add the Shoplflow design system to a **consumer React 18 app**. Three steps: install, import CSS, wrap with the provider.

## 1. Install

`@shoplflow/base` ships its peer deps as `^11` (emotion) / `^18` (react). Install them in the consumer app:

```bash
# npm
npm i @shoplflow/base @emotion/react @emotion/styled react react-dom
# pnpm
pnpm add @shoplflow/base @emotion/react @emotion/styled react react-dom
```

Optional sibling packages (install only what you import directly):

| Package | When you need it |
|---------|------------------|
| `@shoplflow/shopl-assets` | Shopl-brand icons/illustrations (`IcAdd`, `ImgX`, …) |
| `@shoplflow/hada-assets` | Hada-brand icons/illustrations |
| `@shoplflow/utils` | Standalone hooks (`useOutsideClick`, `useResizeObserver`, …) |
| `@shoplflow/templates` | Higher-level compositions (Table, TitleGroup, AttachmentList) — same emotion/react peers |

> `base` already depends on the asset + utils packages internally, so components render without them. Add them to `package.json` only when you `import` from them yourself.

## 2. Import the global CSS (required — once, at the app entry)

Design tokens (`--neutral700`, `--spacing16`, …) and typography classes (`.body1_400`, …) live in this stylesheet. **Without it, tokens resolve to nothing and text has no typography.**

```ts
// main.tsx / _app.tsx / app entry — import once
import '@shoplflow/base/styles';   // tokens + typography classes (required)
import '@shoplflow/base/reset';    // optional CSS reset
```

## 3. Wrap the app with `ShoplflowProvider`

```tsx
import { ShoplflowProvider } from '@shoplflow/base';

export default function App() {
  return (
    <ShoplflowProvider domain="SHOPL">  {/* "SHOPL" (default) | "HADA" */}
      <YourApp />
    </ShoplflowProvider>
  );
}
```

The provider does three things you depend on:
- Sets `document.documentElement.dataset.shoplflow` to `"shopl"` / `"hada"` (lowercased), which activates the brand color palette in the CSS.
- Mounts the **Modal + Popper portals** — `Modal`, `Tooltip`, `Popper`, `Dropdown`, `Menu` need it. Missing provider ⇒ overlays don't appear.
- Provides `LazyMotion` (framer-motion) used by animated components.

### Domain (brand)
- Prop value is **uppercase**: `domain="SHOPL"` or `domain="HADA"`. Default is `SHOPL`.
- Only the **primary/brand** palette differs between domains (`primary300/400`, `shopl*` vs `hada*`); every other token is shared.
- Read the active brand at runtime with `getDomain()` → returns lowercase `"shopl" | "hada"` (see the theming skill).

## Gotchas

- **No styles / colors look unset** → you forgot `import '@shoplflow/base/styles'`.
- **Modal/Tooltip/Dropdown don't open** → component is rendered outside `<ShoplflowProvider>`.
- **SSR (Next.js)**: the provider sets the domain attribute in `useEffect`, so it runs client-side. Keep the `import '@shoplflow/base/styles'` in your root layout/`_app` so the stylesheet is server-rendered; the brand attribute hydrates on the client.
- **Emotion mismatch** → ensure a single `@emotion/react@^11` is hoisted (dedupe in monorepos) to avoid duplicate styling contexts.

Once set up, see the **shoplflow-components**, **shoplflow-theming**, and **shoplflow-icons-utils** skills for usage.
