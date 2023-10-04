import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcHelpCenter(props: SVGProps<SVGSVGElement>) {
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
        fill="#02B585"
        fillRule="evenodd"
        d="M10 3c2.835 0 5.2 2.137 5.833 5h.667a3 3 0 1 1 0 6h-.434c-.623 1.29-2.324 2.2-4.358 2.39-.273.37-.713.61-1.208.61h-1a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 1.396.95c1.3-.183 2.324-.716 2.77-1.35V9.537c0-2.862-2.099-5.166-4.666-5.166-2.505 0-4.564 2.193-4.663 4.958l-.004.208V14H3.5a3 3 0 1 1 0-6h.667C4.8 5.137 7.165 3 10 3Z"
        clipRule="evenodd"
      />
      <circle cx={11.8} cy={9.887} r={0.9} fill="#02B585" />
      <circle cx={8.2} cy={9.887} r={0.9} fill="#02B585" />
    </svg>
  );
}
export default createIcon(SvgIcHelpCenter);
