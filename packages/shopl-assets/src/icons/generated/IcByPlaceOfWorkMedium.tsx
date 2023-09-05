import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcByPlaceOfWorkMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <circle cx={12} cy={12} r={10} fill='#EAEAEA' />
      <path
        fill='#999'
        fillRule='evenodd'
        d='M7.71 8a2 2 0 0 1 2-2h4.571a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9.71a2 2 0 0 1-2-2V8Zm1.714.571h1.714v1.715H9.424V8.57Zm0 2.572h1.714v1.714H9.424v-1.714ZM13.71 8.57h-1.714v1.715h1.714V8.57Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcByPlaceOfWorkMedium);
