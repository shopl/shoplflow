import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGroupMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M15 20h5.5a1.5 1.5 0 0 0 1.5-1.5V17a4 4 0 0 0-4-4h-3c-.57 0-1.11.119-1.6.333A5.011 5.011 0 0 1 14.6 15.04c.13-.026.262-.04.4-.04h3a2 2 0 0 1 2 2v1h-5v2Z'
        clipRule='evenodd'
      />
      <circle cx={7.5} cy={8} r={3} stroke='#333' strokeWidth={2} />
      <circle cx={16.5} cy={8} r={3} stroke='#333' strokeWidth={2} />
      <path
        stroke='#333'
        strokeWidth={2}
        d='M3 17a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v1.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V17Z'
      />
    </svg>
  );
}
export default createIcon(SvgIcGroupMedium);
