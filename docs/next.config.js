// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

// If you have other Next.js configurations, you can pass them as the parameter:
module.exports = withNextra({
  swcMinify: false, // it should be false by default
  experimental: {
    forceSwcTransforms: true,
  },
});
