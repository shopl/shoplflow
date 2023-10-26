import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCamera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <rect width={18.5} height={14.5} x={2.75} y={5.75} stroke='#333' strokeWidth={1.5} rx={3.25} />
      <path
        stroke='#333'
        strokeWidth={1.5}
        d='M16 5.75h1.108l-.412-1.029-.548-1.37a1.75 1.75 0 0 0-1.625-1.101H9.477a1.75 1.75 0 0 0-1.625 1.1l-.548 1.371-.412 1.029H16Z'
      />
      <rect width={3} height={2} x={16} y={8} fill='#3299FE' rx={1} />
      <circle cx={12} cy={13} r={3} stroke='#333' strokeWidth={1.5} />
    </svg>
  );
}
export default createIcon(SvgIcCamera);
