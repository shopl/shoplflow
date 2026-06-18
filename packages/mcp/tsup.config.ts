import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  clean: true,
  // The generated token JSON is bundled inline so the published bin has no runtime file lookups.
  loader: { '.json': 'json' },
  banner: { js: '#!/usr/bin/env node' },
  dts: false,
});
