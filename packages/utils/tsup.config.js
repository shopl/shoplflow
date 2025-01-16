import { defineConfig } from 'tsup';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
