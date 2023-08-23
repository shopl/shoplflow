import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Shoplflow</span>,
  project: {
    link: 'https://github.com/shopl/shoplflow',
  },
  docsRepositoryBase: 'https://github.com/shopl/shoplflow/tree/main/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Shopl@Compony Inc.`,
  },
};

export default config;
