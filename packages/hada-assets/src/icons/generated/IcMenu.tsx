import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6 9a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMenu);
