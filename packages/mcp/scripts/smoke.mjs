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

const compSearch = await client.callTool({ name: 'search_component', arguments: { query: 'button' } });
const compParsed = JSON.parse(compSearch.content[0].text);
console.log(`\nsearch_component("button"): count=${compParsed.count}`);
console.log('  names:', compParsed.components.map((c) => c.name).join(', '));

const compApi = await client.callTool({ name: 'get_component_api', arguments: { name: 'Button' } });
const apiParsed = JSON.parse(compApi.content[0].text);
const btn = apiParsed.component;
console.log(`\nget_component_api("Button"): poly=${btn.polymorphic} as=${btn.defaultElement} props=${btn.props.length}`);
console.log('  variants:', JSON.stringify(btn.variants));

const usage = await client.callTool({ name: 'get_usage_example', arguments: { name: 'Button' } });
const usageParsed = JSON.parse(usage.content[0].text);
console.log(`\nget_usage_example("Button"): ${usageParsed.examples.length} examples`);
console.log('  stories:', usageParsed.examples.map((e) => e.story).join(', '));
console.log('  first:', JSON.stringify(usageParsed.examples[0]).replace(/\s+/g, ' ').slice(0, 140));

const usageCompound = await client.callTool({ name: 'get_usage_example', arguments: { name: 'ModalContainer' } });
const ucParsed = JSON.parse(usageCompound.content[0].text);
console.log(`\nget_usage_example("ModalContainer") -> module "${ucParsed.group}": ${ucParsed.examples?.length} examples`);

await client.close();
console.log('\n✓ smoke test passed');
