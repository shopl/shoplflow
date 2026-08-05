# @shoplflow/mcp

Model Context Protocol (MCP) server that exposes the shoplflow design system to AI coding agents
(Claude Code, Cursor, Codex, …) so they generate UI against **real** tokens, components, and icons instead
of hallucinating them.

```tsx
// Without the MCP — plausible, but nothing here exists
<Button variant="primary" size="medium" color="#3B82F6" />
<Icon name="plus" />

// With the MCP — looked up from the shipped library
<Button styleVar="PRIMARY" sizeVar="M" />
<Icon iconSource={AddIcon} sizeVar="S" color="neutral500" />
```

> 내부 구조·설계 결정·확장 가이드는 [아키텍쳐.md](./아키텍쳐.md)를 참고하세요.

**Contents:** [Quick start](#quick-start) · [Verify](#verify-the-connection) · [Tools](#tool-reference) · [Resources](#resources) · [Working with an agent](#working-with-an-agent) · [What's served](#whats-served) · [Development](#local-development) · [Troubleshooting](#troubleshooting)

---

## Quick start

The server runs over **stdio** and needs no auth, no network, and no config — the whole design-system
catalog is bundled into the published binary.

### Claude Code

Easiest path — install the plugin, which wires up this MCP **and** the [`@shoplflow/skills`](../skills) agent skills in one step:

```bash
/plugin marketplace add shopl/shoplflow
/plugin install shoplflow@shoplflow-marketplace
```

MCP only:

```bash
claude mcp add shoplflow -- npx -y @shoplflow/mcp
```

Or commit it to the project so the whole team gets it — `.mcp.json` at the repo root:

```json
{
  "mcpServers": {
    "shoplflow": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@shoplflow/mcp"]
    }
  }
}
```

### Cursor

`.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

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

### Codex

`~/.codex/config.toml`:

```toml
[mcp_servers.shoplflow]
command = "npx"
args = ["-y", "@shoplflow/mcp"]
```

### VS Code (GitHub Copilot)

`.vscode/mcp.json`:

```json
{
  "servers": {
    "shoplflow": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@shoplflow/mcp"]
    }
  }
}
```

### Any other MCP client

Anything that speaks stdio MCP works — the command is always:

```bash
npx -y @shoplflow/mcp
```

Or install it and use the bin directly:

```bash
npm i -g @shoplflow/mcp && shoplflow-mcp
```

Requires **Node ≥ 18**.

---

## Verify the connection

After restarting your agent, ask it something only this server can answer:

> "shoplflow에서 primary300 토큰 값이 뭐야?"

A working connection returns `#3299fe` **via a `get_token` call** (you should see the tool invocation).
If the agent answers from guesswork without calling a tool, it isn't connected.

In Claude Code you can also list it explicitly:

```bash
claude mcp list          # shoplflow should appear as connected
```

**Connect-time preflight.** On connect, the server hands the client an `instructions` string that the agent
keeps in context for the whole session:

> MANDATORY shoplflow setup before rendering ANY `@shoplflow/base` component: (1) import `@shoplflow/base/styles`
> at the app entry; (2) wrap the tree in `<ShoplflowProvider domain="SHOPL" | "HADA">`. These components are
> CLIENT-ONLY … Next.js App Router requires a `'use client'` boundary plus an Emotion registry.

This is why the agent won't forget the provider even if you never mention it.

---

## Tool reference

Eight tools, organised as **discover → detail**. List tools return summaries; detail tools return everything.
That split keeps the agent's context small — pulling all 65 component APIs at once would cost tens of
thousands of tokens.

| Tool                                      | Use it to                       | Returns                         |
| ----------------------------------------- | ------------------------------- | ------------------------------- |
| [`list_tokens`](#list_tokens)             | discover token names/values     | summaries                       |
| [`get_token`](#get_token)                 | get one token in full           | full record                     |
| [`search_icon`](#search_icon)             | find an icon by name or meaning | name + alias + import           |
| [`search_component`](#search_component)   | discover components             | summaries + variants            |
| [`get_component_api`](#get_component_api) | get one component's full API    | props + variants + polymorphism |
| [`get_usage_example`](#get_usage_example) | get real usage code             | story-derived examples          |
| [`get_setup_guide`](#get_setup_guide)     | scaffold correct setup          | provider + CSS + snippet        |
| [`check_environment`](#check_environment) | check framework support         | support status + workaround     |

---

### `list_tokens`

Discover exact token names and values before writing UI code.

| Param    | Type                            | Required | Description                                                                                                                |
| -------- | ------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `domain` | `"shared" \| "shopl" \| "hada"` | –        | `shared` = palette/spacing/radius/weights/shadows (brand-agnostic). `shopl`/`hada` = typography + primary/semantic colors. |
| `type`   | `string`                        | –        | One of `color`, `spacing`, `borderRadius`, `fontWeights`, `typography`, `boxShadow`.                                       |
| `query`  | `string`                        | –        | Case-insensitive substring against the token **name or value**.                                                            |

```jsonc
// list_tokens({ type: "color", query: "primary" })
{
  "count": 10, // primary100/150/200/300/400 × shopl + hada
  "tokens": [
    {
      "name": "primary300",
      "type": "color",
      "domain": "shopl",
      "value": "#3299fe",
      "cssVar": "--primary300",
      "className": null,
    },
  ],
}
```

> **`cssVar` vs `className`.** Most tokens are CSS custom properties (`var(--primary300)`).
> Typography tokens are **not** — they're applied as a class or via the `typography` prop
> (`<Text typography="body1_700" />`), so they carry `className` instead. The agent uses this
> field to pick the right consumption pattern.

---

### `get_token`

Full record for one token by exact name.

| Param    | Type                            | Required | Description                                                    |
| -------- | ------------------------------- | -------- | -------------------------------------------------------------- |
| `name`   | `string`                        | ✅       | Exact token name, e.g. `primary300`, `body1_700`, `spacing08`. |
| `domain` | `"shared" \| "shopl" \| "hada"` | –        | Disambiguate — the same name can exist per brand.              |

A miss returns suggestions rather than an error, so the agent can self-correct:

```jsonc
// get_token({ name: "primaryX" })
{ "found": false, "name": "primaryX", "suggestions": ["primary100 (shopl)", "primary200 (shopl)", …] }
```

---

### `search_icon`

Find icons by name **or meaning**. Both the raw name (`IcAdd`) and the public alias (`AddIcon`) are
importable and both are returned.

| Param    | Type                | Required | Description                                             |
| -------- | ------------------- | -------- | ------------------------------------------------------- |
| `query`  | `string`            | ✅       | Name or keywords — `"add"`, `"chat bot"`, `"calendar"`. |
| `domain` | `"shopl" \| "hada"` | –        | Restrict to one brand's icon set.                       |
| `limit`  | `number` (≤50)      | –        | Max results, default 15.                                |

```jsonc
// search_icon({ query: "trash", domain: "shopl" })
{
  "query": "trash",
  "count": 2,
  "icons": [
    {
      "name": "IcTrash",
      "alias": "TrashIcon",
      "domain": "shopl",
      "importFrom": "@shoplflow/shopl-assets",
    },
    {
      "name": "IcTrashLine",
      "alias": "TrashLineIcon",
      "domain": "shopl",
      "importFrom": "@shoplflow/shopl-assets",
    },
  ],
}
```

> **Multi-word queries narrow, they don't broaden.** Every term must match — `"chat bot"` returns only
> `IcAiChatBot`, not everything chat-related. Search first, then use `<Icon iconSource={TrashIcon} />`.
>
> **Icon sets differ per brand.** An icon in `shopl` may not exist in `hada`. Pass `domain` when the app
> targets one brand.

---

### `search_component`

Discover components by name, module, prop name, or variant value.

| Param   | Type           | Required | Description                                                      |
| ------- | -------------- | -------- | ---------------------------------------------------------------- |
| `query` | `string`       | ✅       | e.g. `"button"`, `"modal"`, `"date"`, `"styleVar"`, `"loading"`. |
| `group` | `string`       | –        | Restrict to one module (the component folder, e.g. `"Modal"`).   |
| `limit` | `number` (≤50) | –        | Max results, default 20.                                         |

Compound components are listed **per part** — searching `"modal"` returns `ModalContainer`,
`ModalHeader`, `ModalContents`, … not a single `Modal` entry.

```jsonc
// search_component({ query: "button" })
{
  "count": 11, // Button, ChipButton, DropdownButton, IconButton, SplitButton, ToggleButton, …
  "components": [
    {
      "name": "Button",
      "group": "Button",
      "polymorphic": true,
      "variants": [
        { "prop": "sizeVar", "values": ["S", "M", "XS"] },
        {
          "prop": "styleVar",
          "values": ["PRIMARY", "SECONDARY", "SOLID", "GHOST"],
        },
      ],
      "propCount": 9,
    },
  ],
}
```

---

### `get_component_api`

Everything about one component.

| Param  | Type     | Required | Description                                                              |
| ------ | -------- | -------- | ------------------------------------------------------------------------ |
| `name` | `string` | ✅       | Exact component name, case-insensitive — `"Button"`, `"ModalContainer"`. |

```jsonc
// get_component_api({ name: "Button" })
{
  "found": true,
  "component": {
    "name": "Button",
    "group": "Button",
    "importFrom": "@shoplflow/base",
    "polymorphic": true, // accepts `as`
    "defaultElement": "button", // renders <button> by default
    "nativeAttrs": "button", // forwards native <button> attributes
    "variants": [
      { "prop": "sizeVar", "values": ["S", "M", "XS"] },
      {
        "prop": "styleVar",
        "values": ["PRIMARY", "SECONDARY", "SOLID", "GHOST"],
      },
    ],
    "props": [
      {
        "name": "color",
        "optional": true,
        "type": "ColorTokens",
        "description": "텍스트 혹은 아이콘의 색상을 설정합니다. styleVar이 있는 경우 메인색상을 설정합니다.",
      },
      {
        "name": "isLoading",
        "optional": true,
        "type": "boolean",
        "description": "로딩 여부를 설정합니다.",
      },
    ],
  },
}
```

Field meanings:

| Field            | Meaning                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `polymorphic`    | Accepts an `as` prop — `<Button as="a" href="…">`.                                                                                       |
| `defaultElement` | The element rendered when `as` is omitted.                                                                                               |
| `nativeAttrs`    | Forwards that element's native HTML attributes (`onClick`, `type`, `aria-*`, …). Not enumerated — there are hundreds.                    |
| `variants`       | The **exact** allowed values, read from the `as const` enums in the source. Nothing else is valid.                                       |
| `props`          | Component-specific props with JSDoc (Korean, straight from the library) and optionality. Types longer than 80 chars are elided with `…`. |

Misses return `suggestions`, same as `get_token`.

---

### `get_usage_example`

Real, copy-pasteable usage extracted from the component's Storybook stories — `args` and `render` JSX,
with `play`/`parameters`/`argTypes` test noise stripped.

| Param  | Type     | Required | Description                                                                                                                                |
| ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name` | `string` | ✅       | Module name (`"Button"`, `"Modal"`) **or** a component name from `get_component_api` (`"ModalContainer"` resolves to the `Modal` stories). |

```jsonc
// get_usage_example({ name: "Button" })
{
  "found": true,
  "component": "Button",
  "group": "Button",
  "examples": [
    {
      "story": "Playground",
      "args": "{ styleVar: 'PRIMARY', sizeVar: 'M', children: 'Button', disabled: false }",
    },
    {
      "story": "Variants",
      "code": "<div style={flexWrap}>\n  <Button {...args} styleVar='PRIMARY'>Primary</Button>\n  <Button {...args} styleVar='SOLID' color='neutral300'>Solid</Button>\n</div>",
    },
  ],
}
```

> Stories are the best usage source because they're rendered in CI — an example that broke would fail the build.
> Up to 8 examples per module; long code is clipped at ~1200 chars.

---

### `get_setup_guide`

The prerequisite setup before **any** `@shoplflow/base` component renders. Takes no arguments.

```jsonc
{
  "provider": {
    "name": "ShoplflowProvider",
    "importFrom": "@shoplflow/base",
    "clientOnly": true,
    "clientReasons": [
      "framer-motion (LazyMotion)",
      "Modal/Popper portals",
      "DOM theming hook (data-shoplflow)",
      "Emotion CSS-in-JS",
    ],
    "props": [
      {
        "name": "domain",
        "type": "DomainType",
        "optional": true,
        "default": "SHOPL",
        "values": ["SHOPL", "HADA"],
      },
    ],
  },
  "styles": [
    {
      "specifier": "@shoplflow/base/styles",
      "role": "design-token CSS vars + typography classes (required)",
    },
    { "specifier": "@shoplflow/base/reset", "role": "CSS reset (optional)" },
  ],
  "peerDependencies": {
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "react": "^18",
    "react-dom": "^18",
  },
  "setupSteps": ["…"],
  "snippet": "import { ShoplflowProvider } from '@shoplflow/base';\nimport '@shoplflow/base/styles';\n\n<ShoplflowProvider domain=\"SHOPL\">\n  <App />\n</ShoplflowProvider>",
}
```

> The `snippet` is **synthesised from the real provider and package exports**, so it can never reference a
> wrong import path or a prop that doesn't exist.

Call this before scaffolding a project. For framework-specific caveats, pair it with `check_environment`.

---

### `check_environment`

Whether — and how — shoplflow works in a given framework. Components are client-only, so SSR/RSC
frameworks have caveats.

| Param       | Type     | Required | Description                                                                         |
| ----------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| `framework` | `string` | –        | e.g. `"next app router"`, `"vite"`, `"next pages"`. Omit to list every environment. |

| Environment                | Support             | Summary                                                                                                                                                                            |
| -------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vite / CRA (SPA, CSR)      | ✅ supported        | Recommended. Import the styles and wrap with the provider at the entry point.                                                                                                      |
| Next.js — Pages Router     | ⚠️ constrained      | Renders, but FOUC without Emotion SSR. Workaround: wrap in `_app.tsx`, add `extractCriticalToChunks` in `_document.tsx`.                                                           |
| Next.js — App Router (RSC) | ⛔ needs workaround | Cannot render inside a Server Component. Workaround: `'use client'` provider wrapper + Emotion registry (`useServerInsertedHTML`); keep every consumer inside the client boundary. |

Unknown input returns the full list rather than an empty result.

---

## Resources

For clients that prefer reading a document over calling tools.

| URI                      | Content                                                                           |
| ------------------------ | --------------------------------------------------------------------------------- |
| `shoplflow://tokens`     | The entire token catalog as JSON (all 114 records with counts by type/domain).    |
| `shoplflow://components` | Compact index of every component — name, group, polymorphism, variant prop names. |

---

## Working with an agent

You don't need to name the tools — the descriptions steer the agent. But knowing the flow helps you
diagnose a bad result.

```
"shoplflow로 삭제 버튼 만들어줘"
  ├ search_component("button")   → Button, IconButton, SplitButton, ToggleButton, …
  ├ get_component_api("Button")  → exact styleVar/sizeVar values + props
  ├ get_usage_example("Button")  → real JSX from the stories
  ├ search_icon("trash")         → IcTrash / TrashIcon + import path
  └ list_tokens({type:"color"})  → exact color token keys
```

**Prompts that use the server well**

| Goal                | Ask                                                                               |
| ------------------- | --------------------------------------------------------------------------------- |
| Correct scaffolding | "Vite 앱에 shoplflow 셋업해줘" → triggers `get_setup_guide` + `check_environment` |
| Exact variants      | "Button에 어떤 styleVar 값이 있어?" → `get_component_api`                         |
| Find an icon        | "휴지통 아이콘 뭐 써야 해?" → `search_icon`                                       |
| Match the design    | "이 카드 배경을 shoplflow 뉴트럴 토큰으로 바꿔줘" → `list_tokens`                 |
| Framework check     | "Next.js App Router에서 shoplflow 써도 돼?" → `check_environment`                 |

**Pair with the skills package.** The MCP gives an agent _facts_; [`@shoplflow/skills`](../skills) gives it
_idioms_ — the setup order, the KEY-vs-VALUE distinction, the `styleVar`/`sizeVar` convention. Installing the
plugin gets both. See [../skills/README.md](../skills/README.md).

---

## What's served

Everything is generated at build time from the same files that produce the shipped library, so the served
metadata can't describe something that differs from what ships.

| Surface              | Count                                                                                          | Source                                              |
| -------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Design tokens        | **114** (color 44 · typography 47 · spacing 13 · borderRadius 6 · fontWeights 3 · boxShadow 1) | `base/src/styles/tokens.json`                       |
| Icons                | **473** (shopl 369 · hada 104)                                                                 | `{shopl,hada}-assets` barrels                       |
| Component APIs       | **65 cards** across 43 modules (19 with variants)                                              | `base/src/components/**/*.types.ts`                 |
| Usage examples       | **149** across 42 modules                                                                      | `base/src/components/**/*.stories.tsx`              |
| Setup & environments | provider + 2 CSS exports + 3 frameworks                                                        | `base` provider/package.json + `setup.curated.json` |

```
tokens.json    ─┐
*-assets barrel ─┤ scripts/generate-metadata.cjs ─► src/data/*.generated.json ─► MCP server (stdio)
*.types.ts     ─┤   (build step, ts-morph)          (inlined into the bin)
*.stories.tsx  ─┘
```

Full pipeline details in [아키텍쳐.md](./아키텍쳐.md).

---

## Local development

```bash
pnpm --filter @shoplflow/mcp generate:metadata   # regenerate metadata from the library sources
pnpm --filter @shoplflow/mcp build:package       # generate + bundle to dist/
pnpm --filter @shoplflow/mcp dev                 # generate + tsup --watch
pnpm --filter @shoplflow/mcp start               # run the built server over stdio
pnpm --filter @shoplflow/mcp check:wiring        # verify the base-release coupling is intact
```

`build:package` always runs `generate:metadata` first, so a normal build can't ship stale data.

### Smoke test

The only end-to-end check — spins up `dist/index.js` with a real MCP client and exercises every tool:

```bash
pnpm --filter @shoplflow/mcp build:package
node packages/mcp/scripts/smoke.mjs
```

Expected tail: `✓ smoke test passed`. Run it after touching `server.ts` or any extractor.

### Point your agent at the local build

The repo root `.mcp.json` already does this for monorepo development:

```json
{
  "mcpServers": {
    "shoplflow": {
      "type": "stdio",
      "command": "node",
      "args": ["packages/mcp/dist/index.js"]
    }
  }
}
```

Rebuild (`build:package`) and restart the agent to pick up changes.

### After changing the library

Regenerate and **commit the generated JSON** — it's tracked in git so releases are reproducible and diffs
are reviewable.

| You changed                          | Regenerate affects          |
| ------------------------------------ | --------------------------- |
| `tokens.json`                        | `tokens.generated.json`     |
| SVG assets (after `build:assets`)    | `icons.generated.json`      |
| a `*.types.ts`                       | `components.generated.json` |
| a `*.stories.tsx`                    | `stories.generated.json`    |
| provider / `base` exports / peerDeps | `setup.generated.json`      |

Sanity-check the console summary (`✓ tokens: 114 …`) — a sudden drop in a count means an extractor's
assumption broke.

**CI enforces this.** `build-test.yml` regenerates the metadata on every PR and fails if the committed
JSON differs, with the exact command to fix it. Without that gate the committed copy silently rots and
the "review the effect of a base change in the PR diff" benefit disappears.

### Release coupling (why `check:wiring` exists)

A `@shoplflow/base` release automatically republishes this package with freshly extracted metadata. That
behaviour isn't declared in one place — it emerges from settings spread across `package.json`,
`turbo.json`, and `.changeset/config.json`:

| Piece                                                        | Removing it…                                                     |
| ------------------------------------------------------------ | ---------------------------------------------------------------- |
| `@shoplflow/{base,shopl-assets,hada-assets}` in devDeps      | stops changesets from bumping mcp → **mcp is never republished** |
| `generate:metadata &&` in `build:package`                    | allows a build path that bundles previously generated JSON       |
| turbo scheduling `mcp#build:package` under `turbo run build` | means CI's `pnpm build` never produces `dist/` before publish    |

Each removal keeps the build green — the failure is silent, and consumers just keep receiving stale
metadata. `check:wiring` asserts all three and runs on every PR. Details in
[아키텍쳐.md §6](./아키텍쳐.md).

### Editing the setup guidance

`setup.curated.json` is the **one file the team edits by hand**. It holds `setupSteps`, per-framework
`environments`, and the connect-time `instructions`. Everything else (provider props, CSS exports, peer deps)
is extracted from code and must not be duplicated there.

Keep the Next.js entries in sync with the library's actual support stance — the App Router entry currently
carries a `verify` note flagging it as an inferred, unratified position.

---

## Troubleshooting

| Symptom                           | Cause                                   | Fix                                                                                                                                              |
| --------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Agent doesn't call any tool       | Server not connected                    | `claude mcp list` / check the client's MCP panel. Restart the agent after editing config.                                                        |
| `npx` fails or hangs              | Node < 18, or no network on first fetch | `node -v`; run `npx -y @shoplflow/mcp` in a terminal to see the real error. First run downloads the package.                                     |
| Connection drops immediately      | Something wrote to stdout               | stdout is reserved for JSON-RPC. Any `console.log` in the server corrupts the protocol — logs must go to `stderr`.                               |
| Tools work but data looks stale   | Metadata not regenerated                | `pnpm --filter @shoplflow/mcp build:package`, restart the agent. Published versions ship the metadata frozen at release time — bump the package. |
| An icon isn't found               | Wrong brand                             | Icon sets differ per brand; retry `search_icon` without `domain`, or with the other one.                                                         |
| A component isn't found           | Compound part name                      | Search the module (`search_component({ query: "modal" })`) to see the real part names.                                                           |
| Agent still skips the provider    | Client ignores `instructions`           | Some clients don't surface server instructions. Install [`@shoplflow/skills`](../skills) so the setup rule arrives as a skill too.               |
| Multi-word search returns nothing | AND semantics                           | Every term must match. Try fewer/shorter terms.                                                                                                  |

---

## Related

- [아키텍쳐.md](./아키텍쳐.md) — internal architecture, design decisions, extension guide
- [`@shoplflow/skills`](../skills) — agent skills + the plugin that bundles this server
- [CLAUDE.md](../../CLAUDE.md) — monorepo guide
