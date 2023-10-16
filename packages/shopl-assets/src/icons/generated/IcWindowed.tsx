import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcWindowed(props: SVGProps<SVGSVGElement>) {
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
        d="M7.47 8.429h.959V3.235H7.074v2.88L3.958 3 3 3.958l3.116 3.116h-2.88v1.355H7.47Zm4.336-4.074h3.84v3.839H17V3h-5.194v1.355Zm-3.612 11.29h-3.84v-3.838H3V17h5.194v-1.355Zm4.335-4.074h4.236v1.355h-2.88L17 16.042l-.958.958-3.116-3.116v2.881h-1.355v-5.193h.958Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcWindowed);
