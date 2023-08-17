const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',

  primaryHue: '187',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
