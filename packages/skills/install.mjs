#!/usr/bin/env node
// Installer for the @shoplflow agent skills.
// Installs the bundled skills into the format used by your AI coding agent:
//   - Claude Code -> <base>/.claude/skills/<name>/SKILL.md
//   - Cursor      -> <base>/.cursor/skills/<name>/SKILL.md (native Agent Skills; --legacy-cursor-rules for .cursor/rules/*.mdc)
//   - Codex       -> <base>/.codex/skills/shoplflow/<name>.md + managed block in AGENTS.md
//
// Usage:
//   node install.mjs                       # interactive
//   node install.mjs --agent claude        # one agent, into ./ (project scope)
//   node install.mjs --agent all --scope global
//   node install.mjs --agent cursor --dir /path/to/app
//   node install.mjs --list                # list bundled skills
//
// Flags: --agent claude|codex|cursor|all  --scope project|global  --dir <path>  --legacy-cursor-rules  --yes  --list  --help
// No dependencies. Requires Node >= 16.

import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = path.join(HERE, "skills");
const AGENTS = ["claude", "codex", "cursor"];
const MARK_START = "<!-- shoplflow-skills:start -->";
const MARK_END = "<!-- shoplflow-skills:end -->";
const LOCK_FILE = "shoplflow-skills.lock.json";
const VERSION = JSON.parse(
  await readFile(path.join(HERE, "package.json"), "utf8"),
).version;

// ---------- args ----------
function parseArgs(argv) {
  const out = {
    agent: null,
    scope: null,
    dir: null,
    legacyCursorRules: false,
    yes: false,
    list: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === "--help" || a === "-h") out.help = true;
    else if (a === "--list") out.list = true;
    else if (a === "--yes" || a === "-y") out.yes = true;
    else if (a === "--legacy-cursor-rules") out.legacyCursorRules = true;
    else if (a.startsWith("--agent"))
      out.agent = a.includes("=") ? a.split("=")[1] : next();
    else if (a.startsWith("--scope"))
      out.scope = a.includes("=") ? a.split("=")[1] : next();
    else if (a.startsWith("--dir"))
      out.dir = a.includes("=") ? a.split("=")[1] : next();
  }
  return out;
}

// ---------- frontmatter ----------
function parseSkill(md) {
  const lines = md.split(/\r?\n/);
  if (lines[0] !== "---") return { name: "", description: "", body: md };
  let end = -1;
  for (let i = 1; i < lines.length; i++)
    if (lines[i] === "---") {
      end = i;
      break;
    }
  if (end === -1) return { name: "", description: "", body: md };
  const meta = {};
  for (const line of lines.slice(1, end)) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2];
  }
  return {
    name: meta.name || "",
    description: meta.description || "",
    body: lines
      .slice(end + 1)
      .join("\n")
      .replace(/^\n+/, ""),
  };
}

async function loadSkills() {
  if (!existsSync(SKILLS_DIR))
    throw new Error(`skills/ not found next to installer (${SKILLS_DIR})`);
  const entries = (await readdir(SKILLS_DIR, { withFileTypes: true })).filter(
    (e) => e.isDirectory(),
  );
  const skills = [];
  for (const e of entries) {
    const file = path.join(SKILLS_DIR, e.name, "SKILL.md");
    if (!existsSync(file)) continue;
    const raw = await readFile(file, "utf8");
    const parsed = parseSkill(raw);
    skills.push({ slug: parsed.name || e.name, raw, ...parsed });
  }
  return skills.sort((a, b) => a.slug.localeCompare(b.slug));
}

// ---------- install targets ----------
function basePath(scope, dir) {
  return scope === "global" ? os.homedir() : path.resolve(dir || process.cwd());
}

// Records the installed version so the shoplflow-skills-update skill can compare
// it against `npm view @shoplflow/skills version`. Written next to the skills;
// agents scan for SKILL.md folders and ignore this JSON file.
async function stampVersion(rootDir, written) {
  await mkdir(rootDir, { recursive: true });
  const out = path.join(rootDir, LOCK_FILE);
  const body = JSON.stringify(
    {
      name: "@shoplflow/skills",
      version: VERSION,
      installedAt: new Date().toISOString(),
    },
    null,
    2,
  );
  await writeFile(out, body + "\n", "utf8");
  written.push(out);
}

async function installClaude(skills, scope, dir, written) {
  const root = path.join(basePath(scope, dir), ".claude", "skills");
  for (const s of skills) {
    const out = path.join(root, s.slug, "SKILL.md");
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, s.raw, "utf8");
    written.push(out);
  }
  await stampVersion(root, written);
}

async function installCursor(skills, scope, dir, written, legacyRules) {
  const base = basePath(scope, dir);
  if (legacyRules) {
    // Legacy: convert each skill to a Cursor MDC rule (.cursor/rules/<name>.mdc)
    // for Cursor versions predating native Agent Skills support.
    const root = path.join(base, ".cursor", "rules");
    await mkdir(root, { recursive: true });
    for (const s of skills) {
      const out = path.join(root, `${s.slug}.mdc`);
      const mdc = `---\ndescription: ${s.description}\nglobs:\nalwaysApply: false\n---\n\n${s.body}\n`;
      await writeFile(out, mdc, "utf8");
      written.push(out);
    }
    await stampVersion(root, written);
    return;
  }
  // Native Cursor Agent Skills: .cursor/skills/<name>/SKILL.md.
  // Cursor reads the same SKILL.md standard as Claude Code, so we copy verbatim
  // (the `name:` frontmatter already matches the folder name, as Cursor requires).
  const root = path.join(base, ".cursor", "skills");
  for (const s of skills) {
    const out = path.join(root, s.slug, "SKILL.md");
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, s.raw, "utf8");
    written.push(out);
  }
  await stampVersion(root, written);

  // Migrate: an older installer wrote these skills as .cursor/rules/<slug>.mdc.
  // Remove only our own slugs (and our stale lock) so re-running doesn't duplicate.
  const legacyDir = path.join(base, ".cursor", "rules");
  const migrated = [];
  for (const s of skills) {
    const legacy = path.join(legacyDir, `${s.slug}.mdc`);
    if (existsSync(legacy)) {
      await rm(legacy);
      migrated.push(legacy);
    }
  }
  const legacyLock = path.join(legacyDir, LOCK_FILE);
  if (existsSync(legacyLock)) await rm(legacyLock);
  if (migrated.length) {
    console.log(
      `\nCursor: migrated ${migrated.length} legacy rule(s) from .cursor/rules/ to .cursor/skills/ (old files removed):`,
    );
    for (const m of migrated) console.log(`  - ${m}`);
  }
}

async function installCodex(skills, scope, dir, written) {
  const root = basePath(scope, dir);
  const skillsDir =
    scope === "global"
      ? path.join(root, ".codex", "skills", "shoplflow")
      : path.join(root, ".codex", "skills", "shoplflow");
  const agentsMd =
    scope === "global"
      ? path.join(root, ".codex", "AGENTS.md")
      : path.join(root, "AGENTS.md");

  await mkdir(skillsDir, { recursive: true });
  const refs = [];
  for (const s of skills) {
    const out = path.join(skillsDir, `${s.slug}.md`);
    const content = `# ${s.slug}\n\n> ${s.description}\n\n${s.body}\n`;
    await writeFile(out, content, "utf8");
    written.push(out);
    const rel = path
      .relative(path.dirname(agentsMd), out)
      .split(path.sep)
      .join("/");
    refs.push(`- [${s.slug}](${rel}) — ${s.description.split(".")[0]}.`);
  }

  const block = [
    MARK_START,
    "## @shoplflow design system",
    "",
    `> Installed @shoplflow/skills version: ${VERSION}`,
    "",
    "When the task involves `@shoplflow/*` packages (base components, design tokens, theming, icons, utils hooks), read the relevant guide below before answering:",
    "",
    ...refs,
    MARK_END,
  ].join("\n");

  let existing = existsSync(agentsMd) ? await readFile(agentsMd, "utf8") : "";
  if (existing.includes(MARK_START) && existing.includes(MARK_END)) {
    existing = existing.replace(
      new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`),
      block,
    );
  } else {
    existing =
      (existing.trim() ? existing.trimEnd() + "\n\n" : "") + block + "\n";
  }
  await mkdir(path.dirname(agentsMd), { recursive: true });
  await writeFile(agentsMd, existing, "utf8");
  written.push(agentsMd);
}

const INSTALLERS = {
  claude: installClaude,
  cursor: installCursor,
  codex: installCodex,
};

// ---------- interactive ----------
function ask(rl, q) {
  return new Promise((res) => rl.question(q, (a) => res(a.trim())));
}

async function interactive(args, skills) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    console.log(`\n@shoplflow skills installer — ${skills.length} skills:`);
    for (const s of skills) console.log(`  • ${s.slug}`);

    let agent = args.agent;
    if (!agent) {
      console.log("\nWhich agent CLI do you use?");
      console.log("  1) claude   (Claude Code  -> .claude/skills/)");
      console.log("  2) codex    (OpenAI Codex -> AGENTS.md + .codex/skills/)");
      console.log("  3) cursor   (Cursor       -> .cursor/skills/)");
      console.log("  4) all");
      const pick = await ask(rl, "Select [1-4]: ");
      agent =
        { 1: "claude", 2: "codex", 3: "cursor", 4: "all" }[pick] || "claude";
    }

    let scope = args.scope;
    if (!scope) {
      const s = await ask(
        rl,
        "Install into [p]roject (current dir) or [g]lobal (home)? [p]: ",
      );
      scope = s.toLowerCase().startsWith("g") ? "global" : "project";
    }

    let dir = args.dir;
    if (!dir && scope === "project") {
      const d = await ask(rl, `Project directory [${process.cwd()}]: `);
      dir = d || process.cwd();
    }
    return { agent, scope, dir };
  } finally {
    rl.close();
  }
}

// ---------- main ----------
async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(`@shoplflow skills installer

  node install.mjs                         interactive
  node install.mjs --agent claude          install for Claude Code into ./
  node install.mjs --agent all --scope global
  node install.mjs --agent cursor --dir /path/to/app
  node install.mjs --list

Flags:
  --agent claude|codex|cursor|all
  --scope project|global        (default: project)
  --dir <path>                  (project scope target; default: cwd)
  --legacy-cursor-rules         Cursor: write .cursor/rules/*.mdc instead of .cursor/skills/
  --yes, -y                     skip confirmation
  --list                        list bundled skills and exit`);
    return;
  }

  const skills = await loadSkills();

  if (args.list) {
    console.log(`Bundled @shoplflow skills (${skills.length}):`);
    for (const s of skills) console.log(`\n  ${s.slug}\n    ${s.description}`);
    return;
  }

  let agent = args.agent;
  let scope = args.scope;
  let dir = args.dir;

  // interactive only when something is missing and we have a TTY
  const needPrompt = (!agent || !scope) && process.stdin.isTTY;
  if (needPrompt) ({ agent, scope, dir } = await interactive(args, skills));
  agent = (agent || "claude").toLowerCase();
  scope = (scope || "project").toLowerCase();

  const targets = agent === "all" ? AGENTS : [agent];
  for (const t of targets) {
    if (!INSTALLERS[t]) {
      console.error(`Unknown agent "${t}". Use: ${AGENTS.join(", ")}, or all.`);
      process.exitCode = 1;
      return;
    }
  }

  const base = basePath(scope, dir);
  if (!args.yes && process.stdin.isTTY) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const ok = await ask(
      rl,
      `\nInstall ${skills.length} skills for [${targets.join(", ")}] (${scope}) under ${base}? [Y/n]: `,
    );
    rl.close();
    if (ok && ok.toLowerCase().startsWith("n")) {
      console.log("Cancelled.");
      return;
    }
  }

  const written = [];
  for (const t of targets)
    await INSTALLERS[t](skills, scope, dir, written, args.legacyCursorRules);

  console.log(
    `\n✓ Installed ${skills.length} skills for ${targets.join(", ")} (${scope}). Files written:`,
  );
  for (const f of written) console.log(`  ${f}`);
  if (targets.includes("codex")) {
    console.log(
      '\nCodex: a managed "@shoplflow design system" block was added to AGENTS.md pointing at the skill files.',
    );
  }
  if (targets.includes("cursor")) {
    console.log(
      args.legacyCursorRules
        ? "\nCursor (legacy): wrote .cursor/rules/*.mdc as Agent-Requested rules."
        : "\nCursor: installed native Agent Skills under .cursor/skills/ (SKILL.md standard). Cursor loads them by description on relevant tasks.",
    );
  }
}

main().catch((e) => {
  console.error("Install failed:", e.message);
  process.exitCode = 1;
});
