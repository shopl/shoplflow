import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcAttachment(props: SVGProps<SVGSVGElement>) {
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
        d="M10 18c-2.757 0-5-2.243-5-5V6a.666.666 0 1 1 1.333 0v7A3.67 3.67 0 0 0 10 16.667 3.67 3.67 0 0 0 13.667 13V5.667a2.336 2.336 0 0 0-2.334-2.334A2.336 2.336 0 0 0 9 5.667v6.666c0 .552.449 1 1 1 .551 0 1-.448 1-1V6a.666.666 0 1 1 1.333 0v6.333a2.33 2.33 0 0 1-.873 1.819c-.4.322-.908.515-1.46.515a2.336 2.336 0 0 1-2.333-2.334V5.667A3.671 3.671 0 0 1 11.333 2 3.671 3.671 0 0 1 15 5.667V13c0 2.757-2.243 5-5 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAttachment);
