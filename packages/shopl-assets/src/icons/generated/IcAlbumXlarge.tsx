import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcAlbumXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#406588"
        fillRule="evenodd"
        d="M4 5a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v26a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm9.333 10.667a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667ZM28 28.5H7.5l6.272-7.318a1 1 0 0 1 1.49-.031L18 24.085l6.215-7.445a1 1 0 0 1 1.57.044l2.517 3.384a1 1 0 0 1 .198.596V28a.5.5 0 0 1-.5.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAlbumXlarge);
