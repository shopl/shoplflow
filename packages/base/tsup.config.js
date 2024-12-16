import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/styles/global.css', 'src/styles/reset.css'],
  splitting: true,
  sourcemap: true,
  treeshake: 'safest',
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
  css: true,
});
