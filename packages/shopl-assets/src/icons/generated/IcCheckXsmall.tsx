import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcCheckXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10.547 2.987a.75.75 0 0 1-.034 1.06l-5.333 5a.75.75 0 0 1-1.026 0l-2.667-2.5a.75.75 0 1 1 1.026-1.094l2.154 2.019 4.82-4.52a.75.75 0 0 1 1.06.035Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCheckXsmall);
