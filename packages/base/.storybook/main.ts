import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true,
          docs: true,
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {
    },
  },
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        'process.env': {},
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      },
      resolve: {
        ...config.resolve,
        dedupe: ['react', 'react-dom'],
        alias: {
          ...config.resolve?.alias,
          '@storybook/blocks': require.resolve('@storybook/blocks'),
        },
      },
      plugins: [
        ...(config.plugins || []),
        {
          name: 'resolve-file-protocol',
          enforce: 'pre',
          resolveId(source) {
            if (source.startsWith('file://')) {
              return source.replace('file://', '');
            }
            return null;
          },
        },
      ],
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          onwarn(warning, warn) {
            if (warning.code === 'UNRESOLVED_IMPORT') return;
            warn(warning);
          },
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          '@shoplflow/shopl-assets',
          '@shoplflow/hada-assets',
          '@storybook/blocks',
          '@storybook/addon-docs',
        ],
      },
      server: {
        ...config.server,
        fs: {
          ...config.server?.fs,
          strict: false,
        },
      },
    };
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    experimentalComponentsManifest: true,
  },
};
export default config;
