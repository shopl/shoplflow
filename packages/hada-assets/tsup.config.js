import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  treeshake: 'safest',
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
});
