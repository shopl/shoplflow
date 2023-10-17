import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientNotice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='url(#ic-gradient-notice_svg__a)'
        d='M7.9 12.888a1.5 1.5 0 0 1 1.838 1.06l1.553 5.796a1.5 1.5 0 0 1-2.898.777L6.84 14.725a1.5 1.5 0 0 1 1.06-1.837Z'
      />
      <path fill='url(#ic-gradient-notice_svg__b)' d='M17.5 8.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z' />
      <path fill='url(#ic-gradient-notice_svg__c)' d='M4 9.3a3 3 0 0 1 3-3v9a3 3 0 0 1-3-3v-3Z' />
      <path fill='url(#ic-gradient-notice_svg__d)' d='M7 6.333 16 4v14l-9-2.722V6.333Z' />
      <path fill='url(#ic-gradient-notice_svg__e)' d='M16 18V4l-1 .26V17.7l1 .3Z' />
      <path
        fill='url(#ic-gradient-notice_svg__f)'
        d='M16 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4Z'
      />
      <defs>
        <linearGradient
          id='ic-gradient-notice_svg__a'
          x1={9.631}
          x2={6.961}
          y1={16.448}
          y2={21.159}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0881F8' />
          <stop offset={0.286} stopColor='#2592FD' />
          <stop offset={1} stopColor='#0F85F9' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-notice_svg__b'
          x1={16.667}
          x2={20.833}
          y1={9.125}
          y2={11.625}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0680F8' />
          <stop offset={1} stopColor='#3299FE' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-notice_svg__c'
          x1={5.5}
          x2={5.5}
          y1={6.3}
          y2={15.3}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.088} stopColor='#057FF7' />
          <stop offset={0.579} stopColor='#2F98FF' />
          <stop offset={1} stopColor='#057FF7' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-notice_svg__d'
          x1={11.109}
          x2={11.535}
          y1={4.389}
          y2={17.999}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#CCE5FD' />
          <stop offset={0.483} stopColor='#D0E3FF' />
          <stop offset={1} stopColor='#A6D1FD' />
        </linearGradient>
        <linearGradient
          id='ic-gradient-notice_svg__e'
          x1={15.5}
          x2={15.5}
          y1={3.417}
          y2={18}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' stopOpacity={0.2} />
          <stop offset={0.349} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0.2} />
        </linearGradient>
        <linearGradient
          id='ic-gradient-notice_svg__f'
          x1={16.889}
          x2={17.037}
          y1={5.615}
          y2={18.5}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CDE5FE' />
          <stop offset={0.531} stopColor='#DFEDFF' />
          <stop offset={1} stopColor='#AED5FE' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientNotice);
