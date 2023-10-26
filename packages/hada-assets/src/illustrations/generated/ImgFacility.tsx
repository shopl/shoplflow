import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgImgFacility(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 40 40' {...props}>
      <circle cx={20} cy={20} r={20} fill='url(#img-facility_svg__a)' />
      <ellipse cx={20} cy={31} fill='#61CBB5' rx={6} ry={2} />
      <path
        fill='#fff'
        fillRule='evenodd'
        stroke='#333'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M20 10c-4.64 0-8 3.232-8 8.053.054 4.137 2.444 7.94 7.267 11.43l.366.26.313.22.056.037.371-.254c4.876-3.39 7.38-7.073 7.61-11.07l.013-.308.004-.302C28 13.61 24.417 10 20 10Z'
        clipRule='evenodd'
      />
      <circle cx={20} cy={18} r={3} stroke='#333' strokeWidth={2} />
      <defs>
        <linearGradient id='img-facility_svg__a' x1={20} x2={40} y1={0} y2={40} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#F1FAF7' />
          <stop offset={1} stopColor='#E2EDEF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgFacility);
