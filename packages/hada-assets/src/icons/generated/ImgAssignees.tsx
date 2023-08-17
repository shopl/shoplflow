import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgImgAssignees(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 40 40" {...props}>
      <circle cx={20} cy={20} r={20} fill="url(#img-assignees_svg__a)" />
      <circle cx={20} cy={20} r={9} fill="#C8D5E9" />
      <circle cx={20} cy={14.5} r={3.5} fill="#fff" stroke="#333" strokeWidth={2} />
      <path
        fill="#fff"
        stroke="#333"
        strokeWidth={2}
        d="M13 26.25c0-2.9 2.35-5.25 5.25-5.25h3.5c2.9 0 5.25 2.35 5.25 5.25A1.75 1.75 0 0 1 25.25 28h-10.5A1.75 1.75 0 0 1 13 26.25Z"
      />
      <defs>
        <linearGradient id="img-assignees_svg__a" x1={20} x2={40} y1={0} y2={40} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F4F6" />
          <stop offset={1} stopColor="#D9E1E6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgAssignees);
