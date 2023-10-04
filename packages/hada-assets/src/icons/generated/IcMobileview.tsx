import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcMobileview(props: SVGProps<SVGSVGElement>) {
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
        stroke="#555"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 10.635v5.519c0 1.02-.768 1.846-1.714 1.846H5.714C4.768 18 4 17.173 4 16.154V3.846C4 2.826 4.768 2 5.714 2h2.429"
      />
      <path
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2h5v5"
      />
      <rect
        width={9}
        height={2}
        x={9.757}
        y={7.828}
        fill="#999"
        rx={1}
        transform="rotate(-45 9.757 7.828)"
      />
    </svg>
  );
}
export default createIcon(SvgIcMobileview);
