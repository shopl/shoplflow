import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.{ts,tsx,js,jsx}'],
  sourcemap: true,
  target: 'es2019',
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
});
