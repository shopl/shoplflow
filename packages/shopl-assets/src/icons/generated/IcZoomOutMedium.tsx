import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcZoomOutMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l2.716 2.715a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.707 0l-2.716-2.716A8 8 0 0 1 3 11Zm4 .5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcZoomOutMedium);
