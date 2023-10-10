import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcWorkStatus(props: SVGProps<SVGSVGElement>) {
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
        d="M9 16c.34 0 .674-.026 1-.076a4.485 4.485 0 0 1 1.275-3.062 3.5 3.5 0 0 1 4.075-4.758A6.5 6.5 0 1 0 9 16Zm.71-9.25a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v2.836a.25.25 0 0 1-.073.177l-1.883 1.883a.5.5 0 0 0 0 .708l.353.353a.5.5 0 0 0 .707 0l1.884-1.884a1.75 1.75 0 0 0 .513-1.237V6.75Zm6.79 4.75c0 .714-.374 1.34-.936 1.694A3.001 3.001 0 0 1 17.5 16v.765c0 .13-.105.235-.235.235h-5.53a.235.235 0 0 1-.235-.235V16c0-1.282.805-2.377 1.936-2.806A2 2 0 1 1 16.5 11.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcWorkStatus);
