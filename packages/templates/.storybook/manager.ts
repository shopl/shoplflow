import { addons } from '@storybook/manager-api';


import theme from './theme';

addons.setConfig({
  theme,
});

/* set favicon */
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
// link.setAttribute('href', favicon);
document.head.appendChild(link);

const viewport = document.querySelector('meta[name="viewport"]');
viewport!.setAttribute(
  'content',
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
);

