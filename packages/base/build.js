import esbuild from 'esbuild';

import { dtsPlugin } from 'esbuild-plugin-d.ts';

import babel from 'esbuild-plugin-babel';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(path.resolve(_dirname, './package.json'), 'utf8'));
const { peerDependencies } = packageJson;

const externals = () => {
  // console.log(dependencies);
  if (peerDependencies) {
    return Object.keys(peerDependencies);
  }
  return [];
};

const buildConfig = {
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  treeShaking: false,
  bundle: true,
  minify: false,
  splitting: false,
  metafile: true,
  write: true,
  logLevel: 'debug',
  tsconfig: '../../tsconfig.esbuild.json',
  external: externals(),
  plugins: [dtsPlugin(), babel()],
};

const esmConfig = {
  ...buildConfig,
  platform: 'node', // for ESM
  format: 'esm',
  splitting: true,
  outExtension: { '.js': '.mjs' },
};

const cjsConfig = {
  ...buildConfig,
  platform: 'node', // for CJS
  format: 'cjs',

  outExtension: { '.js': '.cjs' },
};

const cssConfig = {
  entryPoints: ['src/styles/global.css'],
  outdir: 'dist',
};

if (process.argv.includes('--watch')) {
  esbuild
    .context(esmConfig)
    .then((context) => {
      context.watch();
    })
    .catch(() => process.exit(1));
  esbuild
    .context(cjsConfig)
    .then((context) => {
      context.watch();
    })
    .catch(() => process.exit(1));
} else {
  esbuild.build(esmConfig).catch(() => process.exit(1));
  esbuild.build(cjsConfig).catch(() => process.exit(1));
  esbuild.build(cssConfig).catch(() => process.exit(1));
}
