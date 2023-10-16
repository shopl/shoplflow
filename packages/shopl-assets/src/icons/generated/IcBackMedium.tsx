import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcBackMedium(props: SVGProps<SVGSVGElement>) {
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
        d="m8.15 5.337-5.876 6.001a.935.935 0 0 0 0 1.323l5.876 6.002a.5.5 0 0 0 .686.027l.764-.665a.5.5 0 0 0 .03-.727L5.42 13H21.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H5.42l4.21-4.298a.5.5 0 0 0-.03-.727l-.764-.666a.5.5 0 0 0-.686.028Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcBackMedium);
