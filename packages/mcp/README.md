# @shoplflow/mcp

Model Context Protocol (MCP) server that exposes the shoplflow design system to AI coding agents
(Claude Code, Cursor, …) so they generate UI against **real** tokens, components, and icons instead
of hallucinating them.

## Architecture

Metadata is **generated at build time** from the same sources that produce the shipped library, then
served by a thin stdio server. This makes drift structurally impossible — the MCP can never describe a
token or component that differs from what actually ships.

```
tokens.json ─┐
*.types.ts  ─┤ scripts/generate-metadata.cjs ─► src/data/*.generated.json ─► MCP server (stdio)
*.stories   ─┘   (build step)                     (bundled into the bin)
```

## Roadmap

| Phase | Surface | Source | Status |
|-------|---------|--------|--------|
| 1 | Design tokens (`list_tokens`, `get_token`, `shoplflow://tokens`) | `tokens.json` | ✅ done |
| 2 | Icon search (`search_icon`) | `*-assets` | planned |
| 3 | Component API (`get_component_api`, `search_component`) | `*.types.ts` | planned |
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

## Tools (Phase 1)

- **`list_tokens`** — discover token names/values; filter by `domain` (`shared` | `shopl` | `hada`), `type`, or a `query` substring.
- **`get_token`** — full record for one token by exact `name` (+ optional `domain`).
- Resource **`shoplflow://tokens`** — the entire catalog as JSON.

Typography tokens (e.g. `body1_700`) are applied via the `typography` prop / CSS class, not a CSS variable —
the served records carry `className` for those and `cssVar` for the rest.
