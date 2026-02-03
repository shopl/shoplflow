# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shoplflow is a React component library and design system built as a pnpm monorepo using TurboRepo for build orchestration. The project provides UI components, assets, and utilities for building React applications.

## Tech Stack

- **React 18** with TypeScript 4.x
- **Emotion** for CSS-in-JS styling
- **pnpm** for package management with workspace protocol
- **TurboRepo** for monorepo build orchestration
- **Vitest** for testing with @testing-library for React components
- **Storybook 8.4.7** for component documentation and development
- **tsup** for TypeScript bundling
- **Changesets** for versioning and releases

## Essential Commands

### Development
```bash
pnpm dev:stories              # Start Storybook for component development
pnpm dev:docs                 # Start documentation site
pnpm --filter base dev        # Run specific package in dev mode
pnpm --filter templates dev   # Run templates package in dev mode
```

### Building
```bash
pnpm build                    # Build all packages (runs full dependency chain)
pnpm build:package            # Build library packages only
pnpm build:assets             # Build icon/illustration assets
pnpm build:storybook          # Build Storybook static files
```

### Quality Assurance
```bash
pnpm lint                     # Lint all packages
pnpm type-check               # TypeScript type checking
pnpm test                     # Run tests across all packages
pnpm format                   # Format code with Prettier
```

### Single Package Testing
```bash
pnpm --filter utils test      # Run tests for utils package only
pnpm --filter base lint       # Lint base package only
```

### Package Management
```bash
pnpm --filter <package> add <dep>    # Add dependency to specific package
pnpm -w add <dep>                    # Add dependency to workspace root
pnpm changeset                       # Create changeset for versioning
```

## Monorepo Architecture

### Core Packages (`/packages/`)
- **@shoplflow/base** - Main component library with React components, styles, hooks
- **@shoplflow/utils** - Utility functions and React hooks
- **@shoplflow/templates** - Higher-level component templates
- **@shoplflow/shopl-assets** - Icons and illustrations for Shopl brand
- **@shoplflow/hada-assets** - Icons and illustrations for Hada brand
- **@shoplflow/eslint-plugin** - Custom ESLint rules and configurations

### Package Dependencies
- `templates` depends on `base`, `utils`, and both asset packages
- `base` depends on `utils` and both asset packages
- Asset packages are independent and generate React components from SVG files

## Build Pipeline

The TurboRepo pipeline ensures proper build order:
1. **Asset Generation**: `build:icons`, `build:illustrations` (SVG → React components)
2. **Asset Build**: `build:assets` (depends on icon/illustration generation)
3. **Package Build**: `build:package` (depends on assets)
4. **Documentation**: `build:docs`, `build:storybook` (depends on packages)

## Development Workflow

### Component Development
- Use Storybook for component development: `pnpm dev:stories`
- Components are styled with Emotion CSS-in-JS
- Follow existing patterns in `/packages/base/src/components/`

### Asset Management
- SVG files are automatically converted to React components
- Asset packages use `@svgr/cli` for generation
- Run `pnpm build:assets` after adding new SVG files

### Testing
- Uses Vitest with jsdom environment
- React component testing via @testing-library
- Run specific package tests with `pnpm --filter <package> test`

### Code Quality
- ESLint uses custom `@shoplflow/eslint-plugin` configuration
- Husky enforces pre-commit linting via lint-staged
- TypeScript strict mode enabled across all packages

## Release Process

1. Make changes across packages
2. Run `pnpm changeset` to document changes
3. Run `pnpm version` to update versions based on changesets
4. Run `pnpm release` to publish packages

## Important Notes

- Always use `pnpm` instead of npm/yarn
- Use `--filter` for package-specific operations
- Asset packages require rebuild after SVG changes
- Storybook serves as the primary development environment for components
- The build system has complex dependencies - use `pnpm build` for full builds
- Package exports support both ESM and CommonJS via dual packaging