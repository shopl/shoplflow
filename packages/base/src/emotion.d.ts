import '@emotion/react';
import React from 'react';
import { hadaTheme } from './styles';

type ShoplflowTheme = typeof hadaTheme;

declare module '@emotion/react' {
  export interface Theme extends ShoplflowTheme {}
}

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
