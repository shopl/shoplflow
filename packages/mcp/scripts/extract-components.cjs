/**
 * Phase 3 builder: extract a component API card for each exported `*Props` type in
 * packages/base/src/components, via ts-morph AST reading (no type-checking, so it's fast and robust).
 *
 * The library composes props from a small set of documented mixins (utils/type/ComponentProps.ts) plus
 * local `*OptionProps` building blocks, so we:
 *   1. parse the mixin file once into a registry (interface name -> its props + JSDoc)
 *   2. for each `*Props`, expand its intersection / heritage, pulling props from the registry,
 *      from local building blocks (recursively), and from inline literals
 *   3. link `SizeVariantProps<T>` / `StyleVariantProps<T>` / `IconSizeVariantProps<T>` to the
 *      `as const` enum that feeds them, so we surface the exact allowed variant values
 *   4. flag polymorphism (`PolymorphicComponentProps` / `as`) and native-HTML-attr passthrough
 *
 * Heritage handling is unified in `expandRef()` so interface `extends` and type-alias intersections
 * resolve mixins/variants/locals identically.
 */
const path = require("path");
const { Project, Node } = require("ts-morph");

const BASE_SRC = path.resolve(__dirname, "../../base/src");
const MIXIN_FILE = path.join(BASE_SRC, "utils/type/ComponentProps.ts");

const MAX_TYPE_LEN = 80;

// Mixins that map a generic type arg to a variant prop.
const VARIANT_MIXINS = {
  SizeVariantProps: "sizeVar",
  StyleVariantProps: "styleVar",
  IconSizeVariantProps: "iconSizeVar",
};
// Type references that mean "accepts the native HTML attributes of element X" — not enumerated.
const NATIVE_ATTR_REFS = new Set([
  "HTMLAttributes",
  "HTMLPropsWithoutRef",
  "ComponentPropsWithoutRef",
  "ComponentPropsWithRef",
  "ButtonHTMLAttributes",
  "InputHTMLAttributes",
  "AnchorHTMLAttributes",
  "TextareaHTMLAttributes",
]);
const POLYMORPHIC_REFS = new Set([
  "PolymorphicComponentProps",
  "RenderConfigProps",
  "AsProp",
]);

function jsdoc(node) {
  if (!node.getJsDocs) return "";
  const docs = node.getJsDocs();
  if (!docs.length) return "";
  return docs[docs.length - 1].getDescription().trim().replace(/\s+/g, " ");
}

function shortType(text) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > MAX_TYPE_LEN ? t.slice(0, MAX_TYPE_LEN - 1) + "…" : t;
}

function readPropertySignature(prop) {
  return {
    name: prop.getName(),
    optional: prop.hasQuestionToken(),
    type: shortType(prop.getTypeNode()?.getText() ?? "unknown"),
    description: jsdoc(prop) || undefined,
  };
}

/** Read an `as const` object literal's string-literal values. */
function readConstEnum(decl) {
  let init = decl.getInitializer();
  // `{ ... } as const` is an AsExpression wrapping the object literal — unwrap it.
  if (init && Node.isAsExpression(init)) init = init.getExpression();
  if (!init || !Node.isObjectLiteralExpression(init)) return null;
  const values = [];
  for (const p of init.getProperties()) {
    if (Node.isPropertyAssignment(p)) {
      values.push(
        p
          .getInitializer()
          .getText()
          .replace(/^['"`]|['"`]$/g, ""),
      );
    }
  }
  return values.length ? values : null;
}

/** Resolve a variant type arg (e.g. `SwitchSizeVariantType`) to the `as const` enum values feeding it. */
function resolveVariantValues(typeArgNode, ctx) {
  if (!typeArgNode) return null;
  let node = typeArgNode;
  const refName = Node.isTypeReference(node)
    ? node.getTypeName().getText()
    : null;
  if (refName && ctx.aliases.has(refName)) {
    node = ctx.aliases.get(refName).getTypeNode() ?? node;
  }
  const m = node.getText().match(/typeof\s+([A-Za-z0-9_]+)/);
  if (!m) return null;
  const enumDecl = ctx.consts.get(m[1]);
  return enumDecl ? enumDecl.values : null;
}

/** The single dispatcher for a referenced type name (used by both `extends` and `&`). */
function expandRef(name, args, ctx, out, seen) {
  if (VARIANT_MIXINS[name]) {
    const prop = VARIANT_MIXINS[name];
    const values = resolveVariantValues(args[0], ctx);
    if (values) out.variants.push({ prop, values });
    for (const p of ctx.registry[name] ?? []) out.props.push(p);
    return;
  }
  if (POLYMORPHIC_REFS.has(name)) {
    out.polymorphic = true;
    if (name === "PolymorphicComponentProps" && args[1])
      expandTypeNode(args[1], ctx, out, seen);
    return;
  }
  if (NATIVE_ATTR_REFS.has(name)) {
    out.nativeAttrs = true;
    if (args[0]) out.nativeAttrsOf = shortType(args[0].getText());
    return;
  }
  if (name === "Omit" && args[0]) {
    expandTypeNode(args[0], ctx, out, seen);
    return;
  }
  if (ctx.registry[name]) {
    for (const p of ctx.registry[name]) out.props.push(p);
    return;
  }
  if (ctx.localIfaces.has(name) && !seen.has(name)) {
    seen.add(name);
    expandInterface(ctx.localIfaces.get(name), ctx, out, seen);
    return;
  }
  if (ctx.aliases.has(name) && !seen.has(name)) {
    seen.add(name);
    expandTypeNode(ctx.aliases.get(name).getTypeNode(), ctx, out, seen);
  }
}

/** Expand an interface: own property signatures + heritage clauses. */
function expandInterface(iface, ctx, out, seen) {
  for (const p of iface.getProperties())
    out.props.push(readPropertySignature(p));
  for (const ext of iface.getExtends()) {
    expandRef(
      ext.getExpression().getText(),
      ext.getTypeArguments(),
      ctx,
      out,
      seen,
    );
  }
}

/** Expand a type node (intersection / type literal / type reference). */
function expandTypeNode(node, ctx, out, seen) {
  if (!node) return;
  if (Node.isIntersectionTypeNode(node)) {
    for (const n of node.getTypeNodes()) expandTypeNode(n, ctx, out, seen);
    return;
  }
  if (Node.isTypeLiteral(node)) {
    for (const p of node.getProperties())
      out.props.push(readPropertySignature(p));
    return;
  }
  if (Node.isTypeReference(node)) {
    expandRef(
      node.getTypeName().getText(),
      node.getTypeArguments(),
      ctx,
      out,
      seen,
    );
  }
}

/** Read an interface's members within the mixin file (own props + same-file heritage). */
function readMixinMembers(iface, ifaces, seen) {
  const props = [];
  for (const p of iface.getProperties()) props.push(readPropertySignature(p));
  for (const ext of iface.getExtends()) {
    const name = ext.getExpression().getText();
    if (ifaces.has(name) && !seen.has(name)) {
      seen.add(name);
      props.push(...readMixinMembers(ifaces.get(name), ifaces, seen));
    }
  }
  return props;
}

function buildMixinRegistry(project) {
  const file = project.addSourceFileAtPath(MIXIN_FILE);
  const ifaces = new Map(file.getInterfaces().map((i) => [i.getName(), i]));
  const registry = {};
  for (const [name, iface] of ifaces) {
    registry[name] = readMixinMembers(iface, ifaces, new Set([name]));
  }
  return registry;
}

/** Build the API card for one exported `*Props` declaration (interface or type alias). */
function extractCard(decl, ctx, group) {
  const name = decl.getName().replace(/Props$/, "");
  const out = {
    props: [],
    variants: [],
    polymorphic: false,
    nativeAttrs: false,
  };
  const seen = new Set([decl.getName()]);

  if (Node.isInterfaceDeclaration(decl)) {
    expandInterface(decl, ctx, out, seen);
  } else {
    const tp = decl.getTypeParameters?.()[0];
    if (tp && tp.getDefault())
      out.defaultElement = tp
        .getDefault()
        .getText()
        .replace(/^['"`]|['"`]$/g, "");
    expandTypeNode(decl.getTypeNode(), ctx, out, seen);
  }

  // An explicit `as` prop also means polymorphic; it's represented by the flag, so drop it.
  const byName = new Map();
  for (const p of out.props) {
    if (p.name === "as") {
      out.polymorphic = true;
      continue;
    }
    byName.set(p.name, p);
  }
  const props = [...byName.values()].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const variantsByProp = new Map();
  for (const v of out.variants) variantsByProp.set(v.prop, v);

  // A bare generic element type (e.g. "T") is clearer shown as the default element.
  let nativeOf = out.nativeAttrsOf;
  if (nativeOf && /^[A-Z]$/.test(nativeOf))
    nativeOf = out.defaultElement ?? null;

  return {
    name,
    group,
    importFrom: "@shoplflow/base",
    polymorphic: out.polymorphic,
    ...(out.defaultElement ? { defaultElement: out.defaultElement } : {}),
    ...(out.nativeAttrs ? { nativeAttrs: nativeOf ?? true } : {}),
    variants: [...variantsByProp.values()],
    props,
  };
}

function isEmittableProps(name) {
  return (
    /Props$/.test(name) && !/OptionProps$|GenericProps$|StyledProps$/.test(name)
  );
}

function buildComponents() {
  const project = new Project({ skipAddingFilesFromTsConfig: true });
  const registry = buildMixinRegistry(project);
  const files = project.addSourceFilesAtPaths(
    path.join(BASE_SRC, "components/**/*.types.ts"),
  );

  const components = [];
  for (const file of files) {
    const group = path.basename(file.getFilePath()).replace(/\.types\.ts$/, "");

    const localIfaces = new Map(
      file.getInterfaces().map((i) => [i.getName(), i]),
    );
    const aliases = new Map(file.getTypeAliases().map((a) => [a.getName(), a]));
    const consts = new Map();
    for (const v of file.getVariableDeclarations()) {
      const values = readConstEnum(v);
      if (values) consts.set(v.getName(), { values });
    }
    const ctx = { registry, localIfaces, aliases, consts };

    const decls = [
      ...file
        .getInterfaces()
        .filter((i) => i.isExported() && isEmittableProps(i.getName())),
      ...file
        .getTypeAliases()
        .filter((a) => a.isExported() && isEmittableProps(a.getName())),
    ];
    for (const decl of decls) {
      try {
        components.push(extractCard(decl, ctx, group));
      } catch (err) {
        console.warn(
          `  ! skipped ${decl.getName()} in ${group}: ${err.message}`,
        );
      }
    }
  }

  components.sort((a, b) => a.name.localeCompare(b.name));
  return components;
}

module.exports = { buildComponents };
