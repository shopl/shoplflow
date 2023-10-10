import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcClose(props: SVGProps<SVGSVGElement>) {
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
        d="m5.613 4.21.094.083L10 8.585l4.293-4.292a1 1 0 0 1 1.497 1.32l-.083.094L11.415 10l4.292 4.293a1 1 0 0 1-1.32 1.497l-.094-.083L10 11.415l-4.293 4.292a1 1 0 0 1-1.497-1.32l.083-.094L8.585 10 4.293 5.707A1 1 0 0 1 5.51 4.14l.102.07Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcClose);
