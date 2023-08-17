import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgImgScheduled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 40 40" {...props}>
      <circle cx={20} cy={20} r={20} fill="url(#img-scheduled_svg__a)" />
      <rect width={17} height={17} x={11.5} y={11.5} fill="#fff" stroke="#333" strokeWidth={2} rx={3} />
      <rect width={2} height={3} x={23.5} y={9} fill="#333" rx={1} />
      <rect width={2} height={3} x={14.5} y={9} fill="#333" rx={1} />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16.5 20.8 2.625 2.7L23.5 19"
      />
      <path fill="#61CBB5" d="M12.5 14.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1h-15v-1Z" />
      <defs>
        <linearGradient id="img-scheduled_svg__a" x1={20} x2={40} y1={0} y2={40} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1FAF7" />
          <stop offset={1} stopColor="#E2EDEF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgScheduled);
