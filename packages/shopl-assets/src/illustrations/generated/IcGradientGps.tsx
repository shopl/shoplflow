import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientGps(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#ic-gradient-gps_svg__a)">
        <path
          fill="url(#ic-gradient-gps_svg__b)"
          d="M18.541 4.081c.867-.353 1.731.511 1.378 1.378l-6.064 14.883c-.384.944-1.75.85-2.003-.138l-1.481-5.812a1.057 1.057 0 0 0-.763-.763l-5.812-1.481c-.988-.252-1.082-1.619-.138-2.003L18.541 4.08Z"
        />
      </g>
      <defs>
        <linearGradient id="ic-gradient-gps_svg__b" x1={0} x2={20} y1={1} y2={21} gradientUnits="userSpaceOnUse">
          <stop stopColor="#406588" stopOpacity={0.32} />
          <stop offset={1} stopColor="#35485B" />
        </linearGradient>
        <clipPath id="ic-gradient-gps_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientGps);
