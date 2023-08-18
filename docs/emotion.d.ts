import '@emotion/react';
import type React from 'react';
import type { ShoplflowTheme } from '@shoplflow/base';

declare module '@emotion/react' {
  export interface Theme extends ShoplflowTheme {}
}

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
