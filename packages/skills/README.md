# @shoplflow agent skills

Downloadable **AI-agent skills** for developers who consume the `@shoplflow/*` packages in their own apps. They teach an AI coding assistant how to install, theme, and use the Shoplflow design system correctly — accurate import paths, the `styleVar`/`sizeVar` patterns, design tokens, brand theming, icons, and utils hooks.

Works with **Claude Code**, **OpenAI Codex**, and **Cursor** — the installer writes each skill in the format that agent expects.

## What's inside

| Skill | Covers |
|-------|--------|
| `shoplflow-setup` | Install, peer deps, required global CSS, `ShoplflowProvider`, SHOPL/HADA domain |
| `shoplflow-components` | `Button`, `Text`, `Stack`, `Icon`, overlays; `styleVar`/`sizeVar`; polymorphic `as` |
| `shoplflow-theming` | `colorTokens`/`spacingTokens`/`typographyTokens`…; token KEY vs VALUE; `getDomain()` |
| `shoplflow-icons-utils` | `@shoplflow/shopl-assets` / `hada-assets` icons + `@shoplflow/utils` hooks |
| `shoplflow-skills-update` | Check whether the installed skills are the latest version and update them |

The source of truth is `skills/<name>/SKILL.md` (the SKILL.md open standard). Claude Code and Cursor read this format natively, so the files are copied verbatim; for Codex the installer wires them into `AGENTS.md`.

## Install

From the root of the project you want to add the skills to, run:

```bash
npx @shoplflow/skills            # interactive: asks which agent + scope
```

Or non-interactive:

```bash
npx @shoplflow/skills --agent claude               # into ./ (current project)
npx @shoplflow/skills --agent cursor --dir ../app  # into another project
npx @shoplflow/skills --agent codex --scope global # into your home dir
npx @shoplflow/skills --agent all                  # claude + codex + cursor
npx @shoplflow/skills --list                       # preview the skills
```

Flags: `--agent claude|codex|cursor|all` · `--scope project|global` · `--dir <path>` · `--legacy-cursor-rules` · `--yes` · `--list`

> Prefer not to use `npx`? Copy this package folder and run `node install.mjs` with the same flags.

### Where files land

| Agent | Project scope | Global scope |
|-------|---------------|--------------|
| **Claude Code** | `./.claude/skills/<name>/SKILL.md` | `~/.claude/skills/<name>/SKILL.md` |
| **Cursor** | `./.cursor/skills/<name>/SKILL.md` | `~/.cursor/skills/<name>/SKILL.md` |
| **Codex** | `./AGENTS.md` (managed block) + `./.codex/skills/shoplflow/*.md` | `~/.codex/AGENTS.md` + `~/.codex/skills/shoplflow/*.md` |

- **Claude**: skills are auto-discovered; the agent loads one when a task matches its description.
- **Cursor**: installed as native [Agent Skills](https://cursor.com/docs/skills) under `.cursor/skills/` (the same SKILL.md standard as Claude) — Cursor loads them by description on relevant tasks. Pass `--legacy-cursor-rules` to instead emit `.cursor/rules/*.mdc` (*Agent Requested* rules) for Cursor versions predating Agent Skills.
- **Codex**: `AGENTS.md` gets a managed block (between `<!-- shoplflow-skills:start -->` / `:end -->`) pointing at the skill files, so Codex reads the right guide on demand. Re-running replaces the block in place — safe and idempotent; your other `AGENTS.md` content is preserved.

## Updating / uninstalling

- **Update**: re-run `npx @shoplflow/skills@latest --agent <…>` (pin `@latest` to skip the npx cache). Files are overwritten in place, the installer records the version in `shoplflow-skills.lock.json`, and for Cursor it auto-removes superseded `.cursor/rules/*.mdc` from pre-`0.2.0` installs. The bundled `shoplflow-skills-update` skill lets your agent compare that lock against `npm view @shoplflow/skills version` and update when behind. Skills are vendored, so they never auto-update — re-run to refresh.
- **Uninstall**: delete the `<name>` skill folders under `.claude/skills/` / `.cursor/skills/` (or the `.cursor/rules/*.mdc` files if you used `--legacy-cursor-rules`), and for Codex remove the managed block from `AGENTS.md` plus `.codex/skills/shoplflow/`.

## Notes

- Skills are **self-contained** — they reference only the published npm package API (`@shoplflow/base`, `@shoplflow/utils`, `@shoplflow/shopl-assets`, `@shoplflow/hada-assets`), no monorepo internals — so they work in any consumer project.
- The installer has **no dependencies** and needs Node ≥ 16.
- Verified against: `@shoplflow/base@0.48.0`, `@shoplflow/utils@0.8.0`, `@shoplflow/shopl-assets@0.12.44`, `@shoplflow/hada-assets@0.1.10`.
