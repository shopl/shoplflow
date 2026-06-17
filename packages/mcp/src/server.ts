import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import catalog from './data/tokens.generated.json';

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

const tokens = catalog.tokens as TokenRecord[];
const TOKEN_TYPES = [...new Set(tokens.map((t) => t.type))];

function asText(payload: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(payload, null, 2) }] };
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

  return server;
}
