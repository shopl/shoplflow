import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientTodo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <mask id='ic-gradient-todo_svg__b' width={16} height={19} x={4} y={3} fill='#000' maskUnits='userSpaceOnUse'>
        <path fill='#fff' d='M4 3h16v19H4z' />
        <path d='M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z' />
      </mask>
      <path
        fill='url(#ic-gradient-todo_svg__a)'
        d='M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z'
      />
      <path
        fill='#5C68C9'
        d='M4 3h16H4Zm16 15.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3c0 1.105 1.12 2 2.5 2h11c1.38 0 2.5-.895 2.5-2ZM4 21V3v18ZM20 3v18V3Z'
        mask='url(#ic-gradient-todo_svg__b)'
      />
      <path
        fill='url(#ic-gradient-todo_svg__c)'
        d='M5.5 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7Z'
      />
      <path
        stroke='url(#ic-gradient-todo_svg__d)'
        strokeOpacity={0.2}
        strokeWidth={0.5}
        d='M5.75 7c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-9A1.75 1.75 0 0 1 5.75 10V7Z'
      />
      <path
        stroke='#61647C'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='m8 8.237 1.323 1.335a.25.25 0 0 0 .355 0L12 7.25'
      />
      <path
        fill='url(#ic-gradient-todo_svg__e)'
        fillRule='evenodd'
        d='M6 14a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 7 14H6Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H9Zm-.5 3.5A.5.5 0 0 1 9 17h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1ZM6 17a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 7 17H6Z'
        clipRule='evenodd'
      />
      <defs>
        <linearGradient
          id='ic-gradient-todo_svg__a'
          x1={0}
          x2={13.111}
          y1={1.2}
          y2={10.42}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#EFF1FF' />
          <stop offset={1} stopColor='#6773CF' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-todo_svg__c'
          x1={5.5}
          x2={11.075}
          y1={6.313}
          y2={16.191}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#EFF1FF' />
        </linearGradient>
        <linearGradient id='ic-gradient-todo_svg__d' x1={12} x2={12} y1={5} y2={12} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#98B7CA' />
        </linearGradient>
        <linearGradient id='ic-gradient-todo_svg__e' x1={5} x2={27.5} y1={13} y2={24.5} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#A8B0E5' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientTodo);
