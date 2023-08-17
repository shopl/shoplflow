import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgImgAverage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 40 40" {...props}>
      <circle cx={20} cy={20} r={20} fill="url(#img-average_svg__a)" />
      <rect width={15} height={15} x={15.334} y={15} fill="#61CBB5" rx={3} />
      <rect width={16} height={16} x={10} y={10} fill="#fff" stroke="#333" strokeWidth={2} rx={3} />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.5 15a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM18 14a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM21.5 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient id="img-average_svg__a" x1={20} x2={40} y1={0} y2={40} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1FAF7" />
          <stop offset={1} stopColor="#E2EDEF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgAverage);
