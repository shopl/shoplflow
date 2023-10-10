import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcToggleMedium(props: SVGProps<SVGSVGElement>) {
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
        width={14}
        height={7}
        x={5}
        y={4}
        stroke="#333"
        strokeWidth={2}
        rx={3.5}
      />
      <circle cx={15.5} cy={7.5} r={1.5} fill="#333" />
      <rect
        width={14}
        height={7}
        x={5}
        y={14}
        stroke="#333"
        strokeWidth={2}
        rx={3.5}
      />
      <circle cx={8.5} cy={17.5} r={1.5} fill="#333" />
    </svg>
  );
}
export default createIcon(SvgIcToggleMedium);
