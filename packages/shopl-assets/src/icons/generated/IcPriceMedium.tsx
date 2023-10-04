import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcPriceMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17.872 5.518a1.175 1.175 0 0 1 1.064 1.064l.485 5.334c.032.347-.093.69-.34.937l-6.636 6.636a1.175 1.175 0 0 1-1.662 0L4.965 13.67a1.175 1.175 0 0 1 0-1.661l6.637-6.637c.247-.246.59-.37.937-.339l5.334.485Zm3.056.883a3.175 3.175 0 0 0-2.875-2.875l-5.334-.485a3.175 3.175 0 0 0-2.532.917L3.55 10.595a3.175 3.175 0 0 0 0 4.49l5.82 5.819a3.175 3.175 0 0 0 4.49 0l6.636-6.637a3.175 3.175 0 0 0 .917-2.532L20.928 6.4Zm-7.22 4.159a1.5 1.5 0 1 0 2.122-2.122 1.5 1.5 0 0 0-2.122 2.122Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcPriceMedium);
