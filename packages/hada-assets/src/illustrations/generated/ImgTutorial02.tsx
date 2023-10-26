import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgImgTutorial02(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 100 100' {...props}>
      <g filter='url(#img-tutorial02_svg__a)'>
        <rect width={66} height={22} x={14} y={14} fill='#fff' rx={3} />
      </g>
      <rect width={37} height={3} x={36} y={20} fill='#EBEEEF' rx={1} />
      <rect width={31} height={3} x={36} y={26} fill='#EBEEEF' rx={1} />
      <rect width={13.8} height={13.8} x={18.6} y={17.6} stroke='#02B585' strokeWidth={1.2} rx={2.4} />
      <path
        stroke='#333'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.7}
        d='M21.5 23.856 24.732 27l4.768-5'
      />
      <rect width={65} height={22} x={14.5} y={43.5} fill='#DFF9F2' stroke='#92BBB0' strokeDasharray={2.3} rx={2.5} />
      <rect width={37} height={3} x={36} y={50} fill='#BDE2D8' rx={1} />
      <rect width={31} height={3} x={36} y={56} fill='#BDE2D8' rx={1} />
      <rect width={13} height={13} x={19} y={48} fill='#BDE2D8' rx={3} />
      <ellipse cx={69.507} cy={84.563} fill='#A2D7C9' rx={18.666} ry={6.436} />
      <path
        fill='#02B585'
        fillRule='evenodd'
        d='M84.5 69.344c4.014-3.957 6.5-9.44 6.5-15.501C91 41.779 81.15 32 69 32s-22 9.78-22 21.843c0 6.228 2.625 11.847 6.837 15.826l12.196 13.736a4 4 0 0 0 5.982 0L84.5 69.345Z'
        clipRule='evenodd'
      />
      <circle cx={69} cy={53} r={11} fill='#fff' />
      <defs>
        <filter
          id='img-tutorial02_svg__a'
          width={82}
          height={38}
          x={6}
          y={8}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values='0 0 0 0 0.141176 0 0 0 0 0.454902 0 0 0 0 0.368627 0 0 0 0.2 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1234_231' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_1234_231' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgTutorial02);
