import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcMove(props: SVGProps<SVGSVGElement>) {
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
        d="M8.864 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V6.414L4.561 16.718a.5.5 0 0 1-.707 0l-.708-.708a.5.5 0 0 1 0-.707L13.45 5H9.364a.5.5 0 0 1-.5-.5v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMove);
