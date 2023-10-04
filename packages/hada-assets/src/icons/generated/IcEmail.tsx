import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcEmail(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm1.5 2.65V15a.5.5 0 0 0 .41.492L4 15.5h12a.5.5 0 0 0 .492-.41L16.5 15V7.728l-6.134 3.427a.75.75 0 0 1-.637.044l-.101-.048L3.5 7.65Zm0-1.728 6.505 3.716L16.5 6.01V5a.5.5 0 0 0-.41-.492L16 4.5H4a.5.5 0 0 0-.492.41L3.5 5v.922Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcEmail);
