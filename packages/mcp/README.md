# @shoplflow/mcp

Model Context Protocol (MCP) server that exposes the shoplflow design system to AI coding agents
(Claude Code, Cursor, …) so they generate UI against **real** tokens, components, and icons instead
of hallucinating them.

## Architecture

Metadata is **generated at build time** from the same sources that produce the shipped library, then
served by a thin stdio server. This makes drift structurally impossible — the MCP can never describe a
token or component that differs from what actually ships.

```
tokens.json    ─┐
*-assets barrel ─┤ scripts/generate-metadata.cjs ─► src/data/*.generated.json ─► MCP server (stdio)
*.types.ts     ─┘   (build step)                     (bundled into the bin)
```

## Roadmap

| Phase | Surface | Source | Status |
|-------|---------|--------|--------|
| 1 | Design tokens (`list_tokens`, `get_token`, `shoplflow://tokens`) | `tokens.json` | ✅ done |
| 2 | Icon search (`search_icon`) | `*-assets` barrels | ✅ done |
| 3 | Component API (`search_component`, `get_component_api`) | `*.types.ts` | ✅ done |
| 4 | Usage examples (`get_usage_example`) | `*.stories.tsx` | planned |

## Develop

```bash
pnpm --filter @shoplflow/mcp generate:metadata   # regenerate metadata from sources
pnpm --filter @shoplflow/mcp build:package        # generate + bundle to dist/
pnpm --filter @shoplflow/mcp start                # run the built server over stdio
```

## Connect (consuming app)

Add to the client's MCP config (Claude Code shown):

```json
{
  "mcpServers": {
    "shoplflow": {
      "command": "npx",
      "args": ["-y", "@shoplflow/mcp"]
    }
  }
}
```

## Tools

**Tokens (Phase 1)**
- **`list_tokens`** — discover token names/values; filter by `domain` (`shared` | `shopl` | `hada`), `type`, or a `query` substring.
- **`get_token`** — full record for one token by exact `name` (+ optional `domain`).
- Resource **`shoplflow://tokens`** — the entire catalog as JSON.

Typography tokens (e.g. `body1_700`) are applied via the `typography` prop / CSS class, not a CSS variable —
the served records carry `className` for those and `cssVar` for the rest.

**Icons (Phase 2)**
- **`search_icon`** — find icons by name or meaning; filter by `domain` (`shopl` | `hada`) and `limit`.
  Returns the raw name (`IcAdd`) and public alias (`AddIcon`), both importable from the brand asset
  package and usable as `<Icon iconSource={AddIcon} />`. Icon sets differ per brand.

**Components (Phase 3)**
- **`search_component`** — discover `@shoplflow/base` components by name, module, prop, or variant value;
  filter by `group` (module) and `limit`. Compound components are listed per part (e.g. `ModalContainer`, `ModalHeader`).
- **`get_component_api`** — full API for one component by exact name: props (with JSDoc + optionality),
  exact variant values (`sizeVar`/`styleVar`/…), polymorphism (`as` + default element), and native-HTML-attr passthrough.
- Resource **`shoplflow://components`** — compact index of every component.

Component metadata is extracted from `*.types.ts` via ts-morph (build-time only), mirroring how the library
composes props from the documented mixins in `utils/type/ComponentProps.ts`.
