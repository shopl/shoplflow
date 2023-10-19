import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcChattingMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M13.286 6H11a6 6 0 1 0 0 12h8v-6.286A5.714 5.714 0 0 0 13.286 6ZM11 4a8 8 0 1 0 0 16h9.5a.5.5 0 0 0 .5-.5v-7.786A7.714 7.714 0 0 0 13.286 4H11Z'
        clipRule='evenodd'
      />
      <path fill='#333' d='M7 11h2v2H7zM11 11h2v2h-2zM15 11h2v2h-2z' />
    </svg>
  );
}
export default createIcon(SvgIcChattingMedium);
