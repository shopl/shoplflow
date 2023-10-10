import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M15.288 5.298a1 1 0 0 1 1.506 1.31l-.082.094-7.895 8a1 1 0 0 1-1.338.078l-.094-.087-4.106-4.266a1 1 0 0 1 1.349-1.472l.093.085 3.393 3.527 7.174-7.27Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCheck);
