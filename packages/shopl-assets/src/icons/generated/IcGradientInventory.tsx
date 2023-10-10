import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcGradientInventory(props: SVGProps<SVGSVGElement>) {
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
        fill="url(#ic-gradient-inventory_svg__a)"
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V6Z"
      />
      <path
        fill="url(#ic-gradient-inventory_svg__b)"
        d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V6Z"
      />
      <g opacity={0.3}>
        <path
          fill="url(#ic-gradient-inventory_svg__c)"
          fillOpacity={0.8}
          d="M15 16h4v2h-4v-2Z"
        />
        <path
          stroke="url(#ic-gradient-inventory_svg__d)"
          strokeOpacity={0.2}
          strokeWidth={0.458}
          d="M15.23 16.23h3.54v1.54h-3.54v-1.54Z"
        />
      </g>
      <path
        fill="url(#ic-gradient-inventory_svg__e)"
        fillOpacity={0.8}
        d="M10 5h4v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5Z"
      />
      <path
        stroke="url(#ic-gradient-inventory_svg__f)"
        strokeOpacity={0.2}
        strokeWidth={0.458}
        d="M10.23 5.23h3.54V11a.77.77 0 0 1-.77.77h-2a.77.77 0 0 1-.77-.77V5.23Z"
      />
      <defs>
        <linearGradient
          id="ic-gradient-inventory_svg__a"
          x1={8}
          x2={15.035}
          y1={0.5}
          y2={23.489}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6B977" />
          <stop offset={1} stopColor="#D6A163" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-inventory_svg__b"
          x1={8}
          x2={13.335}
          y1={2.847}
          y2={23.092}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE091" />
          <stop offset={0.526} stopColor="#EFB759" />
          <stop offset={0.804} stopColor="#FDB850" />
          <stop offset={1} stopColor="#EAD87A" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-inventory_svg__c"
          x1={15}
          x2={16.53}
          y1={16.375}
          y2={19.294}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666" />
          <stop offset={1} stopColor="#303030" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-inventory_svg__d"
          x1={17}
          x2={17}
          y1={16}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopColor="#959595" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-inventory_svg__e"
          x1={10}
          x2={15.474}
          y1={6.313}
          y2={9.297}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666" />
          <stop offset={1} stopColor="#303030" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-inventory_svg__f"
          x1={12}
          x2={12}
          y1={5}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#CAC598" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientInventory);
