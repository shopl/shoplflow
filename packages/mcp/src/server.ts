import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import catalog from './data/tokens.generated.json';
import iconCatalog from './data/icons.generated.json';

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

const tokens = catalog.tokens as TokenRecord[];
const TOKEN_TYPES = [...new Set(tokens.map((t) => t.type))];
const icons = iconCatalog.icons as IconRecord[];

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
  const server = new McpServer({ name: '@shoplflow/mcp', version: '0.0.0' });

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

  return server;
}
