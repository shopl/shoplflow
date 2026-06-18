/**
 * Phase 4 builder: extract real usage examples from each `*.stories.tsx`, via ts-morph.
 *
 * Stories are the best source of copy-pasteable usage. We pull the high-signal parts and drop the
 * test noise:
 *   - `args`   — a realistic prop/value combination
 *   - `render` — the JSX (CSF3 StoryObj) or the story function body (CSF2 StoryFn)
 *   - `play`, `parameters`, `argTypes` are skipped (test interactions / Storybook config)
 *
 * Examples are keyed by the story file's module (folder basename), matching component-card `group`,
 * plus the `component` identifier from `meta` for cross-referencing.
 */
const path = require("path");
const { Project, Node } = require("ts-morph");

const BASE_SRC = path.resolve(__dirname, "../../base/src");
const MAX_CODE_LEN = 1200;
const MAX_ARGS_LEN = 600;
const MAX_EXAMPLES = 8;

function clip(text, max) {
  const t = text.trim();
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

/** Strip `satisfies T` / `as T` / parentheses wrappers to reach the real expression. */
function unwrap(node) {
  while (
    node &&
    (Node.isSatisfiesExpression(node) ||
      Node.isAsExpression(node) ||
      Node.isParenthesizedExpression(node))
  ) {
    node = node.getExpression();
  }
  return node;
}

/** Read the JSX/expression a story function returns (arrow or function expression). */
function readFunctionBody(fn) {
  const body = fn.getBody?.();
  if (!body) return null;
  if (Node.isBlock(body)) {
    const ret = body.getStatements().find((s) => Node.isReturnStatement(s));
    const expr = ret?.getExpression();
    return expr ? clip(unwrap(expr).getText(), MAX_CODE_LEN) : null;
  }
  return clip(unwrap(body).getText(), MAX_CODE_LEN);
}

/** Pull `{ name, args?, code? }` from one story's initializer. */
function readStory(name, initializer) {
  const init = unwrap(initializer);
  if (!init) return null;

  if (Node.isObjectLiteralExpression(init)) {
    const out = { story: name };
    const argsProp = init.getProperty("args");
    if (argsProp && Node.isPropertyAssignment(argsProp)) {
      out.args = clip(argsProp.getInitializer().getText(), MAX_ARGS_LEN);
    }
    const renderProp = init.getProperty("render");
    if (renderProp && Node.isPropertyAssignment(renderProp)) {
      const fn = unwrap(renderProp.getInitializer());
      if (Node.isArrowFunction(fn) || Node.isFunctionExpression(fn))
        out.code = readFunctionBody(fn);
    }
    return out.args || out.code ? out : null;
  }

  if (Node.isArrowFunction(init) || Node.isFunctionExpression(init)) {
    const code = readFunctionBody(init);
    return code ? { story: name, code } : null;
  }

  return null;
}

/** Read `title` and `component` from the `meta` object. */
function readMeta(metaDecl) {
  const result = { title: null, component: null };
  if (!metaDecl) return result;
  const obj = unwrap(metaDecl.getInitializer());
  if (!obj || !Node.isObjectLiteralExpression(obj)) return result;
  const title = obj.getProperty("title");
  if (title && Node.isPropertyAssignment(title)) {
    result.title = title
      .getInitializer()
      .getText()
      .replace(/^['"`]|['"`]$/g, "");
  }
  const component = obj.getProperty("component");
  if (component && Node.isPropertyAssignment(component)) {
    result.component = component.getInitializer().getText();
  }
  return result;
}

function buildStories() {
  const project = new Project({ skipAddingFilesFromTsConfig: true });
  const files = project.addSourceFilesAtPaths(
    path.join(BASE_SRC, "components/**/*.stories.tsx"),
  );

  const modules = [];
  for (const file of files) {
    const group = path
      .basename(file.getFilePath())
      .replace(/\.stories\.tsx$/, "");
    const meta = readMeta(file.getVariableDeclaration("meta"));

    const examples = [];
    for (const decl of file.getVariableDeclarations()) {
      if (!decl.isExported() || decl.getName() === "meta") continue;
      if (examples.length >= MAX_EXAMPLES) break;
      try {
        const ex = readStory(decl.getName(), decl.getInitializer());
        if (ex) examples.push(ex);
      } catch {
        /* skip unparseable story */
      }
    }

    if (examples.length) {
      modules.push({
        name: meta.component ?? group,
        group,
        title: meta.title ?? undefined,
        importFrom: "@shoplflow/base",
        examples,
      });
    }
  }

  modules.sort((a, b) => a.group.localeCompare(b.group));
  return modules;
}

module.exports = { buildStories };
