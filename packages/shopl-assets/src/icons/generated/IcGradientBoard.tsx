import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGradientBoard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect
        width={14.34}
        height={15.45}
        fill="url(#ic-gradient-board_svg__a)"
        fillOpacity={0.7}
        rx={2}
        transform="matrix(.99027 .13917 -.13523 .99081 4.34 3.5)"
      />
      <g filter="url(#ic-gradient-board_svg__b)">
        <path
          fill="url(#ic-gradient-board_svg__c)"
          d="M5.74 7.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-12Z"
        />
        <path
          fill="#4272CE"
          d="M5.74 5.5h14-14Zm14 14a2.29 2.29 0 0 1-2.291 2.29h-9.42a2.29 2.29 0 0 1-2.29-2.29c0 .944.896 1.71 2 1.71h10c1.105 0 2-.766 2-1.71Zm-14 2v-16 16Zm14-16v16-16Z"
        />
      </g>
      <rect
        width={1}
        height={4.7}
        fill="url(#ic-gradient-board_svg__d)"
        rx={0.5}
        transform="matrix(.7071 -.7071 -.69678 -.71729 19.55 10.5)"
      />
      <rect width={10} height={1} x={7.739} y={11} fill="#8092AA" rx={0.5} />
      <rect width={7} height={1} x={7.739} y={13} fill="#8092AA" rx={0.5} />
      <rect width={4} height={2} x={7.739} y={8} fill="#3299FE" rx={1} />
      <rect
        width={1.13}
        height={3.61}
        fill="url(#ic-gradient-board_svg__e)"
        rx={0.565}
        transform="matrix(.7071 .7071 -.69678 .71729 18.74 4.5)"
      />
      <circle
        cx={19.739}
        cy={4.5}
        r={2}
        fill="url(#ic-gradient-board_svg__f)"
      />
      <defs>
        <linearGradient
          id="ic-gradient-board_svg__a"
          x1={2.689}
          x2={14.489}
          y1={-2.272}
          y2={15.35}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0688FF" />
          <stop offset={1} stopColor="#0057FF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-board_svg__c"
          x1={8.364}
          x2={20.844}
          y1={3.147}
          y2={20.715}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.552} stopColor="#F8FAFF" />
          <stop offset={0.963} stopColor="#DDE9FF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-board_svg__d"
          x1={-0.108}
          x2={1.654}
          y1={4.77}
          y2={1.478}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0.3} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="ic-gradient-board_svg__e"
          x1={-0.662}
          x2={2.103}
          y1={1.805}
          y2={2.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E8E8E" />
          <stop offset={1} stopColor="#4B4B4B" />
        </linearGradient>
        <radialGradient
          id="ic-gradient-board_svg__f"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(1.5 2 -2 1.5 19.74 4.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#548EFF" />
          <stop offset={0.766} stopColor="#226DFF" />
        </radialGradient>
        <filter
          id="ic-gradient-board_svg__b"
          width={17.636}
          height={19.927}
          x={3.921}
          y={3.455}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.227} />
          <feGaussianBlur stdDeviation={0.909} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.458056 0 0 0 0 0.57715 0 0 0 0 0.808333 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_286_4513"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_286_4513"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientBoard);
