import '@emotion/react';
import { hadaTheme } from './styles';

type ShoplflowTheme = typeof hadaTheme;

declare module '@emotion/react' {
  export interface Theme extends ShoplflowTheme {}
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
