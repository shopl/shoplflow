module.exports = {
  stories: [{
    directory: '../',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        jsxOptions: {},
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
          },
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
