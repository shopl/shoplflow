import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcNext(props: SVGProps<SVGSVGElement>) {
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
        d="M12.425 3.283a.5.5 0 0 0-.708 0l-.707.707a.5.5 0 0 0 0 .707L15.314 9H1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13.814l-4.304 4.303a.5.5 0 0 0 0 .708l.707.707a.5.5 0 0 0 .708 0l6.364-6.364a.5.5 0 0 0 0-.707l-6.364-6.364Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcNext);
