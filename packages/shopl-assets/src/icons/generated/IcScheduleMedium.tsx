import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcScheduleMedium(props: SVGProps<SVGSVGElement>) {
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
        width={16}
        height={13}
        x={4}
        y={6}
        stroke="#333"
        strokeWidth={2}
        rx={2}
      />
      <path fill="#333" d="M4 9h16v2H4z" />
      <rect width={8} height={2} x={8} y={13} fill="#333" rx={0.5} />
      <rect width={2} height={2} x={15} y={4} fill="#333" rx={0.5} />
      <rect width={2} height={2} x={7} y={4} fill="#333" rx={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcScheduleMedium);
