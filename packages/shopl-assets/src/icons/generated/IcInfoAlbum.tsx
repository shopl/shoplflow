import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcInfoAlbum(props: SVGProps<SVGSVGElement>) {
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
        d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm4.667 4.833a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333Zm7.083 6.417h-10l2.772-3.234a1 1 0 0 1 1.49-.032L10 13.043l2.701-3.236a1 1 0 0 1 1.57.044l.781 1.05a1 1 0 0 1 .198.597v3.252a.5.5 0 0 1-.5.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoAlbum);
