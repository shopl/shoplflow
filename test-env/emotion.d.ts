import '@emotion/react';
import type { ShoplflowTheme } from '@shoplflow/base';

declare module '@emotion/react' {
  export interface Theme extends ShoplflowTheme {}
}
