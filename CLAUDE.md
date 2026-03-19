# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shoplflow is a React component library and design system built as a pnpm monorepo using TurboRepo for build orchestration. It supports two brands (Shopl and Hada) via a theming system.

## Tech Stack

- **React 18** with TypeScript 5.x
- **Emotion** for CSS-in-JS styling
- **pnpm** workspace with **TurboRepo** build orchestration
- **Vitest** + @testing-library for testing
- **Storybook 10** for component development (React + Vite)
- **tsup** for bundling (ESM + CJS dual output)
- **Changesets** for versioning and releases

## Essential Commands

```bash
# Development
pnpm dev:stories              # Start Storybook for component development
pnpm dev:docs                 # Start documentation site
pnpm --filter base dev        # Run specific package in dev mode

# Building
pnpm build                    # Build all packages (full dependency chain)
pnpm build:package            # Build library packages only
pnpm build:assets             # Rebuild after adding new SVG files

# Quality
pnpm lint                     # Lint all packages
pnpm type-check               # TypeScript type checking
pnpm test                     # Run all tests
pnpm format                   # Format with Prettier
pnpm --filter utils test      # Test single package
pnpm --filter base lint       # Lint single package

# Packages
pnpm --filter <package> add <dep>    # Add dep to specific package
pnpm -w add <dep>                    # Add dep to workspace root
pnpm changeset                       # Create changeset for versioning
```

## Monorepo Architecture

### Packages (`/packages/`)
- **@shoplflow/base** - Core component library (components, styles, hooks)
- **@shoplflow/utils** - Shared utility functions and React hooks
- **@shoplflow/templates** - Higher-level component compositions
- **@shoplflow/shopl-assets** - Shopl brand icons/illustrations (SVG → React)
- **@shoplflow/hada-assets** - Hada brand icons/illustrations (SVG → React)
- **@shoplflow/eslint-plugin** - Custom ESLint rules (base, react, typescript configs)
- **@shoplflow/extension** - Browser extension (excluded from releases)

### Dependency Chain
`templates` → `base` → `utils` + asset packages (independent)

### Build Pipeline Order
1. `build:icons` + `build:illustrations` (SVG → React components via @svgr/cli)
2. `build:assets` (depends on step 1)
3. `build:package` (depends on step 2)
4. `build:storybook` / `build:docs` (depends on step 3)

## Component Patterns

### File Structure
Every component follows this convention:
```
packages/base/src/components/ComponentName/
├── ComponentName.tsx          # Component implementation
├── ComponentName.styled.tsx   # Emotion styled components
├── ComponentName.types.ts     # TypeScript interfaces/types
├── ComponentName.stories.tsx  # Storybook stories (CSF format)
└── index.ts                   # Barrel export
```

### Implementation Conventions
- Components use `forwardRef` for ref forwarding
- Polymorphic components support an `as` prop for HTML element override
- Variants are controlled via `styleVar` and `sizeVar` props (e.g., `PRIMARY`, `SECONDARY`, `S`, `M`)
- Styled components use helper functions for variant styles: `getStyleByStyleVar()`, `getStyleBySizeVar()`

### Story Format (CSF)
```typescript
const meta: Meta<typeof Component> = {
  title: 'COMPONENTS/Category/ComponentName',
  component: Component,
  args: { /* defaults */ },
};
export default meta;
export const Playground: StoryFn = (args) => <Component {...args} />;
```
Figma links can be added via `meta.parameters.design`.

## Theming & Design Tokens

### Dual-Domain System
The library supports two brands: **Shopl** (default) and **Hada**. Controlled via:
- `<ShoplflowProvider domain="shopl|hada">` wrapper component
- CSS: `[data-shoplflow]` attribute on root, `[data-shoplflow=hada]` for Hada overrides
- Primary colors shift between brands; all other tokens are shared

### Token Pipeline
`tokens.json` → `scripts/generate-tokens.cjs` → TypeScript constants (`tokens.ts`) + CSS custom properties (`global.css`)

Token categories: colors (neutral, brand, semantic, status), spacing, typography (heading/title/body/caption), border-radius, shadows.

## Asset Generation

SVG files in `packages/{shopl,hada}-assets/src/{icons,illustrations}/assets/` are auto-converted to React components via `@svgr/cli` with custom templates in `scripts/templates/`. Generated output goes to `generated/` directories. Run `pnpm build:assets` after adding/modifying SVGs.

## Release Process

1. `pnpm changeset` — document changes
2. `pnpm version` — bump versions
3. `pnpm release` — publish to npm

`@shoplflow/extension` is excluded from the release pipeline.

## Key Notes

- Always use `pnpm`, never npm/yarn
- Use `--filter` for package-specific operations
- Pre-commit hooks enforce linting via Husky + lint-staged
- ESLint uses the custom `@shoplflow/eslint-plugin` with base, react, and typescript rule sets
