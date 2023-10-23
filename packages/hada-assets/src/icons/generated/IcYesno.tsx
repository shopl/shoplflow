import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcYesno(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M16.864 3.126a4.985 4.985 0 0 1 1.47 3.54v6.667a5 5 0 0 1-5 5H6.667a4.984 4.984 0 0 1-3.52-1.45"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill="#555"
        d="M5.416 4.722a.542.542 0 1 0-.832.694l1.957 2.35v2.303a.542.542 0 0 0 1.084 0V7.765l1.958-2.349a.542.542 0 0 0-.833-.694L7.083 6.723l-1.667-2ZM15.958 11.127a.542.542 0 0 0-1.083 0v2.736l-2.496-3.018c-.423-.511-1.254-.212-1.254.451v3.89a.542.542 0 1 0 1.083 0v-2.848l2.496 3.018c.423.512 1.254.213 1.254-.451v-3.778Z"
      />
      <path
        fill="#555"
        fillRule="evenodd"
        d="M6.666 1.125a5.542 5.542 0 0 0-5.541 5.542v6.666c0 1.335.472 2.56 1.259 3.517l-.684.684a.542.542 0 0 0 .766.766l.684-.684a5.519 5.519 0 0 0 3.516 1.259h6.667a5.542 5.542 0 0 0 5.542-5.542V6.667a5.52 5.52 0 0 0-1.259-3.517l.683-.684a.542.542 0 1 0-.766-.766l-.683.684a5.52 5.52 0 0 0-3.517-1.259H6.666Zm9.413 2.03a4.44 4.44 0 0 0-2.746-.947H6.666a4.458 4.458 0 0 0-4.458 4.459v6.666c0 1.036.353 1.99.946 2.747L16.08 3.154ZM3.92 16.844a4.44 4.44 0 0 0 2.746.947h6.667a4.458 4.458 0 0 0 4.458-4.459V6.667a4.44 4.44 0 0 0-.946-2.747L3.92 16.846Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcYesno);
