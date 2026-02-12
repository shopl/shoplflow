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
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("storybook-addon-code-editor"),
    {
      name: getAbsolutePath("@storybook/addon-mcp"),
      options: {
        toolsets: {
          dev: true,
          docs: false, // requires Storybook 10.1.0+
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: ['@shoplflow/shopl-assets', '@shoplflow/hada-assets'],
      },
    };
  },
};
export default config;
