import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGroupSolidMedium(props: SVGProps<SVGSVGElement>) {
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
        d="M10.994 3.343 4.616 8.234c-.39.299-.616.752-.616 1.23v9.963C4 20.296 4.732 21 5.635 21h12.73c.903 0 1.635-.704 1.635-1.573V9.463c0-.478-.226-.93-.614-1.229l-6.352-4.89a1.685 1.685 0 0 0-2.04-.001Zm-1.92 12.55a.71.71 0 0 0 0 1.42h5.852a.71.71 0 0 0 0-1.42H9.074Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcGroupSolidMedium);
