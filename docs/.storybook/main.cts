
module.exports = {
  stories: ["../pages/*.stories.@(js|jsx|ts|tsx)"],
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
  // @ts-ignore
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        base: {
          title: 'Composed React Storybook running in development mode',
          url: 'http://localhost:6007',
        },
      };
    }
    return {
      base: {
        title: 'Composed React Storybook running in production',
        url: 'https://shoplflow-base.vercel.app',
      },
    };
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
