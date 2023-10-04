import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcStatisticActive(props: SVGProps<SVGSVGElement>) {
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
        width={3.5}
        height={12.5}
        x={3.75}
        y={7.75}
        fill="#02B585"
        stroke="#333"
        strokeWidth={1.5}
        rx={1.75}
      />
      <rect
        width={3.5}
        height={10.5}
        x={10.25}
        y={9.75}
        fill="#02B585"
        stroke="#333"
        strokeWidth={1.5}
        rx={1.75}
      />
      <rect
        width={3.5}
        height={16.5}
        x={16.75}
        y={3.75}
        fill="#02B585"
        stroke="#333"
        strokeWidth={1.5}
        rx={1.75}
      />
    </svg>
  );
}
export default createIcon(SvgIcStatisticActive);
