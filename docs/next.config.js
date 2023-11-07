// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = {
  output: '.next',

  ...withNextra({
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }),
  transpilePackages: ['@shoplflow/base', '@shoplflow/shopl-assets', '@shoplflow/hada-assets'],
};
