import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const logo = (
  <span>
    <span className={'title1_700'}>Shoplflow</span>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        color: var(--primary400);
        mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75%);
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  logo: logo,
  project: {
    link: 'https://github.com/shopl/shoplflow',
  },

  docsRepositoryBase: 'https://github.com/shopl/shoplflow/tree/main/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Shopl&Compony Inc.`,
  },
};

export default config;
