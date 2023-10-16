import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcInfoGroup(props: SVGProps<SVGSVGElement>) {
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
        d="M9.246 3.267 4.462 7.07A1.223 1.223 0 0 0 4 8.028v7.748C4 16.452 4.549 17 5.226 17h9.548C15.45 17 16 16.452 16 15.776v-7.75c0-.371-.17-.723-.46-.955l-4.764-3.803a1.228 1.228 0 0 0-1.53-.001Zm-1.42 9.76a.553.553 0 0 0 0 1.106h4.349a.553.553 0 1 0 0-1.106h-4.35Zm.674-5h3v3h-3v-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoGroup);
