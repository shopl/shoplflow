import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGradientAttendance(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#ic-gradient-attendance_svg__a)">
        <circle
          cx={12}
          cy={12}
          r={9.75}
          fill="url(#ic-gradient-attendance_svg__b)"
          stroke="url(#ic-gradient-attendance_svg__c)"
          strokeWidth={0.5}
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M10.854 11.732A.5.5 0 0 0 11 11.38V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.707a.5.5 0 0 1-.146.354l-2.793 2.793a.5.5 0 0 1-.707 0l-.707-.708a.5.5 0 0 1 0-.707l2.207-2.207Z"
          clipRule="evenodd"
        />
        <circle cx={5} cy={12} r={1} fill="url(#ic-gradient-attendance_svg__d)" />
        <circle cx={12} cy={5} r={1} fill="url(#ic-gradient-attendance_svg__e)" />
        <circle cx={12} cy={19} r={1} fill="url(#ic-gradient-attendance_svg__f)" />
        <circle
          cx={18.25}
          cy={18.25}
          r={5.25}
          fill="url(#ic-gradient-attendance_svg__g)"
          stroke="#F9F9F9"
          strokeWidth={1.177}
        />
        <path
          stroke="#2D89E4"
          strokeLinecap="round"
          strokeWidth={1.333}
          d="m16.25 17.953 1.302 1.4a.271.271 0 0 0 .397.002L20.25 16.9"
        />
      </g>
      <defs>
        <linearGradient
          id="ic-gradient-attendance_svg__b"
          x1={-1.125}
          x2={12.625}
          y1={-1.125}
          y2={12.625}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#D6E9FB" />
          <stop offset={1} stopColor="#3693ED" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-attendance_svg__c"
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
          id="ic-gradient-attendance_svg__d"
          x1={3.688}
          x2={5.333}
          y1={10.688}
          y2={12.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#EAF5FF" />
          <stop offset={1} stopColor="#B4DAFF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-attendance_svg__e"
          x1={10.688}
          x2={12.333}
          y1={3.688}
          y2={5.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#EAF5FF" />
          <stop offset={1} stopColor="#B4DAFF" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-attendance_svg__f"
          x1={10.688}
          x2={12.333}
          y1={17.688}
          y2={19.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.224} stopColor="#9ECEFD" />
          <stop offset={1} stopColor="#52A4F4" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-attendance_svg__g"
          x1={13}
          x2={23.631}
          y1={12.934}
          y2={23.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF5FF" />
          <stop offset={1} stopColor="#84C2FC" />
        </linearGradient>
        <clipPath id="ic-gradient-attendance_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientAttendance);
