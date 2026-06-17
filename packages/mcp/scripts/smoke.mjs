// Smoke test: spin up the built server over stdio with a real MCP client and exercise the tools.
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(here, '../dist/index.js');

const transport = new StdioClientTransport({ command: 'node', args: [serverPath] });
const client = new Client({ name: 'smoke', version: '0.0.0' });
await client.connect(transport);

const { tools } = await client.listTools();
console.log('tools:', tools.map((t) => t.name).join(', '));

const { resources } = await client.listResources();
console.log('resources:', resources.map((r) => r.uri).join(', '));

const typo = await client.callTool({
  name: 'list_tokens',
  arguments: { type: 'typography', domain: 'shopl' },
});
const typoParsed = JSON.parse(typo.content[0].text);
console.log(`\nlist_tokens(typography, shopl): count=${typoParsed.count}`);
console.log('  sample:', JSON.stringify(typoParsed.tokens[0]));

const prim = await client.callTool({ name: 'get_token', arguments: { name: 'primary300' } });
console.log('\nget_token(primary300):', prim.content[0].text.replace(/\s+/g, ' ').slice(0, 200));

const miss = await client.callTool({ name: 'get_token', arguments: { name: 'primaryX' } });
console.log('\nget_token(primaryX) [miss w/ suggestions]:', miss.content[0].text.replace(/\s+/g, ' '));

const iconHit = await client.callTool({ name: 'search_icon', arguments: { query: 'chat bot' } });
const iconParsed = JSON.parse(iconHit.content[0].text);
console.log(`\nsearch_icon("chat bot"): count=${iconParsed.count}`);
console.log('  top:', JSON.stringify(iconParsed.icons[0]));

const iconBrand = await client.callTool({ name: 'search_icon', arguments: { query: 'add', domain: 'hada', limit: 3 } });
console.log('\nsearch_icon("add", hada, 3):', iconBrand.content[0].text.replace(/\s+/g, ' '));

await client.close();
console.log('\n✓ smoke test passed');
