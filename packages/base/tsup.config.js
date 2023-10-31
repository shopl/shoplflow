import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.{ts,tsx,js,jsx}', 'src/styles/global.css'],
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  format: ['esm'],
  dts: true,
  external: ['react'],
});
