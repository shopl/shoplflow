import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcMemo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4.75 4.5A1.75 1.75 0 0 0 3 6.25v6.5c0 .966.784 1.75 1.75 1.75v2.063L6.813 14.5h8.437A1.75 1.75 0 0 0 17 12.75v-6.5a1.75 1.75 0 0 0-1.75-1.75H4.75Zm9.25 3H6v1h8v-1Zm0 3H6v1h8v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMemo);
