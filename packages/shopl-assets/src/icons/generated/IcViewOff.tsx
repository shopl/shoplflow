import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcViewOff(props: SVGProps<SVGSVGElement>) {
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
        d="M15.835 4.167a.561.561 0 0 0-.8 0l-2.293 2.316a6.315 6.315 0 0 0-2.959-.77c-3.997 0-6.588 4.088-6.696 4.262a.576.576 0 0 0 0 .607 11.33 11.33 0 0 0 2.746 2.879l-1.537 1.552a.574.574 0 0 0 .246.969c.2.052.412-.01.553-.162l10.74-10.846a.575.575 0 0 0 0-.807Zm-8.313 6.112a2.272 2.272 0 0 1 2.261-2.284 2.18 2.18 0 0 1 1.137.328l-3.073 3.104a2.24 2.24 0 0 1-.325-1.148ZM14.971 8c.738.636 1.39 1.36 1.939 2.153a.55.55 0 0 1 0 .605C16.796 10.93 14.088 15 9.91 15A6.538 6.538 0 0 1 8 14.703L14.97 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcViewOff);
