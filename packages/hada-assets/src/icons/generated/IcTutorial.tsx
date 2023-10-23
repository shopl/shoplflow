import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcTutorial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <circle cx={14} cy={14} r={11} stroke="#333" strokeWidth={2} />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.266 16.167v.942h-2.199v-1.367c0-1.081.374-1.399 1.324-2.206l.339-.288c.683-.592 1.053-.943 1.053-1.811s-.794-1.59-1.718-1.59c-1.59 0-2.18 1.775-2.18 1.775L10 10.753s.887-3.011 4.065-3.011c2.217 0 3.935 1.644 3.935 3.695 0 1.626-.85 2.402-2.05 3.455-.647.573-.684.61-.684 1.275Zm.37 3.491a1.45 1.45 0 0 1-1.46 1.46 1.45 1.45 0 0 1-1.46-1.46c0-.812.647-1.459 1.46-1.459.812 0 1.46.647 1.46 1.46Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcTutorial);
