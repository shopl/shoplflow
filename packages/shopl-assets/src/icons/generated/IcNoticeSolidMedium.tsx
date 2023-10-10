import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcNoticeSolidMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#ic-notice-solid-medium_svg__a)">
        <rect width={24} height={24} fill="#EAEAEA" rx={12} />
        <path
          fill="#333"
          d="M14.821 7.927a1.5 1.5 0 0 0-2.17-1.342L7.187 9.317c-2.211 1.105-2.211 4.26 0 5.366l5.462 2.732a1.5 1.5 0 0 0 2.171-1.342V7.927ZM18.471 12a2.65 2.65 0 0 0-2.65-2.65v1.3l.13.006a1.35 1.35 0 0 1-.13 2.694v1.3l.168-.005A2.65 2.65 0 0 0 18.47 12Z"
        />
      </g>
      <defs>
        <clipPath id="ic-notice-solid-medium_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcNoticeSolidMedium);
