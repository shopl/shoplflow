import React from 'react';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

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
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string; title }>();
    const description = config.frontMatter.description || 'Design System for Shopl&Compony Inc.';
    // const image = config.frontMatter.image || 'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg';
    return (
      <>
        <meta name='og:title' content={config.title ? config.title + ' – Shoplflow' : 'Shoplflow'} />
        <meta name='description' content={description} />
        <meta name='og:description' content={description} />
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/shopl/shoplflow/tree/main/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Shopl&Compony Inc.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | Shoplflow`,
    };
  },
};

export default config;
