import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcOverview(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <rect width={16} height={15} x={4} y={5} stroke='#333' strokeWidth={2} rx={3} />
      <rect width={2} height={3} x={15} y={2.5} fill='#333' rx={1} />
      <rect width={2} height={3} x={7} y={2.5} fill='#333' rx={1} />
      <path
        stroke='#333'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='m8.5 12.3 2.625 2.7 4.375-4.5'
      />
      <path fill='#333' d='M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2H5Z' />
    </svg>
  );
}
export default createIcon(SvgIcOverview);
