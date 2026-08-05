# @shoplflow agent skills + plugin

Downloadable AI-agent **skills** — plus an optional bundled **MCP server** — for developers who consume the
`@shoplflow/*` packages in their own apps. They teach an AI coding assistant how to install, theme, and use the
Shoplflow design system correctly: accurate import paths, the `styleVar`/`sizeVar` patterns, design tokens,
brand theming, icons, and utils hooks.

Works with **Claude Code**, **Cursor**, and **OpenAI Codex**.

> 내부 구조·설계 결정·확장 가이드는 [아키텍쳐.md](./아키텍쳐.md)를 참고하세요.

**Contents:** [What's inside](#whats-inside) · [Which install path](#which-install-path) · [A. Plugin](#a-as-a-plugin--skills--mcp-in-one-step) · [B. npx](#b-skills-only-via-npx-no-mcp) · [Verify](#verify-the-install) · [Using them](#using-the-skills) · [Updating](#updating--uninstalling) · [Maintainers](#for-maintainers)

---

## What's inside

Five skills. Each is a single `SKILL.md` — YAML frontmatter (`name`, `description`) plus a markdown body.

| Skill                         | Covers                                                                                                                                                                                                                           | Loads when you…                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **`shoplflow-setup`**         | Install + peer deps, the required `@shoplflow/base/styles` import, `ShoplflowProvider`, SHOPL/HADA domain, common gotchas                                                                                                        | set up shoplflow, hit "styles aren't applying", or "Modal/Tooltip doesn't open"                   |
| **`shoplflow-components`**    | `Button`, `Text`, `Stack`, `Icon`, overlays; the `styleVar`/`sizeVar` convention; polymorphic `as`; `lineClamp`; ref forwarding; full export catalog                                                                             | render or compose components, pick a variant, lay out with `Stack`, wire a Modal/Tooltip/Dropdown |
| **`shoplflow-theming`**       | `colorTokens`/`spacingTokens`/`typographyTokens`/`borderRadiusTokens`/`boxShadowTokens`/`fontWeightTokens`; **token KEY vs VALUE**; typography-as-class; `getDomain()` brand branching                                           | style custom emotion components to match shoplflow, pick a token, branch per brand                |
| **`shoplflow-icons-utils`**   | `@shoplflow/shopl-assets` / `hada-assets` icons + illustrations, rendering through `Icon`; `@shoplflow/utils` hooks (`useOutsideClick`, `useResizeObserver`, `useSelect`, `useMergeRefs`, `usePopover`, `useParentElementClick`) | render an icon, find an icon name, wire outside-click/popover/resize behaviour                    |
| **`shoplflow-skills-update`** | Compare the installed skill version against npm and update                                                                                                                                                                       | ask "are the shoplflow skills up to date?"                                                        |

**How loading works.** Agents don't read every skill on every turn. They keep `name` + `description` in
context and pull the body only when a task matches — so the descriptions are written as _trigger specs_
listing concrete situations, including symptoms ("broken Modal/Tooltip/Popper portals") rather than causes.

The source of truth is `skills/<name>/SKILL.md` (the SKILL.md open standard). Claude Code, Cursor, and Codex
all read this format, so the same files back both install paths below.

### Skills vs the MCP server

They solve different halves of the same problem — install both if you can.

|            | Skills (this package)                                             | [`@shoplflow/mcp`](../mcp)                                               |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Provides   | **Idioms** — setup order, conventions, pitfalls, what to use when | **Facts** — 114 tokens, 65 component APIs, 473 icons, 149 story examples |
| Delivery   | Static text injected into the prompt                              | Live tool calls                                                          |
| Without it | Missing provider, wrong patterns, "why isn't this rendering"      | Hallucinated token names and props                                       |

---

## Which install path

|                     | **A — Plugin** (recommended)            | **B — npx**                 |
| ------------------- | --------------------------------------- | --------------------------- |
| Installs skills     | ✅                                      | ✅ (same files)             |
| Installs MCP server | ✅                                      | ❌                          |
| Updates             | Through your agent's plugin update flow | Manual re-run               |
| Files in your repo  | No (agent-managed reference)            | Yes (vendored, committable) |
| Requires            | Plugin-capable agent version            | Node ≥ 16                   |

Pick **A** unless you specifically don't want the MCP server, want the skills committed into your repo, or
your agent predates plugin support.

---

## A. As a plugin — skills + MCP in one step

The plugin pulls the skills from this repo and declares the MCP server as `npx -y @shoplflow/mcp`, so you never
hand-edit an MCP config. Updating the plugin refreshes both the skills and the MCP wiring.

### Claude Code

```bash
/plugin marketplace add shopl/shoplflow
/plugin install shoplflow@shoplflow-marketplace
```

### Cursor

Open **Customize** → add a team marketplace pointing at the `shopl/shoplflow` GitHub repo (Cursor reads
`.cursor-plugin/marketplace.json` at the repo root), then install the **shoplflow** plugin (project or user scope).

### Codex

```bash
codex plugin marketplace add shopl/shoplflow
```

Then install the **shoplflow** plugin from the Codex plugin directory.

> **Where the manifests live (maintainers):** each host's plugin manifest is under
> `packages/skills/.{claude,cursor,codex}-plugin/`, and the marketplace catalogs are at the repo root
> (`.claude-plugin/`, `.cursor-plugin/`, `.agents/plugins/`). All three point at the same
> `packages/skills/skills/` folder and the same `@shoplflow/mcp` command.

---

## B. Skills only via `npx` (no MCP)

From the root of the project you want to add the skills to:

```bash
npx @shoplflow/skills            # interactive — asks which agent + scope
```

Non-interactive:

```bash
npx @shoplflow/skills --agent claude               # into ./ (current project)
npx @shoplflow/skills --agent cursor --dir ../app  # into another project
npx @shoplflow/skills --agent codex --scope global # into your home dir
npx @shoplflow/skills --agent all                  # claude + codex + cursor
npx @shoplflow/skills --list                       # preview the skills, install nothing
```

### Flags

| Flag                    | Values                                | Default                | Notes                                                                                                  |
| ----------------------- | ------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `--agent`               | `claude` · `codex` · `cursor` · `all` | prompts, else `claude` | `all` writes every format                                                                              |
| `--scope`               | `project` · `global`                  | `project`              | `global` targets your home dir                                                                         |
| `--dir <path>`          | any path                              | `cwd`                  | Project scope only; ignored for `global`                                                               |
| `--legacy-cursor-rules` | –                                     | off                    | Cursor: emit `.cursor/rules/*.mdc` instead of native Agent Skills, for versions predating Agent Skills |
| `--yes`, `-y`           | –                                     | off                    | Skip the confirmation prompt (use in CI)                                                               |
| `--list`                | –                                     | –                      | List bundled skills and exit                                                                           |
| `--help`, `-h`          | –                                     | –                      | Usage                                                                                                  |

Both `--flag value` and `--flag=value` forms work. With no TTY (CI, piped input) the installer never prompts —
it falls back to `--agent claude --scope project`, so pass flags explicitly in scripts.

> Prefer not to use `npx`? Copy this package folder and run `node install.mjs` with the same flags.
> The installer has **zero dependencies** and needs Node ≥ 16.

### Where files land

| Agent           | Project scope                                                    | Global scope                                            |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| **Claude Code** | `./.claude/skills/<name>/SKILL.md`                               | `~/.claude/skills/<name>/SKILL.md`                      |
| **Cursor**      | `./.cursor/skills/<name>/SKILL.md`                               | `~/.cursor/skills/<name>/SKILL.md`                      |
| **Codex**       | `./AGENTS.md` (managed block) + `./.codex/skills/shoplflow/*.md` | `~/.codex/AGENTS.md` + `~/.codex/skills/shoplflow/*.md` |

- **Claude** — skills are auto-discovered; the agent loads one when a task matches its description.
- **Cursor** — installed as native [Agent Skills](https://cursor.com/docs/skills) under `.cursor/skills/`
  (the same SKILL.md standard as Claude). Pass `--legacy-cursor-rules` to instead emit `.cursor/rules/*.mdc`
  (_Agent Requested_ rules) for older Cursor versions.
- **Codex** — `AGENTS.md` gets a managed block between `<!-- shoplflow-skills:start -->` / `:end -->` pointing
  at the skill files. Re-running replaces the block in place — idempotent, and your other `AGENTS.md` content
  is preserved.

A `shoplflow-skills.lock.json` is written next to the skills recording the installed version. Agents only scan
for `SKILL.md` folders, so it's inert — it exists so the `shoplflow-skills-update` skill can tell whether your
copy is stale. (For Codex, the version lives in the `AGENTS.md` block instead.)

**Commit the installed files** so your whole team gets the same guidance.

---

## Verify the install

```bash
npx @shoplflow/skills --list     # what should have been written
ls .claude/skills                # Claude
ls .cursor/skills                # Cursor
grep -n "shoplflow-skills:start" AGENTS.md   # Codex
```

Then check the agent actually picks a skill up. Ask something that matches a description:

> "이 프로젝트에 shoplflow 셋업해줘"

The agent should reference the required `@shoplflow/base/styles` import **and** `ShoplflowProvider` without
being told — that knowledge comes from `shoplflow-setup`. If it improvises a generic React setup, the skills
aren't loaded.

---

## Using the skills

You never invoke a skill by name — the agent matches your request against the descriptions. These prompts
reliably land on the right one:

| Prompt                                        | Skill it pulls                              |
| --------------------------------------------- | ------------------------------------------- |
| "shoplflow 설치하고 앱에 연결해줘"            | `shoplflow-setup`                           |
| "스타일이 하나도 안 먹어" / "Modal이 안 열려" | `shoplflow-setup` (gotchas section)         |
| "저장/취소 버튼 만들어줘"                     | `shoplflow-components`                      |
| "이 리스트를 Stack으로 레이아웃 잡아줘"       | `shoplflow-components`                      |
| "이 카드 스타일을 shoplflow 토큰으로 바꿔줘"  | `shoplflow-theming`                         |
| "HADA 브랜드일 때만 다른 색 쓰게 해줘"        | `shoplflow-theming` (`getDomain()`)         |
| "휴지통 아이콘 넣어줘"                        | `shoplflow-icons-utils`                     |
| "드롭다운 바깥 클릭하면 닫히게 해줘"          | `shoplflow-icons-utils` (`useOutsideClick`) |
| "shoplflow 스킬 최신이야?"                    | `shoplflow-skills-update`                   |

### What the skills prevent

A sample of the mistakes they exist to stop:

```tsx
// ❌ token VALUE passed where a KEY is expected
<Text color={colorTokens.neutral700}>…</Text>
// ✅ props take the key string
<Text color="neutral700">…</Text>

// ❌ typography token inlined as if it were CSS properties
const Bad = styled.p`${typographyTokens.body1_400}`;   // it's a class SELECTOR, ".body1_400"
// ✅
<Text typography="body1_400">…</Text>

// ❌ overlays outside the provider — they silently never appear
<Modal … />
// ✅ wrap the tree once at the entry
<ShoplflowProvider domain="SHOPL"><App /></ShoplflowProvider>
```

Adding the [MCP server](../mcp) on top gives the agent exact values too — the real `styleVar` list, the real
icon names, the real token values. Path A installs both.

---

## Updating / uninstalling

### Plugin (path A)

Update through your agent's marketplace/plugin update flow (e.g. Claude Code `/plugin marketplace update`),
which re-pulls the latest skills and MCP wiring from this repo. Uninstall by removing the plugin in your agent.

### npx (path B)

Vendored files never auto-update — re-run to refresh:

```bash
npx @shoplflow/skills@latest --agent claude --yes
```

Pin `@latest` to skip the npx cache. Files are overwritten in place, the version is re-stamped in
`shoplflow-skills.lock.json`, and for Cursor the installer auto-removes superseded `.cursor/rules/*.mdc` from
pre-`0.2.0` installs (only its own slugs — your other rules are untouched).

The bundled `shoplflow-skills-update` skill automates the check: it reads the lock file, runs
`npm view @shoplflow/skills version`, and tells you whether to re-run. Just ask your agent if the skills are current.

### Uninstall (npx)

- Delete the skill folders under `.claude/skills/` / `.cursor/skills/` (or the `.cursor/rules/*.mdc` files if you
  used `--legacy-cursor-rules`), plus `shoplflow-skills.lock.json`.
- For Codex, remove the managed block from `AGENTS.md` and delete `.codex/skills/shoplflow/`.

---

## For maintainers

### Adding a skill

1. Create `skills/<name>/SKILL.md`. **The folder name must equal the frontmatter `name`** — Cursor requires it.
2. Write `description` as a trigger spec: `[what it covers]. Use when [concrete situations]`. Include the
   _symptoms_ a user would actually type, not just the causes.
3. Reference **published npm APIs only** (`@shoplflow/base`, `@shoplflow/utils`, `@shoplflow/shopl-assets`,
   `@shoplflow/hada-assets`) — never monorepo paths. Skills get copied into consumer projects.
4. Cross-reference other skills **by name** (`See the **shoplflow-setup** skill`), not by path.
5. Keep the frontmatter flat `key: value` — the installer's parser is a one-line regex, not a YAML engine.
6. Add a row to the [What's inside](#whats-inside) table.
7. Verify: `node install.mjs --list`, then `node install.mjs --agent all --dir /tmp/probe --yes` and inspect
   all three output formats.
8. Add a changeset. On release, `install.mjs` stamps the new version automatically.

No plugin manifest edits needed — they point at the whole `./skills/` directory.

### Keeping skills accurate

Skills are hand-written, so unlike the MCP they _can_ drift. Re-check them when `base` changes:

| `base` change                                | Re-check                                       |
| -------------------------------------------- | ---------------------------------------------- |
| `styleVar`/`sizeVar` values added or removed | `shoplflow-components`                         |
| typography tokens added or removed           | `shoplflow-components`, `shoplflow-theming`    |
| peer deps or CSS export paths change         | `shoplflow-setup`                              |
| new component exported                       | `shoplflow-components` (catalog at the bottom) |
| new `@shoplflow/utils` hook                  | `shoplflow-icons-utils`                        |

Bump the "Verified against" line below when you do.

### Changing the MCP server command

`npx -y @shoplflow/mcp` is declared in four places — update all of them:
`.claude-plugin/plugin.json`, `.cursor-plugin/plugin.json`, `.mcp.json` (Codex reads this one), and this README.

---

## Notes

- Skills are **self-contained** — they reference only the published npm package API, so they work in any
  consumer project.
- The `npx` installer has **no dependencies** and needs Node ≥ 16.
- Verified against: `@shoplflow/base@0.48.0`, `@shoplflow/utils@0.8.0`, `@shoplflow/shopl-assets@0.12.44`,
  `@shoplflow/hada-assets@0.1.10`.

## Related

- [아키텍쳐.md](./아키텍쳐.md) — internal architecture, install pipeline, extension guide
- [`@shoplflow/mcp`](../mcp) — the MCP server bundled by the plugin
- [CLAUDE.md](../../CLAUDE.md) — monorepo guide
