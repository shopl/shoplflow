import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcCategory(props: SVGProps<SVGSVGElement>) {
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
        d="M4.75 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm2-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-8Zm-.5 5.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1Zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCategory);
