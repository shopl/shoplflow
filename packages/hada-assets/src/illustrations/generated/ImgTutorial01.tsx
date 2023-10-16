import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgImgTutorial01(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <g filter="url(#img-tutorial01_svg__a)">
        <rect width={74} height={70} x={13.75} y={11.5} fill="#fff" rx={6} />
      </g>
      <rect width={41} height={4} x={38.75} y={61.5} fill="#EBEEEF" rx={1} />
      <rect width={34} height={4} x={38.75} y={67.5} fill="#EBEEEF" rx={1} />
      <rect
        width={13.8}
        height={13.8}
        x={20.35}
        y={59.1}
        stroke="#02B585"
        strokeWidth={1.2}
        rx={2.4}
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.7}
        d="m23.25 65.356 3.232 3.144 4.768-5"
      />
      <rect width={41} height={4} x={38.75} y={39.5} fill="#EBEEEF" rx={1} />
      <rect width={34} height={4} x={38.75} y={46.5} fill="#EBEEEF" rx={1} />
      <rect
        width={13.8}
        height={13.8}
        x={20.35}
        y={38.1}
        stroke="#02B585"
        strokeWidth={1.2}
        rx={2.4}
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.7}
        d="m23.25 44.356 3.232 3.144 4.768-5"
      />
      <circle cx={79.25} cy={71.5} r={17} fill="#02B585" />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M72.279 71.461h14M79.278 64.461v14"
      />
      <path
        fill="#02B585"
        d="M23.158 27.598c-1.836 0-2.959-1.314-2.959-3.633 0-2.32 1.123-3.633 2.96-3.633 1.835 0 2.963 1.323 2.958 3.633.005 2.324-1.123 3.633-2.959 3.633Zm-1.25-3.633c-.005 1.567.498 2.275 1.25 2.275s1.255-.708 1.25-2.275c0-1.543-.498-2.28-1.25-2.285-.747.005-1.245.742-1.25 2.285Zm7.94 3.633c-1.665 0-2.867-.86-2.862-2.012-.005-.879.699-1.592 1.592-1.729v-.048c-.781-.147-1.328-.787-1.328-1.563 0-1.108 1.099-1.914 2.598-1.914 1.489 0 2.587.81 2.587 1.914 0 .781-.561 1.416-1.328 1.563v.048c.88.137 1.592.85 1.592 1.729 0 1.152-1.201 2.012-2.851 2.012Zm-1.114-2.188c-.005.557.45.952 1.114.957.654-.005 1.103-.4 1.103-.957 0-.556-.469-.967-1.103-.967-.65 0-1.118.406-1.114.967Zm.147-2.988c-.005.513.4.879.967.879.556 0 .962-.366.957-.88.005-.502-.396-.858-.957-.858-.572 0-.972.356-.967.859Z"
      />
      <path
        fill="#333"
        d="M36.81 26.67a.877.877 0 0 1-.878-.889c-.01-.478.395-.869.878-.869.47 0 .884.39.89.87a.905.905 0 0 1-.89.888Zm-.878-4.541c-.01-.479.395-.87.878-.87.47 0 .884.391.89.87a.905.905 0 0 1-.89.889.877.877 0 0 1-.878-.89Zm7.988 5.469c-1.836 0-2.96-1.314-2.96-3.633 0-2.32 1.124-3.633 2.96-3.633 1.836 0 2.964 1.323 2.959 3.633.005 2.324-1.123 3.633-2.96 3.633Zm-1.25-3.633c-.005 1.567.498 2.275 1.25 2.275s1.255-.708 1.25-2.275c0-1.543-.498-2.28-1.25-2.285-.747.005-1.245.742-1.25 2.285Zm8.066 3.633c-1.836 0-2.959-1.314-2.959-3.633 0-2.32 1.123-3.633 2.96-3.633 1.835 0 2.963 1.323 2.958 3.633.005 2.324-1.123 3.633-2.959 3.633Zm-1.25-3.633c-.005 1.567.498 2.275 1.25 2.275s1.255-.708 1.25-2.275c0-1.543-.498-2.28-1.25-2.285-.747.005-1.245.742-1.25 2.285Z"
      />
      <defs>
        <filter
          id="img-tutorial01_svg__a"
          width={94}
          height={90}
          x={3.75}
          y={3.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.454902 0 0 0 0 0.368627 0 0 0 0.2 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1234_249"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1234_249"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgTutorial01);
