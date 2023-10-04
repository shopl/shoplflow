import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcTargetMedium(props: SVGProps<SVGSVGElement>) {
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
        d="M18.977 6.315a9.06 9.06 0 0 0-1.217-1.23l-1.422 1.421c.454.36.863.774 1.216 1.233l1.423-1.424Zm-.629 2.731 1.484-1.483a9 9 0 1 1-3.307-3.344l-1.478 1.477a7 7 0 1 0 3.302 3.35Zm-2.226.124a5.027 5.027 0 0 0-1.211-1.236l-1.447 1.447c.513.287.933.72 1.203 1.244l1.455-1.455Zm-1.152 3.254 1.83-1.83a5 5 0 1 1-3.29-3.362l-1.78 1.78a3 3 0 1 0 3.24 3.412Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18.706 3.094a.218.218 0 0 0-.06.197l.144.72-7.373 7.372a.873.873 0 0 0 1.235 1.235l7.216-7.216 1.11.222a.218.218 0 0 0 .198-.06l1.326-1.326a.218.218 0 0 0-.076-.359l-1.38-.53a.218.218 0 0 1-.125-.126l-.53-1.38a.218.218 0 0 0-.359-.075l-1.326 1.326Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcTargetMedium);
