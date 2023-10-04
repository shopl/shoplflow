import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcDelete(props: SVGProps<SVGSVGElement>) {
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
        fill="#CCC"
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.142 7.059a.2.2 0 0 0 0 .282l2.664 2.665-2.653 2.652a.2.2 0 0 0 0 .283l.917.917a.2.2 0 0 0 .283 0l2.653-2.652 2.653 2.652a.2.2 0 0 0 .283 0l.917-.917a.2.2 0 0 0 0-.283l-2.653-2.652L13.87 7.34a.2.2 0 0 0 0-.282l-.917-.918a.2.2 0 0 0-.283 0l-2.664 2.665L7.342 6.14a.2.2 0 0 0-.283 0l-.917.918Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDelete);
