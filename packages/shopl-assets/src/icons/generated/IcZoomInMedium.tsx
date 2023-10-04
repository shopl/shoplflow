import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcZoomInMedium(props: SVGProps<SVGSVGElement>) {
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
        d="M5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-8a8 8 0 1 0 4.906 14.32l2.716 2.716a.5.5 0 0 0 .707 0l.707-.708a.5.5 0 0 0 0-.707l-2.716-2.715A8 8 0 0 0 11 3Zm-1 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H7.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H10V7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcZoomInMedium);
