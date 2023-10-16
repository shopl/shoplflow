import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcBoardProfile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <circle cx={15} cy={15} r={15} fill="#EAF5FF" />
      <path
        fill="#84C2FC"
        fillRule="evenodd"
        d="M20.95 11.4a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm-2.205-.9H12.1a1.5 1.5 0 0 0-1.5 1.5v6.9a1.5 1.5 0 0 0 1.5 1.5h5.3a4 4 0 0 0 4-4v-4.145a2.254 2.254 0 0 1-1.199-.082l-1.411 1.882a.675.675 0 0 1-1.134-.726l.054-.084 1.412-1.883a2.238 2.238 0 0 1-.377-.862ZM12.4 14.55h4.5v.9h-4.5v-.9Zm0 1.8h2.7v.9h-2.7v-.9Zm8.1.45h-2.7v2.7a2.7 2.7 0 0 0 2.7-2.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcBoardProfile);
