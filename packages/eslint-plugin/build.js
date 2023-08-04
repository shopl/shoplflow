/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');

// CommonJS 빌드
esbuild
  .build({
    entryPoints: ['./index.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/index.cjs',
    format: 'cjs',
  })
  .catch(() => process.exit(1));

// ECMAScript 모듈 빌드
esbuild
  .build({
    entryPoints: ['./index.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/index.mjs',
    format: 'esm',
  })
  .catch(() => process.exit(1));

// 일반 JavaScript 빌드
esbuild
  .build({
    entryPoints: ['./index.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/index.js',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['./.eslintrc.base.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/.eslintrc.base.js',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['./.eslintrc.react.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/.eslintrc.react.js',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['./.eslintrc.typescript.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/.eslintrc.typescript.js',
  })
  .catch(() => process.exit(1));
