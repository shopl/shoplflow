import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcInfoGrade(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13 5.5v-3H5v3l1.425.713a5 5 0 1 0 5.15 0L13 5.5Zm-7.5 5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm6 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10 2.5v3.1A5.023 5.023 0 0 0 8 5.6V2.5h2Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoGrade);
