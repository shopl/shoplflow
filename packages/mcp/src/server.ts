import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import catalog from './data/tokens.generated.json';
import iconCatalog from './data/icons.generated.json';
import componentCatalog from './data/components.generated.json';
import storyCatalog from './data/stories.generated.json';
import setup from './data/setup.generated.json';

export type TokenDomain = 'shared' | 'shopl' | 'hada';

export interface TokenRecord {
  name: string;
  type: string;
  domain: TokenDomain;
  path: string;
  value: unknown;
  cssVar: string | null;
  className: string | null;
}

export interface IconRecord {
  name: string;
  alias: string;
  domain: 'shopl' | 'hada';
  importFrom: string;
  keywords: string[];
}

export interface ComponentProp {
  name: string;
  optional: boolean;
  type: string;
  description?: string;
}

export interface ComponentCard {
  name: string;
  group: string;
  importFrom: string;
  polymorphic: boolean;
  defaultElement?: string;
  nativeAttrs?: string | boolean;
  variants: Array<{ prop: string; values: string[] }>;
  props: ComponentProp[];
}

export interface UsageExample {
  story: string;
  args?: string;
  code?: string;
}

export interface StoryModule {
  name: string;
  group: string;
  title?: string;
  importFrom: string;
  examples: UsageExample[];
}

const tokens = catalog.tokens as TokenRecord[];
const TOKEN_TYPES = [...new Set(tokens.map((t) => t.type))];
const icons = iconCatalog.icons as IconRecord[];
const components = componentCatalog.components as ComponentCard[];
const storyModules = storyCatalog.modules as StoryModule[];

function asText(payload: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(payload, null, 2) }] };
}

/** Score one query term against an icon: exact name/alias > keyword > substring. 0 = no match. */
function scoreTerm(icon: IconRecord, term: string): number {
  const name = icon.name.toLowerCase();
  const alias = icon.alias.toLowerCase();
  if (name === term || alias === term) return 100;
  if (icon.keywords.includes(term)) return 80;
  if (name.includes(term) || alias.includes(term)) return 60;
  if (icon.keywords.some((k) => k.includes(term))) return 40;
  return 0;
}

/** All query terms must contribute, so multi-word queries narrow rather than broaden. */
function scoreIcon(icon: IconRecord, terms: string[]): number {
  let total = 0;
  for (const term of terms) {
    const s = scoreTerm(icon, term);
    if (s === 0) return 0;
    total += s;
  }
  return total;
}

/** Trimmed view for list results — full detail comes from `get_token`. */
function summarize(t: TokenRecord) {
  return { name: t.name, type: t.type, domain: t.domain, value: t.value, cssVar: t.cssVar, className: t.className };
}

export function createServer(): McpServer {
  // `instructions` is surfaced by the client at connect time — an always-on preflight rule so the
  // agent never skips the mandatory Provider/global-CSS setup or the Next.js client-only constraint.
  const server = new McpServer({ name: '@shoplflow/mcp', version: '0.0.0' }, { instructions: setup.instructions });

  // Whole catalog as a resource, for clients that prefer reading over tool calls.
  server.registerResource(
    'tokens',
    'shoplflow://tokens',
    {
      title: 'shoplflow design tokens',
      description:
        'Full design-token catalog (colors, spacing, border-radius, font-weights, typography, shadows) across the shared, shopl, and hada domains.',
      mimeType: 'application/json',
    },
    (uri) => ({
      contents: [{ uri: uri.href, mimeType: 'application/json', text: JSON.stringify(catalog, null, 2) }],
    }),
  );

  server.registerTool(
    'list_tokens',
    {
      title: 'List design tokens',
      description: [
        'List shoplflow design tokens. Use this to discover exact token names/values before writing UI code.',
        `Types: ${TOKEN_TYPES.join(', ')}.`,
        'Domains: shared (palette/spacing/radius/weights/shadows, brand-agnostic), shopl & hada (typography + primary/semantic colors).',
        'Typography tokens (e.g. body1_700) are applied via the `typography` prop or as a CSS class, not a CSS variable.',
      ].join(' '),
      inputSchema: {
        domain: z.enum(['shared', 'shopl', 'hada']).optional().describe('Filter by brand domain.'),
        type: z
          .string()
          .optional()
          .describe(`Filter by token type, one of: ${TOKEN_TYPES.join(', ')}.`),
        query: z.string().optional().describe('Case-insensitive substring match against token name or value.'),
      },
    },
    ({ domain, type, query }) => {
      const q = query?.toLowerCase();
      const results = tokens.filter((t) => {
        if (domain && t.domain !== domain) return false;
        if (type && t.type !== type) return false;
        if (q) {
          const hay = `${t.name} ${typeof t.value === 'string' ? t.value : JSON.stringify(t.value)}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      return asText({ count: results.length, tokens: results.map(summarize) });
    },
  );

  server.registerTool(
    'get_token',
    {
      title: 'Get a design token',
      description:
        'Get the full record for a token by exact name (e.g. "primary300", "body1_700", "spacing08"). A token name can exist in more than one domain; pass `domain` to disambiguate.',
      inputSchema: {
        name: z.string().describe('Exact token name.'),
        domain: z.enum(['shared', 'shopl', 'hada']).optional().describe('Disambiguate when the name spans domains.'),
      },
    },
    ({ name, domain }) => {
      const matches = tokens.filter((t) => t.name === name && (!domain || t.domain === domain));
      if (matches.length === 0) {
        const near = tokens
          .filter((t) => t.name.toLowerCase().includes(name.toLowerCase()))
          .slice(0, 8)
          .map((t) => `${t.name} (${t.domain})`);
        return asText({ found: false, name, suggestions: near });
      }
      return asText({ found: true, matches });
    },
  );

  server.registerTool(
    'search_icon',
    {
      title: 'Search icons',
      description: [
        'Find shoplflow icons by name or meaning before importing one. Returns both the raw name (e.g. IcAdd)',
        'and the public alias (e.g. AddIcon) — both are importable from the brand asset package and usable as',
        '`<Icon iconSource={AddIcon} />`. Icon sets differ per brand, so pass `domain` when targeting one.',
      ].join(' '),
      inputSchema: {
        query: z.string().describe('Name or keywords, e.g. "add", "chat bot", "calendar".'),
        domain: z.enum(['shopl', 'hada']).optional().describe('Restrict to one brand icon set.'),
        limit: z.number().int().positive().max(50).optional().describe('Max results (default 15).'),
      },
    },
    ({ query, domain, limit }) => {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const ranked = icons
        .filter((i) => !domain || i.domain === domain)
        .map((i) => ({ icon: i, score: scoreIcon(i, terms) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit ?? 15);
      return asText({
        query,
        count: ranked.length,
        icons: ranked.map(({ icon }) => ({
          name: icon.name,
          alias: icon.alias,
          domain: icon.domain,
          importFrom: icon.importFrom,
        })),
      });
    },
  );

  // Compact index of every component, for "what components exist" reading.
  server.registerResource(
    'components',
    'shoplflow://components',
    {
      title: 'shoplflow components',
      description: 'Index of all @shoplflow/base components with their module, variants, and polymorphism.',
      mimeType: 'application/json',
    },
    (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(
            components.map((c) => ({
              name: c.name,
              group: c.group,
              polymorphic: c.polymorphic,
              variants: c.variants.map((v) => v.prop),
            })),
            null,
            2,
          ),
        },
      ],
    }),
  );

  server.registerTool(
    'search_component',
    {
      title: 'Search components',
      description:
        'Discover @shoplflow/base components by name, module, prop, or variant value. Returns summaries; ' +
        'follow up with get_component_api for the full prop list. Compound components are listed per part ' +
        '(e.g. ModalContainer, ModalHeader).',
      inputSchema: {
        query: z.string().describe('e.g. "button", "modal", "date", "styleVar", "loading".'),
        group: z.string().optional().describe('Restrict to one module (the component folder, e.g. "Modal").'),
        limit: z.number().int().positive().max(50).optional().describe('Max results (default 20).'),
      },
    },
    ({ query, group, limit }) => {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const scoreComponent = (c: ComponentCard): number => {
        const name = c.name.toLowerCase();
        const grp = c.group.toLowerCase();
        const propNames = c.props.map((p) => p.name.toLowerCase());
        const variantValues = c.variants.flatMap((v) => [
          v.prop.toLowerCase(),
          ...v.values.map((x) => x.toLowerCase()),
        ]);
        let total = 0;
        for (const term of terms) {
          let best = 0;
          if (name === term) best = 100;
          else if (name.includes(term)) best = 60;
          else if (grp.includes(term)) best = 40;
          else if (propNames.includes(term)) best = 30;
          else if (variantValues.includes(term)) best = 20;
          if (best === 0) return 0;
          total += best;
        }
        return total;
      };
      const ranked = components
        .filter((c) => !group || c.group.toLowerCase() === group.toLowerCase())
        .map((c) => ({ c, score: scoreComponent(c) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit ?? 20);
      return asText({
        query,
        count: ranked.length,
        components: ranked.map(({ c }) => ({
          name: c.name,
          group: c.group,
          polymorphic: c.polymorphic,
          variants: c.variants.map((v) => ({ prop: v.prop, values: v.values })),
          propCount: c.props.length,
        })),
      });
    },
  );

  server.registerTool(
    'get_component_api',
    {
      title: 'Get a component API',
      description:
        'Full API for a @shoplflow/base component by exact name (case-insensitive), e.g. "Button", "ModalContainer". ' +
        'Returns props (with JSDoc + optionality), exact variant values, polymorphism (`as` + default element), and ' +
        'whether it forwards native HTML attributes.',
      inputSchema: {
        name: z.string().describe('Exact component name, e.g. "Button" or "Tab".'),
      },
    },
    ({ name }) => {
      const card = components.find((c) => c.name.toLowerCase() === name.toLowerCase());
      if (!card) {
        const suggestions = components
          .filter((c) => c.name.toLowerCase().includes(name.toLowerCase()))
          .slice(0, 8)
          .map((c) => c.name);
        return asText({ found: false, name, suggestions });
      }
      return asText({ found: true, component: card });
    },
  );

  server.registerTool(
    'get_usage_example',
    {
      title: 'Get component usage examples',
      description:
        'Real, copy-pasteable usage examples for a @shoplflow/base component, extracted from its stories ' +
        '(args + JSX, with test/play code stripped). Accepts a module name (e.g. "Button", "Modal") or a ' +
        'component name from get_component_api (e.g. "ModalContainer" resolves to the Modal stories).',
      inputSchema: {
        name: z.string().describe('Component or module name, e.g. "Button", "Tag", "Modal".'),
      },
    },
    ({ name }) => {
      const key = name.toLowerCase();
      let mod = storyModules.find((m) => m.group.toLowerCase() === key || m.name.toLowerCase() === key);
      if (!mod) {
        // Fall back to the module that owns a matching component card (compound parts share a module).
        const card = components.find((c) => c.name.toLowerCase() === key);
        if (card) mod = storyModules.find((m) => m.group.toLowerCase() === card.group.toLowerCase());
      }
      if (!mod) {
        const suggestions = storyModules
          .filter((m) => m.group.toLowerCase().includes(key))
          .slice(0, 8)
          .map((m) => m.group);
        return asText({ found: false, name, suggestions });
      }
      return asText({
        found: true,
        component: mod.name,
        group: mod.group,
        title: mod.title,
        examples: mod.examples,
      });
    },
  );

  server.registerTool(
    'get_setup_guide',
    {
      title: 'Get shoplflow setup guide',
      description:
        'The prerequisite setup before using any @shoplflow/base component: required global-style import, ' +
        'the mandatory ShoplflowProvider wrapper (with its domain prop), peer dependencies, and a ' +
        'ready-to-paste snippet. Call this before scaffolding a project. For framework-specific constraints ' +
        '(Next.js, Vite, …) call check_environment.',
      inputSchema: {},
    },
    () =>
      asText({
        provider: setup.provider,
        styles: setup.styles,
        peerDependencies: setup.peerDependencies,
        setupSteps: setup.setupSteps,
        snippet: setup.snippet,
      }),
  );

  server.registerTool(
    'check_environment',
    {
      title: 'Check framework support',
      description:
        'Whether and how shoplflow works in a given framework (e.g. "Next.js App Router", "Vite", "Next Pages"). ' +
        'Returns support status, constraints, and any workaround. shoplflow components are client-only, so SSR/RSC ' +
        'frameworks have caveats. Omit `framework` to list every environment.',
      inputSchema: {
        framework: z.string().optional().describe('Target framework, e.g. "next app router", "vite", "next pages".'),
      },
    },
    ({ framework }) => {
      const q = (framework ?? '').toLowerCase().trim();
      if (!q) return asText({ environments: setup.environments });
      const terms = q.split(/\s+/).filter(Boolean);
      const matches = setup.environments.filter((e) => {
        const hay = e.framework.toLowerCase();
        return terms.some((t) => hay.includes(t)) || hay.split(/[^a-z]+/).some((w) => w.length > 2 && q.includes(w));
      });
      return matches.length
        ? asText({ framework, matches })
        : asText({
            framework,
            note: 'No specific match; returning all environments.',
            environments: setup.environments,
          });
    },
  );

  return server;
}
