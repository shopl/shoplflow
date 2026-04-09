import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: false,
  treeshake: 'safest',
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
});
