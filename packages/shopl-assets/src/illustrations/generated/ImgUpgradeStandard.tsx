import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgImgUpgradeStandard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect width={48} height={48} fill="#EAF5FF" opacity={0.6} rx={16} />
      <path fill="#7FBFFE" d="M13 28.4h11v13l-11-4v-9Z" />
      <path fill="#3299FE" d="M35 28.4H24v13l11-4v-9Z" />
      <path fill="#55A8FA" d="M13.2 25.2 24 23.8v4.6l-10.8-3.2Z" />
      <path fill="#7EBDFC" d="M34.8 25.2 24 23.8v4.6l10.8-3.2Z" />
      <path
        fill="url(#img-upgrade-standard_svg__a)"
        d="M13 7.6h22l-5.6 20.8H18.6L13 7.6Z"
        opacity={0.6}
      />
      <path
        fill="#3299FE"
        d="M21.024 10.72a.2.2 0 0 1 .351 0l.928 1.697a.199.199 0 0 0 .08.08l1.696.927a.2.2 0 0 1 0 .351l-1.696.928a.199.199 0 0 0-.08.08l-.928 1.696a.2.2 0 0 1-.35 0l-.928-1.696a.199.199 0 0 0-.08-.08l-1.696-.928a.2.2 0 0 1 0-.35l1.696-.928a.199.199 0 0 0 .08-.08l.927-1.696ZM26.824 17.12a.2.2 0 0 1 .351 0l.645 1.18a.2.2 0 0 0 .08.08l1.179.645a.2.2 0 0 1 0 .35l-1.18.645a.2.2 0 0 0-.079.08l-.645 1.18a.2.2 0 0 1-.35 0l-.646-1.18a.2.2 0 0 0-.08-.08l-1.179-.645a.2.2 0 0 1 0-.35l1.18-.645a.2.2 0 0 0 .08-.08l.644-1.18Z"
      />
      <path fill="#C2E1FF" d="M13.2 25.2 24 28.4l-3.2 4-10.4-3.6 2.8-3.6Z" />
      <path fill="#9FCEFC" d="M34.8 25.2 24 28.4l3.2 4 10.4-3.6-2.8-3.6Z" />
      <defs>
        <linearGradient
          id="img-upgrade-standard_svg__a"
          x1={24}
          x2={24}
          y1={7.6}
          y2={28.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6FB5FB" stopOpacity={0} />
          <stop offset={0.989} stopColor="#6FB5FB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgUpgradeStandard);
