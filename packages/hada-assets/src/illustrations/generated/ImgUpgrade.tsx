import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgImgUpgrade(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 48 48' {...props}>
      <rect width={48} height={48} fill='#D8F2EB' opacity={0.6} rx={16} />
      <path fill='#8DE8D1' d='M13 28.4h11v13l-11-4v-9Z' />
      <path fill='#4DC9AA' d='M35 28.4H24v13l11-4v-9Z' />
      <path fill='#48CEAD' d='M13.2 25.2 24 23.8v4.6l-10.8-3.2Z' />
      <path fill='#8CEDD5' d='M34.8 25.2 24 23.8v4.6l10.8-3.2Z' />
      <path fill='url(#img-upgrade_svg__a)' d='M13 7.6h22l-5.6 20.8H18.6L13 7.6Z' opacity={0.6} />
      <path
        fill='#77D5BB'
        d='M21.024 10.72a.2.2 0 0 1 .351 0l.928 1.697a.199.199 0 0 0 .08.08l1.696.927a.2.2 0 0 1 0 .351l-1.696.928a.199.199 0 0 0-.08.08l-.928 1.696a.2.2 0 0 1-.35 0l-.928-1.696a.199.199 0 0 0-.08-.08l-1.696-.928a.2.2 0 0 1 0-.35l1.696-.928a.199.199 0 0 0 .08-.08l.927-1.696ZM26.825 17.12a.2.2 0 0 1 .35 0l.645 1.18a.201.201 0 0 0 .08.08l1.18.644a.2.2 0 0 1 0 .351l-1.18.645a.201.201 0 0 0-.08.08l-.644 1.179a.2.2 0 0 1-.351 0l-.645-1.18a.201.201 0 0 0-.08-.079l-1.18-.645a.2.2 0 0 1 0-.35l1.18-.646a.201.201 0 0 0 .08-.08l.645-1.178Z'
      />
      <path fill='#C8FEF0' d='M13.2 25.2 24 28.4l-3.2 4-10.4-3.6 2.8-3.6Z' />
      <path fill='#A1F9E3' d='M34.8 25.2 24 28.4l3.2 4 10.4-3.6-2.8-3.6Z' />
      <defs>
        <linearGradient id='img-upgrade_svg__a' x1={24} x2={24} y1={7.6} y2={28.4} gradientUnits='userSpaceOnUse'>
          <stop stopColor='#64DFC0' stopOpacity={0} />
          <stop offset={0.989} stopColor='#64DFC0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgImgUpgrade);
