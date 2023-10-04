import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcStatisticDefault(props: SVGProps<SVGSVGElement>) {
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
        fill="#999"
        fillRule="evenodd"
        d="M19.5 5.5v13a1 1 0 1 1-2 0v-13a1 1 0 1 1 2 0Zm-3.5 0a2.5 2.5 0 0 1 5 0v13a2.5 2.5 0 0 1-5 0v-13Zm-9.5 13v-9a1 1 0 0 0-2 0v9a1 1 0 1 0 2 0ZM5.5 7A2.5 2.5 0 0 0 3 9.5v9a2.5 2.5 0 0 0 5 0v-9A2.5 2.5 0 0 0 5.5 7ZM13 18.5v-7a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0ZM12 9a2.5 2.5 0 0 0-2.5 2.5v7a2.5 2.5 0 0 0 5 0v-7A2.5 2.5 0 0 0 12 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcStatisticDefault);
