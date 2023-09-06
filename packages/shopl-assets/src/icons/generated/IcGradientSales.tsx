import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientSales(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <mask id='ic-gradient-sales_svg__b' width={18} height={19} x={3} y={3} fill='#000' maskUnits='userSpaceOnUse'>
        <path fill='#fff' d='M3 3h18v19H3z' />
        <path d='M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z' />
      </mask>
      <path
        fill='url(#ic-gradient-sales_svg__a)'
        d='M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z'
      />
      <path
        fill='#658FB4'
        d='M3 3h18H3Zm18 15.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3c0 1.105 1.12 2 2.5 2h13c1.38 0 2.5-.895 2.5-2ZM3 21V3v18ZM21 3v18V3Z'
        mask='url(#ic-gradient-sales_svg__b)'
      />
      <path
        fill='url(#ic-gradient-sales_svg__c)'
        d='M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z'
      />
      <path
        stroke='url(#ic-gradient-sales_svg__d)'
        strokeOpacity={0.2}
        strokeWidth={0.458}
        d='M4.23 7c0-.978.792-1.77 1.77-1.77h12c.978 0 1.77.792 1.77 1.77v10A1.77 1.77 0 0 1 18 18.77H6A1.77 1.77 0 0 1 4.23 17V7Z'
      />
      <path
        fill='#8092AA'
        fillRule='evenodd'
        d='M16.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1ZM13 14.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2Zm-3 1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Z'
        clipRule='evenodd'
      />
      <path
        fill='url(#ic-gradient-sales_svg__e)'
        fillRule='evenodd'
        d='M16.28 7.25a.234.234 0 0 0-.25-.25l-3.12.224a.234.234 0 0 0-.15.399l.994.994-2.598 2.598-1.324-1.324a.676.676 0 0 0-.956 0l-3.153 3.153.955.956 2.676-2.676 1.324 1.325a.676.676 0 0 0 .956 0l3.076-3.077.947.948a.234.234 0 0 0 .4-.149l.224-3.12Z'
        clipRule='evenodd'
      />
      <defs>
        <linearGradient
          id='ic-gradient-sales_svg__a'
          x1={3}
          x2={21.027}
          y1={3}
          y2={20.972}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#9ABFE0' />
          <stop offset={1} stopColor='#769EC7' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-sales_svg__c'
          x1={4}
          x2={16.976}
          y1={7.625}
          y2={21.773}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#FFFBF4' />
        </linearGradient>
        <linearGradient id='ic-gradient-sales_svg__d' x1={12} x2={12} y1={5} y2={19} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#98BBCA' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-sales_svg__e'
          x1={9.242}
          x2={12.762}
          y1={4.653}
          y2={11.692}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#96CBFF' />
          <stop offset={1} stopColor='#3378FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientSales);
