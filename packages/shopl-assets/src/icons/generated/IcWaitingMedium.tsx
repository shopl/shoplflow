import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcWaitingMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={5.75} cy={11.75} r={1.75} fill="#333" />
      <circle cx={12} cy={11.75} r={1.75} fill="#333" />
      <circle cx={18.25} cy={11.75} r={1.75} fill="#333" />
    </svg>
  );
}
export default createIcon(SvgIcWaitingMedium);
