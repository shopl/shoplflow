import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { join, dirname } from "path";

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
    "storybook-addon-code-editor",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true,
          docs: false, // requires Storybook 10.1.0+
        },
      },
    },
  ],
  
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        // MDX/addon-docs가 file:// 절대 경로로 mdx-react-shim 등을 불러올 때 Vite가 해석하도록 변환
        {
          name: "resolve-file-protocol",
          enforce: "pre",
          resolveId(source: string) {
            if (source.startsWith("file://")) {
              return source.replace("file://", "");
            }
            return null;
          },
        },
      ],
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          '@shoplflow/shopl-assets',
          '@shoplflow/hada-assets',
          '@storybook/addon-docs',
        ],
      },
    };
  },
};
export default config;
