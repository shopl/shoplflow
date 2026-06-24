---
name: shoplflow-skills-update
description: Check whether the installed @shoplflow agent skills are the latest version and update them if outdated. Use when the user asks if the @shoplflow skills are current/up to date/stale, mentions updating or upgrading the shoplflow skills, or before relying on these skills after a long gap.
---

# Updating the @shoplflow skills

The @shoplflow skills are **vendored** — copied into this project by `npx @shoplflow/skills`. They do **not** auto-update when a new `@shoplflow/skills` is published, so check periodically.

## 1. Read the installed version
Look for `shoplflow-skills.lock.json` next to the installed skills:
- Claude Code → `.claude/skills/shoplflow-skills.lock.json`
- Cursor → `.cursor/skills/shoplflow-skills.lock.json`
- Codex → the `Installed @shoplflow/skills version:` line in the `@shoplflow design system` block of `AGENTS.md`

Its `version` is what's installed. **If the file/line is missing**, the install predates version stamping (≤ 0.1.0) — treat as outdated.

## 2. Get the latest published version
```bash
npm view @shoplflow/skills version
```

## 3. Compare
- Installed `version` **equals** latest → up to date, nothing to do.
- Installed `version` **lower** (or unknown) → outdated, update below.

## 4. Update if outdated
Re-run the installer for whichever agent(s) this project uses, pinning `@latest` to bypass the npx cache:
```bash
npx @shoplflow/skills@latest --agent <claude|codex|cursor|all>
```
Re-running overwrites the skill files in place, refreshes `shoplflow-skills.lock.json`, and (for Cursor) auto-removes superseded `.cursor/rules/*.mdc` from older installs.

## Notes
- This only refreshes the **skill docs** — it does not change your app's `@shoplflow/*` runtime package versions (bump those in `package.json` separately).
- Commit the refreshed skill files + lock so your whole team gets the update.
- The lock file is ignored by Claude/Cursor skill discovery (they look for `<name>/SKILL.md`), so it's safe to keep checked in.
