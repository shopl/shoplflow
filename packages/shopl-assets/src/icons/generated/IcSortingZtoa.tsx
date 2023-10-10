import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcSortingZtoa(props: SVGProps<SVGSVGElement>) {
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
        d="M6.001 3a.5.5 0 0 0-.5.5v9.833h-1a.5.5 0 0 0-.4.8l2 2.667a.5.5 0 0 0 .8 0l2-2.667a.5.5 0 0 0-.4-.8h-1V3.5a.5.5 0 0 0-.5-.5h-1Zm8.157 11.25-.609-1.618-.608 1.618h1.216Zm.506 1.349.409 1.087c.047.126.168.21.303.21h.6a.324.324 0 0 0 .306-.428l-1.584-4.646c-.374-1.096-1.924-1.096-2.297 0l-1.584 4.646a.324.324 0 0 0 .306.428h.6a.324.324 0 0 0 .303-.21l.409-1.087h2.23ZM11.391 3a.316.316 0 0 0-.316.316V4c0 .175.142.316.316.316h2.576L11.391 7.26a.763.763 0 0 0 .574 1.265h3.794a.316.316 0 0 0 .316-.315v-.685a.316.316 0 0 0-.316-.315h-2.576l2.577-2.945A.763.763 0 0 0 15.185 3h-3.794Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSortingZtoa);
