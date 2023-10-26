import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <circle cx={9} cy={9} r={7} stroke='#555' strokeWidth={2} />
      <path stroke='#555' strokeLinecap='round' strokeWidth={2} d='m14.5 14.5 4 4' />
    </svg>
  );
}
export default createIcon(SvgIcSearch);
