const esbuild = require("esbuild");
const {dtsPlugin} = require("esbuild-plugin-d.ts");


const {dependencies, peerDependencies} = require('./package.json');


const externals = () => {

    if (peerDependencies && dependencies) {
        return Object.keys(dependencies).concat(Object.keys(peerDependencies));
    }
    if (peerDependencies) {
        return Object.keys(peerDependencies);
    }
    console.log(dependencies)
    if (dependencies) {
        return Object.keys(dependencies);
    }
    return [];
};


const buildConfig = {
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    treeShaking: true,
    bundle: true,
    minify: true,
    splitting: false,
    metafile: true,
    write: true,
    logLevel: 'debug',
    external: externals(),
    plugins: [dtsPlugin()]
};

const esmConfig = {
    ...buildConfig,
    platform: 'neutral', // for ESM
    format: 'esm',
    outExtension: {'.js': '.mjs'},
};

const cjsConfig = {
    ...buildConfig,
    platform: 'node', // for CJS
    format: 'cjs',
    outExtension: {'.js': '.cjs'},
};

if (process.argv.includes('--watch')) {
    esbuild.context(esmConfig).then(
        context => {
            context.watch();
        }
    ).catch(() => process.exit(1));
    esbuild.context(cjsConfig).then(
        context => {
            context.watch();
        }
    ).catch(() => process.exit(1));
} else {
    esbuild.build(esmConfig).catch(() => process.exit(1));
    esbuild.build(cjsConfig).catch(() => process.exit(1));
}

