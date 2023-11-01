import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.{ts,tsx,js,jsx}', 'src/styles/global.css', 'src/styles/reset.css'],
  splitting: false,
  sourcemap: true,
  clean: false,
  treeshake: false,
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
});
