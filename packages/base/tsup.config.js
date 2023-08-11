import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.{ts,tsx,js,jsx}'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
});
