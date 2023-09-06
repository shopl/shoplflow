import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcBoardMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <rect width={2} height={4} fill='#333' rx={1} transform='matrix(.86604 .49998 -.48741 .87317 14.675 5.5)' />
      <path
        fill='#333'
        fillRule='evenodd'
        d='M6 8.147 4 15.61l2 .536v2.07l-2.517-.674a2 2 0 0 1-1.414-2.45l2.588-9.659a2 2 0 0 1 2.45-1.414L10.771 5H8a2 2 0 0 0-2 2v1.147Z'
        clipRule='evenodd'
      />
      <path
        fill='#333'
        fillRule='evenodd'
        d='M16 6a1 1 0 0 0 1-1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7a1 1 0 0 0 1 1Zm3 1H8v12h11V7Zm-8.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6Zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Z'
        clipRule='evenodd'
      />
      <path
        fill='#333'
        fillRule='evenodd'
        d='M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcBoardMedium);
