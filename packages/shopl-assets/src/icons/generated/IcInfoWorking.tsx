import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoWorking(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.75-6.129V7h-1.5v3.327L7.424 12.52l1.152.96 2.174-2.609Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoWorking);
