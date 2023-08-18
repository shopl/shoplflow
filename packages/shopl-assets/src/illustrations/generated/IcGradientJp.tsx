import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientJp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#ic-gradient-jp_svg__a)">
        <g filter="url(#ic-gradient-jp_svg__b)">
          <ellipse cx={12} cy={21.5} fill="#CCC" rx={4} ry={1.5} />
        </g>
        <path
          fill="url(#ic-gradient-jp_svg__c)"
          d="M21 9.67c0 7.076-6.974 11.255-8.633 12.149a.733.733 0 0 1-.703 0C10.001 20.927 3 16.753 3 9.67 3 4.881 7.03 1 12 1s9 3.881 9 8.67Z"
        />
        <circle cx={12} cy={10} r={6} fill="#fff" stroke="url(#ic-gradient-jp_svg__d)" strokeWidth={0.5} />
        <path
          stroke="#17706F"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m9.5 10.184 1.719 1.665a.226.226 0 0 0 .313 0L14.5 9"
        />
      </g>
      <defs>
        <linearGradient
          id="ic-gradient-jp_svg__c"
          x1={5.652}
          x2={13.123}
          y1={-3.011}
          y2={22.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.09} stopColor="#63E7C6" />
          <stop offset={0.873} stopColor="#3EAE92" />
          <stop offset={1} stopColor="#4DC9AA" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-jp_svg__d"
          x1={8.063}
          x2={16.5}
          y1={4}
          y2={17.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#53A5A3" />
          <stop offset={1} stopColor="#7EDCC5" />
        </linearGradient>
        <clipPath id="ic-gradient-jp_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
        <filter
          id="ic-gradient-jp_svg__b"
          width={11}
          height={6}
          x={6.5}
          y={18.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_286_4543" stdDeviation={0.75} />
        </filter>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientJp);
