---
"@shoplflow/skills": patch
---

Add plugin distribution alongside the npx installer. Consumers on Claude Code, Cursor, or Codex can now install the Shoplflow skills **and** the `@shoplflow/mcp` server in one step via a plugin (host marketplaces under `.claude-plugin/`, `.cursor-plugin/`, `.agents/plugins/`, all pointing at `packages/skills`). The `npx @shoplflow/skills` installer is unchanged and remains the skills-only fallback. README documents both paths.
