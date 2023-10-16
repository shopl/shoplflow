import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcInfoPunch(props: SVGProps<SVGSVGElement>) {
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
        d="M12 7c.323 0 .638.03.944.089-.602-1.31-2.027-2.26-3.73-2.334L9 4.75v-1.5c2.905 0 5.331 1.964 5.701 4.542.341.219.653.478.93.771l-3.667 3.927-1.912-1.986a.6.6 0 0 0-.871 0 .66.66 0 0 0 0 .908l2.312 2.401a.604.604 0 0 0 .4.187h.094a.58.58 0 0 0 .384-.18l3.992-4.265a5 5 0 0 1-8.587 5.12c-2.573-.44-4.526-2.774-4.526-5.573 0-1.482.55-2.868 1.496-3.902H4V4h3v3H5.8v-.729a4.28 4.28 0 0 0-1.05 2.83c0 1.701.961 3.155 2.33 3.797A5 5 0 0 1 12 7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoPunch);
