# @shoplflow/mcp

## 0.1.0

### Minor Changes

- [#813](https://github.com/shopl/shoplflow/pull/813) [`ef0c15fdb681fa966fca6579744ec076f61765ef`](https://github.com/shopl/shoplflow/commit/ef0c15fdb681fa966fca6579744ec076f61765ef) Thanks [@velo-kim](https://github.com/velo-kim)! - First release of `@shoplflow/mcp` — a Model Context Protocol (stdio) server that exposes the shoplflow design system to AI coding agents so they build UI against real tokens, components, and icons instead of hallucinating them.

  Surfaces:
  - **Tokens** — `list_tokens`, `get_token`, resource `shoplflow://tokens`
  - **Icons** — `search_icon` (shopl + hada sets)
  - **Components** — `search_component`, `get_component_api`, resource `shoplflow://components`
  - **Usage examples** — `get_usage_example` (from stories, test code stripped)
  - **Setup & environment** — `get_setup_guide`, `check_environment`, plus an always-on `instructions` preflight (mandatory `ShoplflowProvider` + global CSS; client-only / Next.js constraints)

  All metadata is generated at build time from the same sources that build `@shoplflow/base`, so it can't drift from what ships.

  Connect from any MCP client:

  ```json
  {
    "mcpServers": {
      "shoplflow": { "command": "npx", "args": ["-y", "@shoplflow/mcp"] }
    }
  }
  ```

### Patch Changes

- [#813](https://github.com/shopl/shoplflow/pull/813) [`ef0c15fdb681fa966fca6579744ec076f61765ef`](https://github.com/shopl/shoplflow/commit/ef0c15fdb681fa966fca6579744ec076f61765ef) Thanks [@velo-kim](https://github.com/velo-kim)! - shoplflow/mcp 생성 및 테스트
