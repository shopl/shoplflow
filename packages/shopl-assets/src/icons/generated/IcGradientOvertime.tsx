import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGradientOvertime(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={9.75}
        fill="url(#ic-gradient-overtime_svg__a)"
        stroke="url(#ic-gradient-overtime_svg__b)"
        strokeWidth={0.5}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.854 11.732A.5.5 0 0 0 11 11.38V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.707a.5.5 0 0 1-.146.354l-2.793 2.793a.5.5 0 0 1-.707 0l-.707-.708a.5.5 0 0 1 0-.707l2.207-2.207Z"
        clipRule="evenodd"
      />
      <circle cx={5} cy={12} r={1} fill="url(#ic-gradient-overtime_svg__c)" />
      <circle cx={12} cy={5} r={1} fill="url(#ic-gradient-overtime_svg__d)" />
      <circle
        cx={12}
        cy={19}
        r={1}
        fill="url(#ic-gradient-overtime_svg__e)"
        fillOpacity={0.5}
      />
      <circle
        cx={18.25}
        cy={18.25}
        r={5.25}
        fill="url(#ic-gradient-overtime_svg__f)"
        stroke="#F9F9F9"
        strokeWidth={1.177}
      />
      <path
        fill="#2D5274"
        fillRule="evenodd"
        d="M16.16 17.998a.5.5 0 0 1 0-.707l1.681-1.682a.5.5 0 0 1 .707 0l1.687 1.686a.5.5 0 0 1 0 .707l-.01.01a.5.5 0 0 1-.707 0l-.804-.805V20.5a.5.5 0 0 1-.5.5h-.069a.5.5 0 0 1-.5-.5v-3.263l-.77.77a.5.5 0 0 1-.707 0l-.009-.01Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="ic-gradient-overtime_svg__a"
          x1={2.5}
          x2={15}
          y1={-7}
          y2={15.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#BFD4ED" />
          <stop offset={1} stopColor="#426F9A" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-overtime_svg__b"
          x1={12}
          x2={12}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.3} />
          <stop offset={1} stopOpacity={0.2} />
        </linearGradient>
        <linearGradient
          id="ic-gradient-overtime_svg__c"
          x1={3.688}
          x2={5.333}
          y1={10.688}
          y2={12.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#fff" />
          <stop offset={1} stopColor="#D3D3D3" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-overtime_svg__d"
          x1={10.688}
          x2={12.333}
          y1={3.688}
          y2={5.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#fff" />
          <stop offset={1} stopColor="#D3D3D3" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-overtime_svg__e"
          x1={10.688}
          x2={12.333}
          y1={17.688}
          y2={19.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#fff" />
          <stop offset={1} stopColor="#D3D3D3" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-overtime_svg__f"
          x1={13}
          x2={23.631}
          y1={12.934}
          y2={23.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F1F1" />
          <stop offset={1} stopColor="#A4AEBE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientOvertime);
