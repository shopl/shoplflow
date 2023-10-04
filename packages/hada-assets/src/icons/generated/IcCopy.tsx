import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcCopy(props: SVGProps<SVGSVGElement>) {
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
        fill="#999"
        fillRule="evenodd"
        d="M16.244 4.856A1.75 1.75 0 0 0 14.5 3.25h-6l-.144.006A1.75 1.75 0 0 0 6.75 5v.75h1.5V5l.007-.057A.25.25 0 0 1 8.5 4.75h6l.057.007A.25.25 0 0 1 14.75 5v7l-.007.057a.25.25 0 0 1-.243.193h-.25v1.5h.25l.143-.006A1.75 1.75 0 0 0 16.25 12V5l-.006-.144ZM11.75 6.25a1.75 1.75 0 0 1 1.744 1.606L13.5 8v7a1.75 1.75 0 0 1-1.607 1.744l-.143.006h-6a1.75 1.75 0 0 1-1.744-1.607L4 15V8a1.75 1.75 0 0 1 1.606-1.744l.144-.006h6Zm0 1.5h-6a.25.25 0 0 0-.243.193L5.5 8v7a.25.25 0 0 0 .193.243l.057.007h6a.25.25 0 0 0 .243-.193L12 15V8a.25.25 0 0 0-.193-.243l-.057-.007Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCopy);
