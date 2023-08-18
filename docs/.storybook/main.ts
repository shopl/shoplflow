import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [ "../pages/**/*.(story|stories).(md|mdx)", "../stories/**/*.(story|stories).(ts|tsx)",],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // webpackFinal: async (config) => {
  //   const rules = config.module?.rules;
  //   const newRules = rules?.filter((rule) => !rule?.test?.test('.svg')) ?? [];
  //   newRules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack', 'url-loader'],
  //   });
  //   newRules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [
  //         ['react-app', { flow: false, typescript: true }],
  //         require.resolve('@emotion/babel-preset-css-prop'),
  //       ],
  //     },
  //   });
  //   newRules.push({
  //     test: /\.(png|jpe?g|gif)$/i,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: '[name].[ext]',
  //           outputPath: 'images/',
  //           publicPath: 'images/',
  //         },
  //       },
  //     ],
  //   });
  //
  //   return {
  //     ...config,
  //     module: {
  //       ...config.module,
  //       rules: newRules,
  //     },
  //   };
  // },

};
export default config;
