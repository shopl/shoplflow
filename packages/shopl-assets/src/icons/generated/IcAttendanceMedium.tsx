import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcAttendanceMedium(props: SVGProps<SVGSVGElement>) {
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
        d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1.142 8.221a.5.5 0 0 1-.146.354l-2.508 2.508a.5.5 0 0 0 0 .707l.864.864a.5.5 0 0 0 .707 0l3.16-3.159a.5.5 0 0 0 .146-.353V7.944a.5.5 0 0 0-.5-.5h-1.223a.5.5 0 0 0-.5.5v3.277Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAttendanceMedium);
