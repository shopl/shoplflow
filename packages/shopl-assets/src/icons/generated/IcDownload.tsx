import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M9.3 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7.2l2.78-2.836a.5.5 0 0 1 .714 0l.663.676a.5.5 0 0 1 0 .7l-4.8 4.896a.5.5 0 0 1-.714 0l-4.8-4.896a.5.5 0 0 1 0-.7l.663-.676a.5.5 0 0 1 .714 0L9.3 10.7V3.5Zm-4 12a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcDownload);
