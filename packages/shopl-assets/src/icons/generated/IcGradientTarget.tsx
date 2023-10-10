import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGradientTarget(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12.5} r={10} fill="#4F5DC8" />
      <circle cx={12} cy={12} r={10} fill="url(#ic-gradient-target_svg__a)" />
      <circle cx={12} cy={12} r={7.5} fill="url(#ic-gradient-target_svg__b)" />
      <circle
        cx={12}
        cy={12}
        r={5}
        fill="url(#ic-gradient-target_svg__c)"
        opacity={0.8}
      />
      <circle cx={12} cy={11.751} r={1.75} fill="#4C5BD1" />
      <path
        fill="url(#ic-gradient-target_svg__d)"
        d="M15.137 15.673c.192.198.507.2.702.005l.714-.714a.509.509 0 0 0 .013-.705l-3.311-3.555a.983.983 0 0 0-1.374-.068l-.085.075a1.017 1.017 0 0 0-.055 1.466l3.396 3.496Z"
      />
      <path
        fill="url(#ic-gradient-target_svg__e)"
        fillRule="evenodd"
        d="M18.656 2.564a.218.218 0 0 0-.06.197l.187.935-7.176 7.177a.873.873 0 0 0 1.235 1.235l7.193-7.193.894.179a.218.218 0 0 0 .197-.06l1.327-1.327a.218.218 0 0 0-.076-.358l-1.38-.53a.218.218 0 0 1-.126-.126l-.53-1.38a.218.218 0 0 0-.358-.076l-1.327 1.327Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="ic-gradient-target_svg__a"
          x1={4.727}
          x2={20.182}
          y1={3.818}
          y2={20.637}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#96A0EE" />
          <stop offset={1} stopColor="#6773CF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-target_svg__b"
          x1={10.333}
          x2={19.917}
          y1={9.495}
          y2={21.167}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.691} stopColor="#CFDEEC" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-target_svg__d"
          x1={10.781}
          x2={15.694}
          y1={11.5}
          y2={13.788}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0.3} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="ic-gradient-target_svg__e"
          x1={16.894}
          x2={21.258}
          y1={2.942}
          y2={7.747}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8593FF" />
          <stop offset={0.849} stopColor="#4251C5" />
          <stop offset={1} stopColor="#98A0DD" />
        </linearGradient>
        <radialGradient
          id="ic-gradient-target_svg__c"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(54.462 -4.665 15.611) scale(7.16858 7.16859)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7391FC" />
          <stop offset={1} stopColor="#6773CF" />
        </radialGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientTarget);
