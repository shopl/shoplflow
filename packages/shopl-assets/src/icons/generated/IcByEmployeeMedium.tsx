import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcByEmployeeMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <circle cx={12} cy={12} r={10} fill='#EAEAEA' />
      <path
        fill='#999'
        fillRule='evenodd'
        d='M13.592 10.428a2.5 2.5 0 1 0-3.184 0A5.04 5.04 0 0 0 7 15.208V16.6c0 .59.478 1.067 1.067 1.067h7.867c.589 0 1.066-.478 1.066-1.067v-1.392a5.04 5.04 0 0 0-3.408-4.78Zm.908 2.239h-1.667v.833H14.5v-.833Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcByEmployeeMedium);
