---
name: shoplflow-theming
description: Use @shoplflow/base design tokens (colorTokens, spacingTokens, typographyTokens, borderRadiusTokens, boxShadowTokens, fontWeightTokens) and brand theming (SHOPL vs HADA) in custom emotion/styled code. Use when styling custom components to match Shoplflow, picking a color/spacing/radius token, applying typography classes, branching styles per brand with getDomain(), or understanding the difference between a token KEY (passed to component props) and the token VALUE (a CSS var).
---

# @shoplflow theming & design tokens

Import token objects from the package root and use their **values** (CSS custom-property strings) inside emotion/styled code.

```ts
import {
  colorTokens, spacingTokens, typographyTokens,
  borderRadiusTokens, boxShadowTokens, fontWeightTokens,
} from '@shoplflow/base';
import type { ColorTokens, SpacingTokens, TypographyTokens } from '@shoplflow/base';
```

> Requires `import '@shoplflow/base/styles'` at the app entry — the tokens are CSS variables defined there. Without it they resolve to nothing. See **shoplflow-setup**.

## KEY vs VALUE — the one thing to get right

Each token object maps a **key** → a **CSS var string value**:

```ts
colorTokens.neutral700   // ⇒ 'var(--neutral700)'   (a VALUE — use in CSS)
spacingTokens.spacing16  // ⇒ 'var(--spacing16)'
```

- **In raw emotion/styled CSS** → use the **value**: `` color: ${colorTokens.neutral700}; ``
- **In a Shoplflow component prop** → pass the **key string**: `<Text color="neutral700">`, `<Stack spacing="spacing16">`, `<Icon color="neutral500">`. The `ColorTokens` / `SpacingTokens` types are exactly these key unions.

## Use tokens in styled components

```tsx
import styled from '@emotion/styled';
import { colorTokens, spacingTokens, borderRadiusTokens, boxShadowTokens } from '@shoplflow/base';

const Card = styled.div`
  padding: ${spacingTokens.spacing20};
  background-color: ${colorTokens.neutral0};
  border: 1px solid ${colorTokens.neutral200};
  border-radius: ${borderRadiusTokens.borderRadius08};
  box-shadow: ${boxShadowTokens.shadow8};
  color: ${colorTokens.neutral700};
`;
```

## Token groups

| Object | Example keys | Notes |
|--------|--------------|-------|
| `colorTokens` | `neutral0…neutral700`, `red300`, `green300`, `yellow300`, `ocean300`, `purple300/400`, `primary300/400`, `shopl*`, `hada*` | `primary*` is the **brand-aware** color (switches by domain) |
| `spacingTokens` | `spacing02 … spacing40` | values are px scales (`spacing16` = 16px) |
| `borderRadiusTokens` | `borderRadius04 … borderRadius20` | |
| `boxShadowTokens` | shadow tokens | drop/elevation shadows |
| `fontWeightTokens` | regular / medium / bold | maps to `--font-weight-*` |
| `typographyTokens` | `heading1_700`, `body1_400`, `caption_400`, … | see below — these are **class selectors**, not property blocks |

## Typography — apply via Text or className, not by inlining

`typographyTokens.body1_400 === '.body1_400'` (a class **selector** string). Do **not** drop it into a styled block as if it were CSS properties — it won't apply.

The global stylesheet defines the classes (`.body1_400 { font-size:16px; … }`). So:

```tsx
// ✅ preferred — the Text component sets the class for you
<Text typography="body1_400">텍스트</Text>

// ✅ also valid — token KEY doubles as a global class name
<p className="body1_400">텍스트</p>

// ✅ target a child via the selector value in styled code
const Wrap = styled.div`
  & ${typographyTokens.body1_400} { color: ${colorTokens.neutral500}; }
`;

// ❌ wrong — selector string is not a property block
const Bad = styled.p`${typographyTokens.body1_400}`;
```

## Brand theming (SHOPL vs HADA)

The active brand is set by `<ShoplflowProvider domain="SHOPL|HADA">`, which writes `:root[data-shoplflow=shopl|hada]`. CSS variables for the **primary/brand** palette swap automatically — anything styled with `colorTokens.primary300/primary400` re-themes for free. All neutral/status tokens are shared.

Branch in your own styled code when a brand needs different logic:

```tsx
import { getDomain } from '@shoplflow/base';
import { colorTokens } from '@shoplflow/base';

const accent = (getDomain() === 'hada' ? colorTokens.hada300 : colorTokens.shopl300);
```

- `getDomain()` returns **lowercase** `"shopl" | "hada"` (it reads the data-attribute). The provider prop is uppercase `"SHOPL" | "HADA"`.
- Prefer `colorTokens.primary*` over hardcoding `shopl*`/`hada*` so styles theme automatically; reach for `getDomain()` only for genuinely brand-specific branching.
