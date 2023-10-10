import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcLeave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g filter="url(#ic-leave_svg__a)">
        <ellipse cx={13.5} cy={20} fill="#CCC" rx={7.5} ry={1} />
      </g>
      <path
        fill="#1B7776"
        d="M12 19.6a1.6 1.6 0 0 1 1.6-1.6h3.8a1.6 1.6 0 0 1 1.6 1.6.4.4 0 0 1-.4.4h-6.2a.4.4 0 0 1-.4-.4Z"
      />
      <path
        fill="url(#ic-leave_svg__b)"
        d="M6.428 4.134a1 1 0 0 1 1.732-1l8.89 15.398-.866.5a1 1 0 0 1-1.366-.366L6.428 4.134Z"
      />
      <path
        fill="url(#ic-leave_svg__c)"
        d="M18.852 5.652c1 1.732-3.388 4.812-6.558 6.642s-8.03 4.09-9.03 2.358C2.066 12.58 3.49 6.985 7.793 4.5c4.305-2.485 9.862-.92 11.058 1.152Z"
      />
      <path
        fill="url(#ic-leave_svg__d)"
        fillOpacity={0.8}
        fillRule="evenodd"
        d="M15.51 10.228a38.258 38.258 0 0 1-3.216 2.066 38.218 38.218 0 0 1-3.397 1.751 3.18 3.18 0 0 1-.71-.864C7.03 11.177 5.881 5.605 7.794 4.5c1.913-1.105 6.164 2.677 7.321 4.68.209.361.336.711.394 1.048Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="ic-leave_svg__b"
          x1={6.794}
          x2={16.184}
          y1={2.768}
          y2={19.032}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A9996" />
          <stop offset={1} stopColor="#1B7776" />
        </linearGradient>
        <linearGradient
          id="ic-leave_svg__c"
          x1={7.794}
          x2={12.294}
          y1={4.5}
          y2={12.294}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5EDEBE" />
          <stop offset={1} stopColor="#32A88B" />
        </linearGradient>
        <linearGradient
          id="ic-leave_svg__d"
          x1={11}
          x2={12.294}
          y1={10}
          y2={12.294}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
        </linearGradient>
        <filter
          id="ic-leave_svg__a"
          width={18}
          height={5}
          x={4.5}
          y={17.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_286_4549"
            stdDeviation={0.75}
          />
        </filter>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcLeave);
