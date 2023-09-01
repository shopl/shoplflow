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
        <meta name="og:title" content={config.title ? config.title + ' – Shoplflow' : 'Shoplflow'} />
        {/* Favicons, meta */}
        {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />*/}
        {/*<link rel="manifest" href="/favicon/site.webmanifest" />*/}
        {/*<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />*/}
        {/*<meta name="msapplication-TileColor" content="#ffffff" />*/}
        {/*<meta httpEquiv="Content-Language" content="en" />*/}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*<meta name="twitter:site" content="@vercel" />*/}
        {/*<meta name="twitter:image" content={image} />*/}
        {/*<meta name="og:title" content={`${config.title} – SWR`} />*/}
        {/*<meta name="og:image" content={image} />*/}
        {/*<meta name="apple-mobile-web-app-title" content="SWR" />*/}
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
