import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcExcel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <rect width={14.5} height={14.5} x={2.75} y={2.75} stroke='#555' strokeWidth={1.5} rx={3.25} />
      <path fill='#555' d='M4 6h12v2H4zM4 11h12v2H4z' />
      <path fill='#555' d='M9 4v12H7V4z' />
    </svg>
  );
}
export default createIcon(SvgIcExcel);
