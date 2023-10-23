import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcListEdit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect width={7} height={16} x={12} y={2} fill="#EAEAEA" rx={3.5} />
      <path
        fill="#777"
        fillRule="evenodd"
        d="m13 13 2.5 3 2.5-3h-5ZM13 7l2.5-3L18 7h-5ZM1 4h9v2H1V4Zm0 5h9v2H1V9Zm9 5H1v2h9v-2Z"
        clipRule="evenodd"
      />
      <path stroke="#CCC" strokeLinecap="square" d="M14 10h3" />
    </svg>
  );
}
export default createIcon(SvgIcListEdit);
