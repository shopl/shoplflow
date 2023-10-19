import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientWifi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <g clipPath='url(#ic-gradient-wifi_svg__a)'>
        <path
          fill='url(#ic-gradient-wifi_svg__b)'
          fillRule='evenodd'
          d='M21.87 8.973a.488.488 0 0 0 0-.67C19.318 5.64 15.84 4 12.005 4c-3.838 0-7.32 1.643-9.871 4.312a.488.488 0 0 0 0 .67l1.137 1.224c.2.216.542.212.748 0C6.1 8.08 8.91 6.775 12.005 6.775c3.091 0 5.9 1.302 7.978 3.426.206.21.548.214.748-.002l1.138-1.225ZM5.67 12.09a.482.482 0 0 0-.016.68l1.144 1.232c.193.208.52.212.734.025 1.218-1.066 2.772-1.705 4.464-1.705 1.694 0 3.248.64 4.467 1.706a.529.529 0 0 0 .734-.025l1.145-1.232a.482.482 0 0 0-.016-.68c-1.695-1.584-3.908-2.543-6.328-2.543-2.42 0-4.633.958-6.328 2.542Zm9.25 4.366c.218-.236.162-.614-.13-.748a6.632 6.632 0 0 0-5.582.001c-.292.135-.348.513-.13.748l2.554 2.75a.5.5 0 0 0 .732 0l2.556-2.752Z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <linearGradient
          id='ic-gradient-wifi_svg__b'
          x1={2.002}
          x2={12.002}
          y1={4}
          y2={15}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#66B9A2' stopOpacity={0.64} />
          <stop offset={1} stopColor='#38957E' />
        </linearGradient>
        <clipPath id='ic-gradient-wifi_svg__a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientWifi);
