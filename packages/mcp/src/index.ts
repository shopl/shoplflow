import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';

async function main() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // stdio transport keeps the process alive; logs must go to stderr to avoid corrupting the protocol on stdout.
  console.error('[shoplflow-mcp] ready (stdio)');
}

main().catch((err) => {
  console.error('[shoplflow-mcp] fatal:', err);
  process.exit(1);
});
