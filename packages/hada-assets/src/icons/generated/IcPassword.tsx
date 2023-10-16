import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcPassword(props: SVGProps<SVGSVGElement>) {
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
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.5 5.23C13.5 3.446 12.029 2 10.214 2h-.428C7.97 2 6.5 3.446 6.5 5.23V8"
      />
      <path
        stroke="#333"
        strokeWidth={1.5}
        d="M3.25 11A2.25 2.25 0 0 1 5.5 8.75h9A2.25 2.25 0 0 1 16.75 11v6c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-6Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7.75 13.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm3 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcPassword);
