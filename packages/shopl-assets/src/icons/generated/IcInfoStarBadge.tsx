import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoStarBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <circle cx={10} cy={10} r={7} fill='#333' stroke='#fff' strokeWidth={2} />
      <path
        fill='#fff'
        d='m11.235 8.129-.783-1.666a.5.5 0 0 0-.905 0l-.783 1.666-1.804.277a.5.5 0 0 0-.282.844l1.32 1.353-.306 1.882a.5.5 0 0 0 .735.518l1.573-.87 1.573.87a.5.5 0 0 0 .736-.518l-.306-1.882 1.319-1.353a.5.5 0 0 0-.282-.844l-1.805-.277Z'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoStarBadge);
