import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGradientMobile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="url(#ic-gradient-mobile_svg__a)" d="M5 19h14v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1Z" />
      <rect width={14} height={19} x={5} y={2} fill="url(#ic-gradient-mobile_svg__b)" rx={2} />
      <path
        stroke="#EAF5FF"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 10.579 2.085 2.244c.09.096.241.096.33 0L15 9"
      />
      <rect width={6} height={1.5} x={9} y={3.5} fill="#4C6882" opacity={0.4} rx={0.5} />
      <defs>
        <linearGradient
          id="ic-gradient-mobile_svg__a"
          x1={5}
          x2={5.504}
          y1={19}
          y2={23.509}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7FAFDA" stopOpacity={0.88} />
          <stop offset={1} stopColor="#557694" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-mobile_svg__b"
          x1={5.5}
          x2={24.176}
          y1={3}
          y2={30.451}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1CDF5" />
          <stop offset={1} stopColor="#6789AB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientMobile);
