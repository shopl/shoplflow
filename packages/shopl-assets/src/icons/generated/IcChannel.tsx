import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcChannel(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8 4a.5.5 0 0 0-.5.5v2A.5.5 0 0 0 8 7h6.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H8Zm-.5 5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V9Zm-3-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3 5A.5.5 0 0 1 8 13h8.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-2Zm-3-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcChannel);
