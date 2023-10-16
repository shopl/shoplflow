import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcTack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g clipPath="url(#ic-tack_svg__a)">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M12.926 2.75a.5.5 0 0 1 .76-.064l3.382 3.382a.5.5 0 0 1-.063.76l-4.094 2.925a.5.5 0 0 1-.644-.053l-2.212-2.212A.5.5 0 0 1 10 6.843l2.925-4.094ZM6.357 7.13a2 2 0 0 1 2.309.375l3.583 3.583a2 2 0 0 1 .375 2.309l-.45.901a.5.5 0 0 1-.801.13L8.7 11.756l-3.865 3.865a.497.497 0 1 1-.703-.703l3.865-3.865-2.672-2.672a.5.5 0 0 1 .13-.8l.901-.451Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="ic-tack_svg__a">
          <path fill="#fff" d="M.001 0h20v20h-20z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcTack);
