import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcArticleMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="#fff" fillRule="evenodd" d="M10 10h4v4h-4v-4Z" clipRule="evenodd" />
      <rect width={6} height={1} x={9} y={16} fill="#fff" rx={0.5} />
      <rect width={14} height={16} x={5} y={4} fill="#C1E0FE" rx={2} />
      <path fill="#3299FE" d="M7 6h10v4H7zM7 12h10v1H7zM7 14h10v1H7zM7 16h5v1H7zM13 16h2v1h-2z" />
    </svg>
  );
}
export default createIcon(SvgIcArticleMedium);
