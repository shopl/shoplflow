import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcViewOn(props: SVGProps<SVGSVGElement>) {
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
        fill="#555"
        fillRule="evenodd"
        d="M10 5c-3.182 0-5.9 2.073-7 5 1.1 2.927 3.818 5 7 5s5.9-2.073 7-5c-1.1-2.927-3.818-5-7-5Zm0 8.333c-1.756 0-3.182-1.493-3.182-3.333S8.244 6.667 10 6.667 13.182 8.16 13.182 10 11.756 13.333 10 13.333ZM10 8c-1.056 0-1.91.893-1.91 2s.854 2 1.91 2 1.91-.893 1.91-2-.854-2-1.91-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcViewOn);
