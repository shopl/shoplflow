import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgImgPending(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <circle cx={20} cy={20} r={20} fill="url(#img-pending_svg__a)" />
      <rect width={15} height={15} x={15.334} y={15} fill="#FF7979" rx={3} />
      <rect
        width={16}
        height={16}
        x={10}
        y={10}
        fill="#fff"
        stroke="#333"
        strokeWidth={2}
        rx={3}
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.5 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="img-pending_svg__a"
          x1={20}
          x2={40}
          y1={0}
          y2={40}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAF1F1" />
          <stop offset={1} stopColor="#EFE2E2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgPending);
