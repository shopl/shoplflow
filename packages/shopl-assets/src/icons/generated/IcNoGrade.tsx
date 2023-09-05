import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcNoGrade(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 25 25' {...props}>
      <circle cx={12.5} cy={12.5} r={9.5} stroke='#DDD' />
      <path stroke='#DDD' strokeLinecap='square' d='M6 19 19 6' />
    </svg>
  );
}
export default createIcon(SvgIcNoGrade);
