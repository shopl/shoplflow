import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcCompleted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect
        width={14.5}
        height={14.5}
        x={2.75}
        y={2.75}
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2.25}
      />
      <path
        stroke="#3299FE"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m6.5 9.75 2.146 2.146a.5.5 0 0 0 .708 0L13.5 7.75"
      />
    </svg>
  );
}
export default createIcon(SvgIcCompleted);
