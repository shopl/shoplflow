import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGrade1(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <path fill="#88D4E2" d="M4.5 4.5h16v16h-16z" />
      <path
        fill="#AAF6FD"
        fillRule="evenodd"
        d="m12.5 1.5 11 11-11 11-11-11 11-11Z"
        clipRule="evenodd"
      />
      <path
        fill="#8BE8F4"
        fillRule="evenodd"
        d="m23.5 12.5-11 11-11-11h22Z"
        clipRule="evenodd"
      />
      <path
        fill="#C1FAFF"
        fillRule="evenodd"
        d="M12.5 1.5v11h-11l11-11Z"
        clipRule="evenodd"
      />
      <path
        fill="#8C4CF6"
        stroke="#fff"
        d="m12.929 7.243-.429-.715-.429.715-3 5-.154.257.154.257 3 5 .429.715.429-.715 3-5 .154-.257-.154-.257-3-5Z"
      />
      <path
        fill="#fff"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="m12.5 7.5-3 5h3v-5Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillOpacity={0.25}
        fillRule="evenodd"
        d="m12.5 7.5 3 5h-3v-5Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillOpacity={0.15}
        fillRule="evenodd"
        d="m12.5 17.5-3-5h3v5Z"
        clipRule="evenodd"
      />
      <circle cx={23.5} cy={12.5} r={1} fill="#8BE8F4" />
      <circle cx={1.5} cy={12.5} r={1} fill="#8BE8F4" />
      <circle cx={12.5} cy={1.5} r={1} fill="#8BE8F4" />
      <circle cx={12.5} cy={23.5} r={1} fill="#8BE8F4" />
    </svg>
  );
}
export default createIcon(SvgIcGrade1);
