// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  reactStrictMode: true,
  distDir: 'build',

  webpack(config) {
    const allowedSvgRegex = /icons\/.+\.svg$/;

    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test('.svg'));
    fileLoaderRule.exclude = allowedSvgRegex;

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
