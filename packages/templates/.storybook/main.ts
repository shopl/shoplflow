import type { StorybookConfig } from "@storybook/react-vite";
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  staticDirs: [...getCodeEditorStaticDirs(__filename)],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("storybook-addon-code-editor"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {
    },
  },
  viteFinal: async (config) => {
    return {
      ...config,
      optimizeDeps: {
        include:['@shoplflow/shopl-assets', '@shoplflow/hada-assets'],
      }
    };
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
