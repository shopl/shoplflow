import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcDraftsave(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 2.5a2 2 0 0 1 2 2v2.29a6.976 6.976 0 0 0-1.5-.272V4.5a.5.5 0 0 0-.41-.492L13.5 4h-6v3.5H4v8a.5.5 0 0 0 .41.492L4.5 16h2.46a6.98 6.98 0 0 0 .795 1.5H4.5a2 2 0 0 1-2-2v-9l4-4h7Zm5 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM13 10.5v2.793l1.854 1.853-.708.708L12 13.707V10.5h1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDraftsave);
