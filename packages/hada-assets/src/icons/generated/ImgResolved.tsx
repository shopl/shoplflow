import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgImgResolved(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 40 40" {...props}>
      <circle cx={20} cy={20} r={20} fill="url(#img-resolved_svg__a)" />
      <rect width={15} height={15} x={15.334} y={15} fill="#3299FE" rx={3} />
      <rect width={16} height={16} x={10} y={10} fill="#fff" stroke="#333" strokeWidth={2} rx={3} />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.5 17.8 2.625 2.7L21.5 16"
      />
      <defs>
        <linearGradient id="img-resolved_svg__a" x1={20} x2={40} y1={0} y2={40} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F6FA" />
          <stop offset={1} stopColor="#E2E7EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgResolved);
