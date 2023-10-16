import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcFilter(props: SVGProps<SVGSVGElement>) {
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
        fill="#555"
        d="M4.33 6 8 11.311v6.174c0 .41.447.655.781.428l2.772-1.218c.28-.19.447-.512.447-.855V11.31L15.67 6H4.33ZM3.64 5h12.72l.928-1.344c.51-.675.04-1.656-.794-1.656H3.506c-.834 0-1.305.98-.794 1.656L3.64 5Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcFilter);
