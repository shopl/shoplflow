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
pnpm dev:stories                     # Run all Storybooks
pnpm --filter base dev:stories       # base Storybook on :6007
pnpm --filter templates dev:stories  # templates Storybook on :6008
pnpm --filter base dev               # Run specific package in tsup watch mode

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

# Running a single test (Vitest)
pnpm --filter base test -- ComponentName    # Filter by file pattern
pnpm --filter base test -- -t "test name"   # Filter by test name

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
2. `pnpm version` — runs `changeset version` and refreshes the lockfile
3. `pnpm release` — runs `changeset publish` to npm

`@shoplflow/extension` is excluded from the release pipeline.

## Key Notes

- Always use `pnpm`, never npm/yarn
- Use `--filter` for package-specific operations
- Pre-commit hooks enforce linting via Husky + lint-staged
- ESLint uses the custom `@shoplflow/eslint-plugin` with base, react, and typescript rule sets

## Task Workflow (Jira 티켓 단위)

SHF 티켓(예: `[shoplflow] Tag v1.1`) 작업은 `task-workflow` 스킬로 시작한다. 티켓 키가 있는 컴포넌트 작업에서는 아래 하네스보다 우선한다.

| 스킬 | 범위 |
|------|------|
| `task-workflow` | 허브. `tasks/<KEY>/meta.yaml`(gitignore, 로컬 기록)로 단계 확인 후 라우팅 |
| `task-component` | 티켓 읽기 → 코드·스토리·컴포넌트 changelog 버전·MCP 메타데이터·changeset → PR, Jira 진행 중 → 검토 중 |
| `task-release` | Chromatic 승인 → 자동 배포(`design-approved-release.yml`) 결과 확인 → Jira 완료. 자동 배포가 안 됐을 때만 `gh`로 직접 배포 |

- 필요한 것: Atlassian(Jira) MCP 로그인, `gh auth login`. 외부 서버·API 토큰 설정 없음.
- 컴포넌트 버전은 티켓 제목의 버전을 따르고, 각 컴포넌트 `*.stories.tsx`의 changelog 배열 맨 앞에 기록한다 (패키지 버전인 changeset과 별개).
- changeset 종류(major / minor / patch)는 추측하지 않고 매번 사용자에게 확인한다.
- shoplflow는 npm 공개 라이브러리이고 실제 사용처는 `shopl-web-workspace`다. 코드를 바꾸기 **전에** 사용처를 확인하고, 기존 코드가 그대로 동작·표시되도록 **추가(옵트인) 방식으로 설계**한다. 기존 prop·기본값·스타일을 바꾸는 변경은 사용자 승인 없이 하지 않는다.
- 스킬 파일은 `.claude/skills/task-*`만 git에 공유된다 (`.gitignore` 예외).

## 하네스: Shoplflow 전체 범용

**목표:** 모노레포 전반의 컴포넌트 생성·수정·스타일·테마·품질 검증·릴리즈 작업을 5명의 전문 에이전트 팀(pattern-analyst, component-builder, story-author, qa-guardian, release-keeper)으로 자동화한다.

**트리거:** 컴포넌트/스타일/테마/토큰/스토리/품질/changeset 관련 작업 요청 시 `shoplflow-orchestrator` 스킬을 사용하라. 단순 질문(파일 위치, 코드 설명)은 직접 응답 가능.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-04-17 | 초기 구성 | 전체 하네스 (에이전트 5, 스킬 6) | - |
