import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientDisplay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <mask id='ic-gradient-display_svg__b' width={16} height={19} x={4} y={2} fill='#000' maskUnits='userSpaceOnUse'>
        <path fill='#fff' d='M4 2h16v19H4z' />
        <path d='M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-13Z' />
      </mask>
      <path
        fill='url(#ic-gradient-display_svg__a)'
        d='M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-13Z'
      />
      <path
        fill='#6D78CD'
        d='M4 2h16H4Zm16 15.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3c0 1.105 1.12 2 2.5 2h11c1.38 0 2.5-.895 2.5-2ZM4 20V2v18ZM20 2v18V2Z'
        mask='url(#ic-gradient-display_svg__b)'
      />
      <path
        fill='url(#ic-gradient-display_svg__c)'
        d='M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 8.5v-2Z'
        opacity={0.8}
      />
      <path
        fill='url(#ic-gradient-display_svg__d)'
        d='M5 13.5A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 15.5v-2Z'
        opacity={0.8}
      />
      <rect width={6} height={3} fill='url(#ic-gradient-display_svg__e)' rx={0.5} transform='matrix(-1 0 0 1 14 6.5)' />
      <rect
        width={2}
        height={3}
        fill='url(#ic-gradient-display_svg__f)'
        rx={0.5}
        transform='matrix(-1 0 0 1 10 13.5)'
      />
      <rect
        width={5}
        height={3}
        fill='url(#ic-gradient-display_svg__g)'
        rx={0.5}
        transform='matrix(-1 0 0 1 16 13.5)'
      />
      <defs>
        <linearGradient
          id='ic-gradient-display_svg__a'
          x1={4}
          x2={21.897}
          y1={2}
          y2={17.86}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C7E3FF' />
          <stop offset={1} stopColor='#8A97E0' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-display_svg__c'
          x1={5}
          x2={8.054}
          y1={5.938}
          y2={14.097}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2C2C2C' />
          <stop offset={1} stopColor='#626262' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-display_svg__d'
          x1={5}
          x2={8.054}
          y1={12.938}
          y2={21.097}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2C2C2C' />
          <stop offset={1} stopColor='#626262' />
        </linearGradient>
        <linearGradient id='ic-gradient-display_svg__e' x1={3} x2={3} y1={0} y2={3} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#E4EDFF' />
          <stop offset={1} stopColor='#AAB8D2' />
        </linearGradient>
        <linearGradient id='ic-gradient-display_svg__f' x1={1} x2={1} y1={0} y2={3} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#E4EDFF' />
          <stop offset={1} stopColor='#AAB8D2' />
        </linearGradient>
        <linearGradient id='ic-gradient-display_svg__g' x1={2.5} x2={2.5} y1={0} y2={3} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#E4EDFF' />
          <stop offset={1} stopColor='#AAB8D2' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientDisplay);
