import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGradientStaff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="url(#ic-gradient-staff_svg__a)"
        d="M16.286 7.235c0 2.34-1.92 4.236-4.286 4.236-2.367 0-4.286-1.897-4.286-4.236C7.714 4.896 9.634 3 12 3c2.367 0 4.286 1.896 4.286 4.235Z"
      />
      <path
        fill="url(#ic-gradient-staff_svg__b)"
        d="M4.5 18.214c0-3.14 2.558-5.685 5.714-5.685h3.572c3.156 0 5.714 2.545 5.714 5.685v.891A1.9 1.9 0 0 1 17.595 21H6.405A1.9 1.9 0 0 1 4.5 19.105v-.891Z"
      />
      <path
        fill="url(#ic-gradient-staff_svg__c)"
        d="M4.5 18.088c0-3.07 2.502-5.559 5.588-5.559h3.824c3.086 0 5.588 2.49 5.588 5.56a1.858 1.858 0 0 1-1.863 1.852H6.363A1.858 1.858 0 0 1 4.5 18.088Z"
      />
      <defs>
        <linearGradient
          id="ic-gradient-staff_svg__a"
          x1={4.5}
          x2={22.4}
          y1={1.875}
          y2={17.724}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9ABFE0" />
          <stop offset={0.719} stopColor="#76A1C7" />
          <stop offset={1} stopColor="#93B7FF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-staff_svg__b"
          x1={6.844}
          x2={21.982}
          y1={3}
          y2={5.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#76A1C7" />
          <stop offset={1} stopColor="#658FB4" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-staff_svg__c"
          x1={12}
          x2={13.861}
          y1={10.588}
          y2={22.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9ABFE0" />
          <stop offset={0.922} stopColor="#769EC7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientStaff);
